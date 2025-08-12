import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import PostDetail from "./components/PostDetail";
import About from "./components/About";
import Contact from "./pages/Contact";
import Team from "./components/Team";
import Services from "./components/Services";
import "./styles/main.css";

function App() {
  const [route, setRoute] = useState("home");
  const [selectedPost, setSelectedPost] = useState(null);

  const handleNavigate = (newRoute, postId = null) => {
    setRoute(newRoute);
    setSelectedPost(postId);
  };

  return (
    <div className="app-container">
      <Header onNavigate={handleNavigate} />
      <div className="content-wrapper">
        <main className="main-content">
          {route === "home" && (
            <Home onPostSelect={id => handleNavigate("detail", id)} />
          )}
          {route === "detail" && selectedPost && (
            <PostDetail postId={selectedPost} onBack={() => handleNavigate("home")} />
          )}
          {route === "about" && <About />}
          {route === "contact" && <Contact />}
          {route === "team" && <Team />}
          {route === "services" && <Services />}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;