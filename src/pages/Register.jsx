import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [userType, setUserType] = useState("student"); // 'student' veya 'teacher'
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        // Şifre kontrolü
        if (password !== confirmPassword) {
            setError("Şifreler eşleşmiyor!");
            return;
        }

        // Email oluşturma
        const email = `${username}@${userType === 'teacher' ? 'ogretmen.com' : 'ogrenci.com'}`;

        setIsSubmitting(true);
        setError(null);

        try {
            // 1. Authentication'a kayıt
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // 2. Eğer öğrenciyse Firestore'a kaydet
            if (userType === 'student') {
                await setDoc(doc(db, "students", user.uid), {
                    name: username,
                    email: email,
                    grades: {}, // Başlangıçta boş notlar
                    createdAt: new Date()
                });
            }

            alert("Kayıt başarılı! Giriş yapabilirsiniz.");
            navigate("/");
        } catch (err) {
            let errorMessage = "Kayıt sırasında bir hata oluştu";

            // Firebase hata mesajlarını Türkçe'ye çevirme
            switch (err.code) {
                case "auth/email-already-in-use":
                    errorMessage = "Bu email adresi zaten kullanımda";
                    break;
                case "auth/invalid-email":
                    errorMessage = "Geçersiz email adresi";
                    break;
                case "auth/weak-password":
                    errorMessage = "Şifre en az 6 karakter olmalıdır";
                    break;
                default:
                    errorMessage = err.message;
            }

            setError(errorMessage);
            setIsSubmitting(false);
        }
    };

    return (
        <div className="register-container">
            <h2>Kayıt Ol</h2>

            {/* Kullanıcı Tipi Seçimi */}
            <div className="role-toggle">
                <button
                    type="button"
                    className={userType === 'student' ? 'active' : ''}
                    onClick={() => setUserType('student')}
                >
                    Öğrenci
                </button>
                <button
                    type="button"
                    className={userType === 'teacher' ? 'active' : ''}
                    onClick={() => setUserType('teacher')}
                >
                    Öğretmen
                </button>
            </div>

            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Kullanıcı Adı"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Şifre (en az 6 karakter)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    minLength="6"
                    required
                />
                <input
                    type="password"
                    placeholder="Şifreyi Tekrar Girin"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    minLength="6"
                    required
                />
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Kayıt Olunuyor..." : "Kayıt Ol"}
                </button>
            </form>

            {error && <div className="error-message">{error}</div>}

            <p className="login-link">
                Zaten hesabınız var mı?{" "}
                <span onClick={() => navigate("/")}>Giriş Yapın</span>
            </p>
        </div>
    );
}

export default Register;