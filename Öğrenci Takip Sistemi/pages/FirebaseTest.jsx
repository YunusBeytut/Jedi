"use client"

import { useState, useEffect } from "react"
import { auth } from "../firebase"
import { signInAnonymously, signOut, onAuthStateChanged } from "firebase/auth"

export default function FirebaseTest() {
    const [status, setStatus] = useState("Kontrol ediliyor...")
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(
            auth,
            (user) => {
                if (user) {
                    setUser(user)
                    setStatus("Firebase bağlantısı başarılı, kullanıcı: " + user.uid)
                } else {
                    setUser(null)
                    setStatus("Firebase bağlantısı başarılı, kullanıcı oturum açmamış")
                }
            },
            (error) => {
                setError(error)
                setStatus("Firebase bağlantı hatası: " + error.message)
            },
        )

        return () => unsubscribe()
    }, [])

    const handleAnonymousSignIn = async () => {
        try {
            setStatus("Anonim giriş yapılıyor...")
            const result = await signInAnonymously(auth)
            setStatus("Anonim giriş başarılı: " + result.user.uid)
        } catch (error) {
            setError(error)
            setStatus("Anonim giriş hatası: " + error.message)
        }
    }

    const handleSignOut = async () => {
        try {
            setStatus("Çıkış yapılıyor...")
            await signOut(auth)
            setStatus("Çıkış başarılı")
        } catch (error) {
            setError(error)
            setStatus("Çıkış hatası: " + error.message)
        }
    }

    return (
        <div style={{ padding: 20, maxWidth: 600, margin: "0 auto" }}>
            <h1>Firebase Test Sayfası</h1>

            <div
                style={{
                    padding: 15,
                    border: "1px solid #ddd",
                    borderRadius: 8,
                    marginBottom: 20,
                    backgroundColor: error ? "#fff0f0" : "#f0fff0",
                }}
            >
                <h3>Firebase Durumu:</h3>
                <p>{status}</p>

                {error && (
                    <div style={{ color: "red", marginTop: 10 }}>
                        <p>Hata Kodu: {error.code}</p>
                        <p>Hata Mesajı: {error.message}</p>
                    </div>
                )}
            </div>

            <div style={{ display: "flex", gap: 10 }}>
                <button
                    onClick={handleAnonymousSignIn}
                    disabled={!!user}
                    style={{
                        padding: "8px 16px",
                        backgroundColor: user ? "#ccc" : "#4285F4",
                        color: "white",
                        border: "none",
                        borderRadius: 4,
                        cursor: user ? "not-allowed" : "pointer",
                    }}
                >
                    Anonim Giriş Yap
                </button>

                <button
                    onClick={handleSignOut}
                    disabled={!user}
                    style={{
                        padding: "8px 16px",
                        backgroundColor: !user ? "#ccc" : "#DB4437",
                        color: "white",
                        border: "none",
                        borderRadius: 4,
                        cursor: !user ? "not-allowed" : "pointer",
                    }}
                >
                    Çıkış Yap
                </button>
            </div>

            {user && (
                <div style={{ marginTop: 20 }}>
                    <h3>Kullanıcı Bilgileri:</h3>
                    <pre
                        style={{
                            backgroundColor: "#f5f5f5",
                            padding: 10,
                            borderRadius: 4,
                            overflow: "auto",
                        }}
                    >
                        {JSON.stringify(user, null, 2)}
                    </pre>
                </div>
            )}

            <div style={{ marginTop: 30 }}>
                <h3>Firebase Yapılandırma Kontrol Listesi:</h3>
                <ul>
                    <li>Firebase konsolünde Authentication servisi etkinleştirilmiş mi?</li>
                    <li>Email/Password giriş yöntemi etkinleştirilmiş mi?</li>
                    <li>API anahtarınız doğru ve etkin mi?</li>
                    <li>Firebase projenizin domain'i doğru ayarlanmış mı?</li>
                </ul>
            </div>
        </div>
    )
}
