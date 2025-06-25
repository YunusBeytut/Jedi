"use client"

import { useAuthState } from "react-firebase-hooks/auth"
import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { auth, db } from "./firebase"
import { doc, getDoc } from "firebase/firestore"
import LoginPage from "./pages/LoginPage"
import StudentDashboard from "./pages/StudentDashboard"
import TeacherDashboard from "./pages/TeacherDashboard"
import FirebaseTest from "./pages/FirebaseTest"
 // Yeni test sayfası

export default function App() {
  const [user, loading] = useAuthState(auth)
  const [role, setRole] = useState(null)
  const [roleLoading, setRoleLoading] = useState(false)

  useEffect(() => {
    if (user) {
      setRoleLoading(true)
      getDoc(doc(db, "users", user.uid)).then((snap) => {
        setRole(snap.data()?.role)
        setRoleLoading(false)
      })
    } else {
      setRole(null)
      setRoleLoading(false)
    }
  }, [user])

  if (loading || roleLoading) return <div style={{ textAlign: "center", marginTop: 40 }}>Yükleniyor...</div>

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/firebase-test" element={<FirebaseTest />} /> {/* Test sayfası rotası */}
        <Route
          path="/"
          element={
            !user ? (
              <Navigate to="/login" replace />
            ) : role === "teacher" ? (
              <TeacherDashboard />
            ) : role === "student" ? (
              <StudentDashboard />
            ) : (
              <div>Kullanıcı rolü bulunamadı</div>
            )
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}
