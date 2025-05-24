import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { doc, onSnapshot } from 'firebase/firestore';
import './Dashboard.css';

function StudentDashboard() {
    const navigate = useNavigate();
    const [grades, setGrades] = useState({});
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [averageGrade, setAverageGrade] = useState(0);

    // Kullanıcı oturum durumunu takip et
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);

            if (!currentUser) {
                navigate('/');
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    // Firestore'dan öğrenci verilerini çek (SADECE OKUMA)
    useEffect(() => {
        if (!user) return;

        const studentRef = doc(db, "students", user.uid);

        const unsubscribe = onSnapshot(studentRef, (docSnapshot) => {
            if (docSnapshot.exists()) {
                const data = docSnapshot.data();
                setGrades(data.grades || {});

                // Ortalama notu hesapla
                if (data.grades && Object.keys(data.grades).length > 0) {
                    const gradeValues = Object.values(data.grades);
                    const sum = gradeValues.reduce((a, b) => a + b, 0);
                    setAverageGrade((sum / gradeValues.length).toFixed(2));
                } else {
                    setAverageGrade(0);
                }
            }
        });

        return () => unsubscribe();
    }, [user]);

    // Çıkış yap
    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/');
        } catch (error) {
            console.error('Çıkış yaparken hata:', error);
        }
    };

    // Geçme/Kalma durumu belirleme
    const getGradeStatus = (grade) => {
        return grade >= 50 ? 'Geçti' : 'Kaldı';
    };

    // Genel başarı durumu
    const getOverallStatus = () => {
        const gradeValues = Object.values(grades);
        if (gradeValues.length === 0) return 'Henüz not girilmedi';

        const failedCount = gradeValues.filter(grade => grade < 50).length;

        if (failedCount === 0) return 'Tüm derslerden geçti';
        if (failedCount <= 2) return `${failedCount} dersten kaldı`;
        return 'Sınıfta kaldı';
    };

    if (loading) {
        return <div className="loading-spinner"></div>;
    }

    if (!user) {
        return (
            <div className="auth-error">
                <p>Oturum açılmadı! Lütfen giriş yapın.</p>
                <button onClick={() => navigate('/')}>Giriş Sayfasına Dön</button>
            </div>
        );
    }

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <div>
                    <h1>Hoşgeldiniz, {user.email.split('@')[0] || 'Öğrenci'}!</h1>
                    <p className="user-email">{user.email}</p>
                </div>
                <button onClick={handleLogout} className="logout-btn">Çıkış Yap</button>
            </header>

            <main className="dashboard-content">
                {/* Öğrenci Bilgileri */}
                <section className="user-card">
                    <h2>Öğrenci Bilgileri</h2>
                    <div className="info-row">
                        <span className="info-label">Ad Soyad:</span>
                        <span className="info-value">{user.email.split('@')[0]}</span>
                    </div>
                    <div className="info-row">
                        <span className="info-label">Email:</span>
                        <span className="info-value">{user.email}</span>
                    </div>
                    <div className="info-row">
                        <span className="info-label">Not Ortalaması:</span>
                        <span className={`info-value ${averageGrade >= 50 ? 'pass' : 'fail'}`}>
                            {averageGrade > 0 ? averageGrade : 'Henüz not yok'}
                        </span>
                    </div>
                    <div className="info-row">
                        <span className="info-label">Genel Durum:</span>
                        <span className="info-value">{getOverallStatus()}</span>
                    </div>
                </section>

                {/* Bilgilendirme Mesajı */}
                <div className="info-message">
                    <h3>📋 Not Durumunuz</h3>
                    <p>
                        Notlarınız öğretmenleriniz tarafından sisteme girilmektedir.
                        Herhangi bir yanlışlık durumunda ders öğretmeninizle iletişime geçiniz.
                    </p>
                </div>

                {/* Not Listesi - SADECE GÖRÜNTÜLEME */}
                <div className="grades-section">
                    <div className="section-header">
                        <h3>Notlarım</h3>
                        {Object.keys(grades).length > 0 && (
                            <span className="grade-count">
                                {Object.keys(grades).length} ders
                            </span>
                        )}
                    </div>

                    {Object.keys(grades).length > 0 ? (
                        <table className="grades-table">
                            <thead>
                                <tr>
                                    <th>Ders Adı</th>
                                    <th>Not</th>
                                    <th>Durum</th>
                                    <th>50'ye Göre</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(grades).map(([lesson, grade]) => (
                                    <tr key={lesson} className={grade >= 50 ? 'pass-row' : 'fail-row'}>
                                        <td className="lesson-name">
                                            {lesson.charAt(0).toUpperCase() + lesson.slice(1)}
                                        </td>
                                        <td>
                                            <span className={`grade-badge ${grade >= 50 ? 'pass' : 'fail'}`}>
                                                {grade}
                                            </span>
                                        </td>
                                        <td>
                                            <span className={`status-badge ${grade >= 50 ? 'pass' : 'fail'}`}>
                                                {getGradeStatus(grade)}
                                            </span>
                                        </td>
                                        <td className="grade-diff">
                                            {grade >= 50
                                                ? `+${(grade - 50).toFixed(0)}`
                                                : `${(grade - 50).toFixed(0)}`
                                            }
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className="no-data">
                            <h4>📚 Henüz not girilmedi</h4>
                            <p>Öğretmenleriniz notlarınızı girdikçe burada görünecektir.</p>
                        </div>
                    )}
                </div>

                {/* İstatistikler */}
                {Object.keys(grades).length > 0 && (
                    <div className="statistics-section">
                        <h3>📊 Not İstatistikleriniz</h3>
                        <div className="stats-grid">
                            <div className="stat-item">
                                <span className="stat-label">Toplam Ders:</span>
                                <span className="stat-value">{Object.keys(grades).length}</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Geçilen Ders:</span>
                                <span className="stat-value pass">
                                    {Object.values(grades).filter(g => g >= 50).length}
                                </span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Kaldığı Ders:</span>
                                <span className="stat-value fail">
                                    {Object.values(grades).filter(g => g < 50).length}
                                </span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">En Yüksek Not:</span>
                                <span className="stat-value">
                                    {Math.max(...Object.values(grades))}
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}

export default StudentDashboard;