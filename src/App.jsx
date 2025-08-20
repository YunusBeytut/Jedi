import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import PostDetail from "./components/PostDetail";
import About from "./components/About";
import Contact from "./pages/Contact";
import Team from "./components/Team";
import Services from "./components/Services";
import LoginPage from "./components/LoginPage";

import "./styles/main.css";



function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [user, setUser] = useState(null); // Giriş yapmış kullanıcı bilgisi

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setSelectedPostId(null);
  };

  const handlePostSelect = (postId) => {
    setSelectedPostId(postId);
    setCurrentPage('post-detail');
  };

  const handleLogin = (userData) => {
    setUser(userData);
    console.log('Kullanıcı giriş yaptı:', userData);
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('home');
    console.log('Kullanıcı çıkış yaptı');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onPostSelect={handlePostSelect} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'services':
        return <Services />;
      case 'team':
        return <Team />;
      case 'login':
        return (
          <LoginPage 
            onLogin={handleLogin} 
            onNavigate={handleNavigation}
          />
        );
      case 'post-detail':
        return (
          <PostDetail 
            postId={selectedPostId} 
            onBack={() => handleNavigation('home')} 
          />
        );
      default:
        return <Home onPostSelect={handlePostSelect} />;
    }
  };

  return (
    <div className="App">
      <Header 
        onNavigate={handleNavigation} 
        user={user}
        onLogout={handleLogout}
      />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;