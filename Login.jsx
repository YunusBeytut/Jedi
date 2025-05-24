import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userType, setUserType] = useState("student");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const email = `${username}@${userType === 'teacher' ? 'ogretmen.com' : 'ogrenci.com'}`;

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setIsSubmitting(false);
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Giriş Yap</h2>

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

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Kullanıcı Adı"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Giriş Yapılıyor..." : "Giriş Yap"}
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      <p className="register-link">
        Hesabınız yok mu?{" "}
        <span onClick={() => navigate("/register")}>Kayıt Olun</span>
      </p>
    </div>
  );
}

export default Login;