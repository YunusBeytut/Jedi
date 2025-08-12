import React, { useState } from "react";
import "../styles/components/SearchBar.css";

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");
  return (
    <form className="search-bar" onSubmit={e => { e.preventDefault(); onSearch(term); }} role="search">
      <input
        value={term}
        onChange={e => setTerm(e.target.value)}
        placeholder="Yazı ara..."
        className="search-input"
        aria-label="Blog Yazısı Ara"
      />
      <button className="search-btn" type="submit" aria-label="Ara">
        Ara
      </button>
    </form>
  );
}

export default SearchBar;