import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Support from './components/Support';
import './App.css';
import './styles/hero.css';
import './styles/global.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(false);

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero />;
      case 'about':
        return <About />;
      case 'products':
        return <Products />;
      case 'contact':
        return <Contact />;
      case 'support':
        return <Support />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="App">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMobile={isMobile}
        setIsMobile={setIsMobile}
      />
      <main>
        {renderActiveSection()}
      </main>
    </div>
  );
}

export default App;