import React from "react";
import "../styles/components/Modal.css";

function Modal({ show, onClose, children }) {
  if (!show) return null;
  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" aria-label="Kapat" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
}

export default Modal;