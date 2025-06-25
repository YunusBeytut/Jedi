"use client"

import { useState, useEffect } from "react"
import { auth, db } from "../firebase"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth"
import { setDoc, doc, getDoc } from "firebase/firestore"
import "../styles/AuthPage.css"
import { useNavigate } from "react-router-dom"

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [role, setRole] = useState("student")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("Kullanıcı zaten giriş yapmış:", user.uid)
      } else {
        console.log("Kullanıcı giriş yapmamış")
      }
    })
    return () => unsubscribe()
  }, [])

  const checkEmail = async (email) => {
    try {
      const methods = await fetchSignInMethodsForEmail(auth, email)
      return methods.length > 0
    } catch (error) {
      console.error("Email kontrolü hatası:", error)
      return false
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault() // Form'un default submit davranışını engelle
    setErr("") // Önceki hata mesajlarını temizle
    setLoading(true)

    // Şifre uzunluk kontrolü
    if (password.length < 6) {
      setErr("Şifre en az 6 karakter olmalı.")
      setLoading(false)
      return
    }

    try {
      if (isLogin) {
        // Giriş yap
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user

        // Kullanıcının rolünü kontrol et
        const userDoc = await getDoc(doc(db, "users", user.uid))
        if (!userDoc.exists()) {
          setErr("Kullanıcı bilgileri bulunamadı.")
          await auth.signOut() // Kullanıcıyı çıkış yaptır
          setLoading(false)
          return
        }

        const userData = userDoc.data()
        const userRole = userData.role

        // Rol kontrolü - seçilen rol ile kullanıcının gerçek rolü eşleşiyor mu?
        if (userRole !== role) {
          setErr(`Hatalı kullanıcı tipi! Bu hesap ${userRole === "teacher" ? "öğretmen" : "öğrenci"} hesabıdır, ${role === "teacher" ? "öğretmen" : "öğrenci"} değil.`)
          await auth.signOut() // Kullanıcıyı çıkış yaptır
          setLoading(false)
          return
        }

        // Rol kontrolü başarılı, yönlendirme yap
        console.log("Giriş başarılı, yönlendiriliyor...")
        navigate(userRole === "teacher" ? "/teacher-dashboard" : "/student-dashboard")

      } else {
        // Kayıt ol
        const emailExists = await checkEmail(email)
        if (emailExists) {
          setErr("Bu email adresi zaten kullanılıyor.")
          setLoading(false)
          return
        }

        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCredential.user

        // Firestore'a kullanıcı bilgilerini kaydet
        await setDoc(doc(db, "users", user.uid), {
          email: email,
          role: role,
          courses: [],
          createdAt: new Date(),
        })

        setErr("Kayıt başarılı! Şimdi giriş yapabilirsiniz.")
        setIsLogin(true)
        setEmail("")
        setPassword("")
      }
    } catch (error) {
      console.error("Auth error:", error)

      // Hata kodlarına göre kullanıcı dostu mesajlar
      switch (error.code) {
        case "auth/email-already-in-use":
          setErr("Bu e-posta adresi zaten kullanılıyor.")
          break
        case "auth/user-not-found":
          setErr("Bu e-posta adresi ile kayıtlı kullanıcı bulunamadı.")
          break
        case "auth/wrong-password":
          setErr("E-posta veya şifre hatalı!")
          break
        case "auth/invalid-email":
          setErr("Geçersiz e-posta adresi.")
          break
        case "auth/too-many-requests":
          setErr("Çok fazla başarısız giriş denemesi. Lütfen daha sonra tekrar deneyin.")
          break
        case "auth/network-request-failed":
          setErr("Ağ bağlantısı hatası. İnternet bağlantınızı kontrol edin.")
          break
        default:
          setErr("Giriş yapılırken bir hata oluştu. Lütfen tekrar deneyin.")
      }
    } finally {
      setLoading(false) // Loading durumunu her durumda false yap
    }
  }

  return (
    <div className="auth-bg">
      <form className="auth-card" onSubmit={handleSubmit}>
        <div className="auth-title">{isLogin ? "Giriş Yap" : "Kayıt Ol"}</div>
        {err && <div className="auth-error">{err}</div>}

        {/* Rol seçimi */}
        <div>
          <span className="auth-label">Kullanıcı Tipi</span>
          <div className="auth-radio-group">
            <label className="auth-radio-label">
              <input
                type="radio"
                className="auth-radio"
                name="role"
                value="student"
                checked={role === "student"}
                onChange={() => setRole("student")}
              />{" "}
              Öğrenci
            </label>
            <label className="auth-radio-label">
              <input
                type="radio"
                className="auth-radio"
                name="role"
                value="teacher"
                checked={role === "teacher"}
                onChange={() => setRole("teacher")}
              />{" "}
              Öğretmen
            </label>
          </div>
        </div>

        <label className="auth-label" htmlFor="email">
          E-posta
        </label>
        <input
          id="email"
          className="auth-input"
          type="email"
          autoComplete="email"
          placeholder="mail@örnek.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="auth-label" htmlFor="password">
          Şifre
        </label>
        <input
          id="password"
          type="password"
          className="auth-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Şifreniz (en az 6 karakter)"
          autoComplete={isLogin ? "current-password" : "new-password"}
          required
        />

        <button className="auth-btn" type="submit" disabled={loading}>
          {loading ? "İşlem yapılıyor..." : isLogin ? "Giriş Yap" : "Kayıt Ol"}
        </button>

        <div style={{ textAlign: "center", marginTop: 10, fontSize: "0.98em" }}>
          {isLogin ? "Hesabın yok mu?" : "Zaten hesabın var mı?"}
          <button
            type="button"
            className="auth-toggle"
            onClick={() => {
              setIsLogin(!isLogin)
              setErr("")
            }}
            tabIndex={-1}
          >
            {isLogin ? "Kayıt Ol" : "Giriş Yap"}
          </button>
        </div>
      </form>
    </div>
  )
}