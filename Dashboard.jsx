import React from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/');
    } catch (error) {
      console.error('Çıkış yaparken hata:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        {/* Güncellenmiş hoşgeldin mesajı */}
        <h1>Hoşgeldiniz, {user?.email?.split('@')[0] || 'Kullanıcı'}!</h1>
        <button onClick={handleLogout} className="logout-btn">
          Çıkış Yap
        </button>
      </header>

      <main className="dashboard-content">
        {/* Güncellenmiş kullanıcı bilgileri */}
        <section className="user-card">
          <h2>Kullanıcı Bilgileri</h2>
          <p><strong>Email:</strong> {user?.email}</p>
          <p><strong>Durum:</strong>
            {user?.email?.includes('@ogretmen.com') ? 'Öğretmen' : 'Öğrenci'}
          </p>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;