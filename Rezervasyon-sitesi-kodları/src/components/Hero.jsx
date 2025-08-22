"use client"
import { useState } from "react"
import "./Hero.css"

export default function Hero() {
  const [searchData, setSearchData] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
  })

  const handleSearch = (e) => {
    e.preventDefault()
    console.log("Searching:", searchData)
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <img src="./resepsiyon.jpg" alt="Luxury Hotel" />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text animate-fade-in-up">
          <h1>Perfect Accommodation Experience</h1>
          <p>
            Discover the best hotels worldwide and create unforgettable memories. The meeting point 
            of professional service and comfort.
          </p>
        </div>

        <div className="search-form-container animate-fade-in-up">
          <form className="search-form" onSubmit={handleSearch}>
            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                placeholder="Where would you like to go?"
                value={searchData.location}
                onChange={(e) => setSearchData({ ...searchData, location: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Check-in Date</label>
              <input
                type="date"
                value={searchData.checkIn}
                onChange={(e) => setSearchData({ ...searchData, checkIn: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Check-out Date</label>
              <input
                type="date"
                value={searchData.checkOut}
                onChange={(e) => setSearchData({ ...searchData, checkOut: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Number of Guests</label>
              <select
                value={searchData.guests}
                onChange={(e) => setSearchData({ ...searchData, guests: e.target.value })}
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4+ Guests</option>
              </select>
            </div>

            <button type="submit" className="search-btn">
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}