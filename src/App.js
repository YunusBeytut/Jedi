import React, { useState } from 'react';
import { ShopProvider } from './context/ShopContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Support from './components/Support';
import Account from './components/Account';
import Cart from './components/Cart';
import Favorites from './components/Favorites';
import './App.css';
import './styles/hero.css';
import './styles/global.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(false);

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home': return <Hero />;
      case 'about': return <About />;
      case 'products': return <Products />;
      case 'contact': return <Contact />;
      case 'support': return <Support />;
      case 'account': return <Account />;
      case 'cart': return <Cart />;
      case 'favorites': return <Favorites />;
      default: return <Hero />;
    }
  };

  return (
    <ShopProvider>
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
    </ShopProvider>
  );
}

export default App;