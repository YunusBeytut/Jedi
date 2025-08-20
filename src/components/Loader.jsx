import React from "react";
import "../styles/components/Loader.css";

function Loader() {
  return (
    <div className="loader" role="status" aria-live="polite">
      <div className="spinner" />
      <span>Yükleniyor...</span>
    </div>
  );
} 

export default Loader;