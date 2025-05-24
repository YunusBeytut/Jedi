"use client"

import { useState, useEffect } from "react"
import { auth, db } from "../firebase"
import { collection, query, getDocs, updateDoc, doc, addDoc, deleteDoc, orderBy, onSnapshot } from "firebase/firestore"
import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth"
import "./Dashboard.css"

function AdminDashboard() {
    const navigate = useNavigate()
    const [students, setStudents] = useState([])
    const [announcements, setAnnouncements] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState("")
    const [editingGrade, setEditingGrade] = useState(null)
    const [newGrade, setNewGrade] = useState("")

    // Yeni not ekleme state'leri
    const [selectedStudent, setSelectedStudent] = useState("")
    const [newLessonName, setNewLessonName] = useState("")
    const [newLessonGrade, setNewLessonGrade] = useState("")
    const [showAddGradeForm, setShowAddGradeForm] = useState(false)

    // Duyuru state'leri
    const [showAnnouncementForm, setShowAnnouncementForm] = useState(false)
    const [announcementTitle, setAnnouncementTitle] = useState("")
    const [announcementContent, setAnnouncementContent] = useState("")
    const [isImportant, setIsImportant] = useState(false)

    // Tüm öğrencileri çek
    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const q = query(collection(db, "students"))
                const querySnapshot = await getDocs(q)

                const studentsData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                    average: calculateAverage(doc.data().grades || {}),
                }))

                setStudents(studentsData)
                setLoading(false)
            } catch (error) {
                console.error("Öğrenciler yüklenirken hata:", error)
                setLoading(false)
            }
        }

        fetchStudents()
    }, [])

    // Duyuruları çek
    useEffect(() => {
        const q = query(collection(db, "announcements"), orderBy("createdAt", "desc"))

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const announcementsData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))
            setAnnouncements(announcementsData)
        })

        return () => unsubscribe()
    }, [])

    // Not ortalamasını hesapla
    const calculateAverage = (grades) => {
        if (!grades || Object.keys(grades).length === 0) return 0
        const gradeValues = Object.values(grades)
        const sum = gradeValues.reduce((a, b) => a + b, 0)
        return (sum / gradeValues.length).toFixed(2)
    }

    // Çıkış yap
    const handleLogout = async () => {
        try {
            await signOut(auth)
            navigate("/")
        } catch (error) {
            console.error("Çıkış yaparken hata:", error)
        }
    }

    // Duyuru ekle
    const handleAddAnnouncement = async () => {
        if (!announcementTitle.trim() || !announcementContent.trim()) {
            alert("Lütfen başlık ve içerik alanlarını doldurun!")
            return
        }

        try {
            await addDoc(collection(db, "announcements"), {
                title: announcementTitle.trim(),
                content: announcementContent.trim(),
                isImportant: isImportant,
                createdAt: new Date(),
                createdBy: auth.currentUser.email,
            })

            // Formu temizle
            setAnnouncementTitle("")
            setAnnouncementContent("")
            setIsImportant(false)
            setShowAnnouncementForm(false)
            alert("Duyuru başarıyla eklendi!")
        } catch (error) {
            console.error("Duyuru eklenirken hata:", error)
            alert("Hata: " + error.message)
        }
    }

    // Duyuru sil
    const handleDeleteAnnouncement = async (announcementId) => {
        if (!window.confirm("Bu duyuruyu silmek istediğinizden emin misiniz?")) {
            return
        }

        try {
            await deleteDoc(doc(db, "announcements", announcementId))
            alert("Duyuru başarıyla silindi!")
        } catch (error) {
            console.error("Duyuru silinirken hata:", error)
            alert("Hata: " + error.message)
        }
    }

    // Not düzenleme moduna geç
    const handleEditGrade = (studentId, lesson, currentGrade) => {
        setEditingGrade({ studentId, lesson })
        setNewGrade(currentGrade)
    }

    // Not güncelle
    const handleUpdateGrade = async () => {
        if (!newGrade || isNaN(newGrade) || newGrade < 0 || newGrade > 100) {
            alert("Lütfen 0-100 arasında geçerli bir not girin!")
            return
        }

        try {
            const studentRef = doc(db, "students", editingGrade.studentId)
            await updateDoc(studentRef, {
                [`grades.${editingGrade.lesson}`]: Number(newGrade),
            })

            // Yerel state'i güncelle
            setStudents(
                students.map((student) => {
                    if (student.id === editingGrade.studentId) {
                        const updatedGrades = {
                            ...student.grades,
                            [editingGrade.lesson]: Number(newGrade),
                        }
                        return {
                            ...student,
                            grades: updatedGrades,
                            average: calculateAverage(updatedGrades),
                        }
                    }
                    return student
                }),
            )

            setEditingGrade(null)
            setNewGrade("")
            alert("Not başarıyla güncellendi!")
        } catch (error) {
            console.error("Not güncellenirken hata:", error)
            alert("Hata: " + error.message)
        }
    }

    // Yeni not ekle
    const handleAddNewGrade = async () => {
        if (!selectedStudent || !newLessonName || !newLessonGrade) {
            alert("Lütfen tüm alanları doldurun!")
            return
        }

        if (isNaN(newLessonGrade) || newLessonGrade < 0 || newLessonGrade > 100) {
            alert("Lütfen 0-100 arasında geçerli bir not girin!")
            return
        }

        try {
            const studentRef = doc(db, "students", selectedStudent)
            const lessonKey = newLessonName.toLowerCase().trim()

            await updateDoc(studentRef, {
                [`grades.${lessonKey}`]: Number(newLessonGrade),
            })

            // Yerel state'i güncelle
            setStudents(
                students.map((student) => {
                    if (student.id === selectedStudent) {
                        const updatedGrades = {
                            ...student.grades,
                            [lessonKey]: Number(newLessonGrade),
                        }
                        return {
                            ...student,
                            grades: updatedGrades,
                            average: calculateAverage(updatedGrades),
                        }
                    }
                    return student
                }),
            )

            // Formu temizle
            setSelectedStudent("")
            setNewLessonName("")
            setNewLessonGrade("")
            setShowAddGradeForm(false)
            alert("Not başarıyla eklendi!")
        } catch (error) {
            console.error("Not eklenirken hata:", error)
            alert("Hata: " + error.message)
        }
    }

    // Notu sil
    const handleDeleteGrade = async (studentId, lesson) => {
        if (!window.confirm(`${lesson} dersinin notunu silmek istediğinizden emin misiniz?`)) {
            return
        }

        try {
            const studentRef = doc(db, "students", studentId)
            const student = students.find((s) => s.id === studentId)
            const updatedGrades = { ...student.grades }
            delete updatedGrades[lesson]

            await updateDoc(studentRef, {
                grades: updatedGrades,
            })

            // Yerel state'i güncelle
            setStudents(
                students.map((s) => {
                    if (s.id === studentId) {
                        return {
                            ...s,
                            grades: updatedGrades,
                            average: calculateAverage(updatedGrades),
                        }
                    }
                    return s
                }),
            )

            alert("Not başarıyla silindi!")
        } catch (error) {
            console.error("Not silinirken hata:", error)
            alert("Hata: " + error.message)
        }
    }

    // Filtrelenmiş öğrenci listesi
    const filteredStudents = students.filter(
        (student) =>
            student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.email.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    // Tarih formatlama
    const formatDate = (date) => {
        if (!date) return ""
        const d = date.toDate ? date.toDate() : new Date(date)
        return d.toLocaleDateString("tr-TR", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        })
    }

    if (loading) {
        return <div className="loading-spinner"></div>
    }

    return (
        <div className="dashboard-container admin-dashboard">
            <header className="dashboard-header">
                <div>
                    <h1>🎓 Öğretmen Paneli</h1>
                    <p className="user-email">{auth.currentUser?.email}</p>
                </div>
                <button onClick={handleLogout} className="logout-btn">
                    Çıkış Yap
                </button>
            </header>

            <main className="dashboard-content">
                {/* Duyuru Yönetimi Bölümü */}
                <div className="announcement-management-section">
                    <div className="section-header">
                        <h2>📢 Duyuru Yönetimi</h2>
                        <button onClick={() => setShowAnnouncementForm(!showAnnouncementForm)} className="toggle-form-btn">
                            {showAnnouncementForm ? "Formu Gizle" : "Yeni Duyuru"}
                        </button>
                    </div>

                    {showAnnouncementForm && (
                        <div className="add-announcement-form">
                            <h3>Yeni Duyuru Ekle</h3>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Duyuru Başlığı:</label>
                                    <input
                                        type="text"
                                        placeholder="Duyuru başlığını girin..."
                                        value={announcementTitle}
                                        onChange={(e) => setAnnouncementTitle(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Duyuru İçeriği:</label>
                                    <textarea
                                        placeholder="Duyuru içeriğini girin..."
                                        value={announcementContent}
                                        onChange={(e) => setAnnouncementContent(e.target.value)}
                                        rows="4"
                                    />
                                </div>

                                <div className="form-group checkbox-group">
                                    <label className="checkbox-label">
                                        <input type="checkbox" checked={isImportant} onChange={(e) => setIsImportant(e.target.checked)} />
                                        <span>Önemli duyuru olarak işaretle</span>
                                    </label>
                                </div>

                                <div className="form-actions">
                                    <button onClick={handleAddAnnouncement} className="add-btn">
                                        Duyuru Yayınla
                                    </button>
                                    <button
                                        onClick={() => {
                                            setAnnouncementTitle("")
                                            setAnnouncementContent("")
                                            setIsImportant(false)
                                            setShowAnnouncementForm(false)
                                        }}
                                        className="cancel-btn"
                                    >
                                        İptal
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Mevcut Duyurular */}
                    <div className="announcements-list">
                        <h3>📋 Yayınlanan Duyurular ({announcements.length})</h3>
                        {announcements.length > 0 ? (
                            <div className="announcements-grid">
                                {announcements.map((announcement) => (
                                    <div
                                        key={announcement.id}
                                        className={`announcement-card ${announcement.isImportant ? "important" : ""}`}
                                    >
                                        <div className="announcement-header">
                                            <h4>{announcement.title}</h4>
                                            {announcement.isImportant && <span className="important-badge">Önemli</span>}
                                            <button
                                                onClick={() => handleDeleteAnnouncement(announcement.id)}
                                                className="delete-announcement-btn"
                                                title="Duyuruyu Sil"
                                            >
                                                🗑️
                                            </button>
                                        </div>
                                        <div className="announcement-content">
                                            <p>{announcement.content}</p>
                                        </div>
                                        <div className="announcement-footer">
                                            <small>
                                                {formatDate(announcement.createdAt)} - {announcement.createdBy}
                                            </small>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="no-data">
                                <h4>📢 Henüz duyuru yok</h4>
                                <p>İlk duyurunuzu eklemek için yukarıdaki butonu kullanın.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Yeni Not Ekleme Bölümü */}
                <div className="grade-management-section">
                    <div className="section-header">
                        <h2>📝 Not Yönetimi</h2>
                        <button onClick={() => setShowAddGradeForm(!showAddGradeForm)} className="toggle-form-btn">
                            {showAddGradeForm ? "Formu Gizle" : "Yeni Not Ekle"}
                        </button>
                    </div>

                    {showAddGradeForm && (
                        <div className="add-grade-form">
                            <h3>Öğrenciye Not Ekle</h3>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Öğrenci Seç:</label>
                                    <select value={selectedStudent} onChange={(e) => setSelectedStudent(e.target.value)}>
                                        <option value="">Öğrenci seçin...</option>
                                        {students.map((student) => (
                                            <option key={student.id} value={student.id}>
                                                {student.name} ({student.email})
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Ders Adı:</label>
                                    <input
                                        type="text"
                                        placeholder="Matematik, Fizik, vs..."
                                        value={newLessonName}
                                        onChange={(e) => setNewLessonName(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Not (0-100):</label>
                                    <input
                                        type="number"
                                        min="0"
                                        max="100"
                                        placeholder="85"
                                        value={newLessonGrade}
                                        onChange={(e) => setNewLessonGrade(e.target.value)}
                                    />
                                </div>

                                <div className="form-actions">
                                    <button onClick={handleAddNewGrade} className="add-btn">
                                        Not Ekle
                                    </button>
                                    <button
                                        onClick={() => {
                                            setSelectedStudent("")
                                            setNewLessonName("")
                                            setNewLessonGrade("")
                                            setShowAddGradeForm(false)
                                        }}
                                        className="cancel-btn"
                                    >
                                        İptal
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Arama ve Filtreleme */}
                <div className="search-section">
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Öğrenci ara..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <span className="student-count">{filteredStudents.length} öğrenci</span>
                    </div>
                </div>

                {/* Öğrenci Listesi */}
                <div className="students-grades">
                    <h2>👥 Öğrenci Notları</h2>

                    {filteredStudents.length > 0 ? (
                        <div className="students-grid">
                            {filteredStudents.map((student) => (
                                <div key={student.id} className="student-card">
                                    <div className="student-header">
                                        <h3>{student.name}</h3>
                                        <p className="student-email">{student.email}</p>
                                        <div className="student-average">
                                            <span className={`average-badge ${student.average >= 50 ? "pass" : "fail"}`}>
                                                Ortalama: {student.average}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="student-grades">
                                        <h4>Notlar:</h4>
                                        {Object.keys(student.grades || {}).length > 0 ? (
                                            <div className="grades-list">
                                                {Object.entries(student.grades).map(([lesson, grade]) => (
                                                    <div key={lesson} className="grade-row">
                                                        <div className="grade-info">
                                                            <span className="lesson-name">{lesson.charAt(0).toUpperCase() + lesson.slice(1)}</span>
                                                            <span className={`grade-value ${grade >= 50 ? "pass" : "fail"}`}>{grade}</span>
                                                        </div>

                                                        <div className="grade-actions">
                                                            {editingGrade?.studentId === student.id && editingGrade?.lesson === lesson ? (
                                                                <div className="edit-form">
                                                                    <input
                                                                        type="number"
                                                                        value={newGrade}
                                                                        onChange={(e) => setNewGrade(e.target.value)}
                                                                        min="0"
                                                                        max="100"
                                                                    />
                                                                    <button onClick={handleUpdateGrade} className="save-btn">
                                                                        ✓
                                                                    </button>
                                                                    <button onClick={() => setEditingGrade(null)} className="cancel-btn">
                                                                        ✕
                                                                    </button>
                                                                </div>
                                                            ) : (
                                                                <div className="action-buttons">
                                                                    <button
                                                                        onClick={() => handleEditGrade(student.id, lesson, grade)}
                                                                        className="edit-btn"
                                                                        title="Düzenle"
                                                                    >
                                                                        ✏️
                                                                    </button>
                                                                    <button
                                                                        onClick={() => handleDeleteGrade(student.id, lesson)}
                                                                        className="delete-btn"
                                                                        title="Sil"
                                                                    >
                                                                        🗑️
                                                                    </button>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <p className="no-grades">Henüz not girilmedi</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="no-data">
                            <h4>👤 Öğrenci bulunamadı</h4>
                            <p>Arama kriterlerinize uygun öğrenci bulunmuyor.</p>
                        </div>
                    )}
                </div>

                {/* İstatistikler */}
                {students.length > 0 && (
                    <div className="statistics-section">
                        <h3>📊 Genel İstatistikler</h3>
                        <div className="stats-grid">
                            <div className="stat-item">
                                <span className="stat-label">Toplam Öğrenci:</span>
                                <span className="stat-value">{students.length}</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Geçen Öğrenci:</span>
                                <span className="stat-value pass">{students.filter((s) => s.average >= 50).length}</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Kalan Öğrenci:</span>
                                <span className="stat-value fail">
                                    {students.filter((s) => s.average > 0 && s.average < 50).length}
                                </span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Toplam Duyuru:</span>
                                <span className="stat-value">{announcements.length}</span>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    )
}

export default AdminDashboard
