"use client"
import { useState } from "react"
import "./PostDetail.css"

export default function PostDetail({ service, onClose }) {
    const [selectedImage, setSelectedImage] = useState(0)
    // eslint-disable-next-line no-unused-vars
    const [_selectedRoom, setSelectedRoom] = useState(null);

    // Sample hotel detail data
    const hotelDetails = {
        "Hotel Reservation": {
            name: "Grand Palace Hotel",
            rating: 5,
            location: "Sultanahmet, Istanbul",
            description: "Located in the historic peninsula of Istanbul, our luxury hotel is only 200 meters away from Hagia Sophia and Blue Mosque. Our hotel combines Ottoman architecture with modern comfort, offering an unforgettable accommodation experience.",
            images: [
                "/hotel2.jpg",
                "/hotel3.jpg",
                "/hotel4.jpg"
            ],
            amenities: [
                "Free WiFi",
                "Spa & Wellness Center",
                "Fitness Center",
                "Indoor Swimming Pool",
                "24-Hour Room Service",
                "Free Airport Transfer",
                "Restaurant & Bar",
                "Business Center",
                "Conference Room",
                "Valet Parking"
            ],
            rooms: [
                {
                    type: "Standard Room",
                    price: "₺2,500",
                    features: ["25 m²", "City View", "King Size Bed", "Mini Bar"]
                },
                {
                    type: "Deluxe Room",
                    price: "₺3,200",
                    features: ["35 m²", "Bosphorus View", "King Size Bed", "Balcony", "Jacuzzi"]
                },
                {
                    type: "Suite",
                    price: "₺4,800",
                    features: ["60 m²", "Panoramic View", "Living Room", "Jacuzzi", "Butler Service"]
                }
            ]
        },
        "Restaurant Reservation": {
            name: "Le Gourmet Restaurant",
            rating: 4,
            location: "Nişantaşı, Istanbul",
            description: "Under the leadership of our Michelin-starred chef, our restaurant combines select flavors from world cuisines with modern presentation techniques, making it a shining star in Istanbul's gastronomy scene.",
            images: [
                "/restorant2.webp",
                "/restorant3.jpg",
                "/restorant4.jpg"
            ],
            amenities: [
                "Michelin-Starred Chef",
                "Special Wine Collection",
                "Live Music",
                "Private Event Area",
                "Valet Parking",
                "Terrace",
                "Private Dining",
                "Chef's Table"
            ],
            rooms: [
                {
                    type: "Main Hall",
                    price: "₺150/person",
                    features: ["80 People", "Bosphorus View", "Live Music", "A La Carte"]
                },
                {
                    type: "Terrace",
                    price: "₺180/person",
                    features: ["40 People", "Outdoor", "City View", "Cocktail Bar"]
                },
                {
                    type: "Private Dining",
                    price: "₺250/person",
                    features: ["12 People", "Private Chef", "Premium Menu", "Wine Pairing"]
                }
            ]
        },
        "Event Organization": {
            name: "Crystal Event Hall",
            rating: 5,
            location: "Maslak, Istanbul",
            description: "With its modern architecture and high-tech infrastructure, our venue is one of Istanbul's most prestigious event centers, hosting all types of organizations from weddings to corporate events.",
            images: [
                "/aktivite2.webp",
                "/aktivite3.jpg",
                "/aktivite4.jpg"
            ],
            amenities: [
                "LED Screen System",
                "Professional Sound System",
                "Stage & Lighting System",
                "Catering Kitchen",
                "Bridal Suite",
                "Private Parking Area",
                "Photography Studio",
                "Flower Arrangements",
                "Wedding Planner",
                "Security System"
            ],
            rooms: [
                {
                    type: "Main Hall",
                    price: "₺15,000",
                    features: ["500 People", "Stage", "LED Screen", "Full Catering"]
                },
                {
                    type: "VIP Hall",
                    price: "₺8,000",
                    features: ["150 People", "Special Decor", "Premium Menu", "Butler Service"]
                },
                {
                    type: "Garden Area",
                    price: "₺12,000",
                    features: ["300 People", "Outdoor", "Gazebo", "Barbecue"]
                }
            ]
        }
    }

    const currentHotel = hotelDetails[service?.title] || hotelDetails["Hotel Reservation"]

    const handleReservation = (room) => {
        setSelectedRoom(room)
        alert(`Starting reservation for ${room.type}!`)
    }

    return (
        <div className="post-detail-overlay">
            <div className="post-detail-container">
                <button className="close-btn" onClick={onClose}>
                    ✕
                </button>

                <div className="hotel-header">
                    <div className="hotel-images">
                        <div className="main-image">
                            <img src={currentHotel.images[selectedImage]} alt={currentHotel.name} />
                        </div>
                        <div className="image-thumbnails">
                            {currentHotel.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`${currentHotel.name} ${index + 1}`}
                                    className={selectedImage === index ? "active" : ""}
                                    onClick={() => setSelectedImage(index)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="hotel-info">
                        <div className="hotel-rating">
                            {"★".repeat(currentHotel.rating)}
                            <span className="rating-text">({currentHotel.rating}.0)</span>
                        </div>
                        <h1>{currentHotel.name}</h1>
                        <p className="location">📍 {currentHotel.location}</p>
                        <p className="description">{currentHotel.description}</p>
                    </div>
                </div>

                <div className="hotel-content">
                    <div className="amenities-section">
                        <h3>Features & Services</h3>
                        <div className="amenities-grid">
                            {currentHotel.amenities.map((amenity, index) => (
                                <div key={index} className="amenity-item">
                                    <span className="amenity-icon">✓</span>
                                    {amenity}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rooms-section">
                        <h3>Room Types & Prices</h3>
                        <div className="rooms-grid">
                            {currentHotel.rooms.map((room, index) => (
                                <div key={index} className="room-card">
                                    <div className="room-header">
                                        <h4>{room.type}</h4>
                                        <div className="room-price">{room.price}</div>
                                    </div>
                                    <ul className="room-features">
                                        {room.features.map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                    </ul>
                                    <button
                                        className="reserve-room-btn"
                                        onClick={() => handleReservation(room)}
                                    >
                                        Make Reservation
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="contact-section">
                        <h3>Contact & Reservation</h3>
                        <div className="contact-info">
                            <div className="contact-item">
                                <span className="contact-icon">📞</span>
                                <div>
                                    <strong>Phone:</strong>
                                    <p>+90 212 123 45 67</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">✉️</span>
                                <div>
                                    <strong>Email:</strong>
                                    <p>reservation@reservenow.com</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">🕒</span>
                                <div>
                                    <strong>Reservation Hours:</strong>
                                    <p>24/7 Online Reservation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}