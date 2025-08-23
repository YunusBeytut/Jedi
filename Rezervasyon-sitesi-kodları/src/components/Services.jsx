"use client"
import { useState } from "react"
import "./Services.css"
import PostDetail from "./PostDetail"

export default function Services() {
  const [selectedService, setSelectedService] = useState(null)

  const services = [
    {
      title: "Hotel Reservation",
      description: "Wide range of accommodation options from luxury hotels to budget-friendly choices worldwide.",
      image: "/hotel.jpeg",
      features: ["Free cancellation", "Best price guarantee", "Instant confirmation"],
    },
    {
      title: "Restaurant Reservation",
      description: "Make table reservations at the city's best restaurants and experience unforgettable dining.",
      image: "/restorant.webp",
      features: ["Online reservation", "Special menus", "VIP service"],
    },
    {
      title: "Event Organization",
      description: "Professional organization service for weddings, conferences, meetings and special events.",
      image: "/hotel-activity.webp",
      features: ["Full organization", "Technical support", "Catering service"],
    },
  ]

  const handleServiceDetail = (service) => {
    setSelectedService(service)
  }

  const closeDetail = () => {
    setSelectedService(null)
  }

  return (
    <>
      <section id="services" className="services">
        <div className="container">
          <div className="services-header">
            <h2>Our Services</h2>
            <p>We offer the most suitable reservation solutions for you</p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card hover-lift transition-all">
                <div className="service-image">
                  <img src={service.image || "/placeholder.svg"} alt={service.title} />
                  <div className="service-overlay">
                    <button
                      className="service-btn"
                      onClick={() => handleServiceDetail(service)}
                    >
                      View Details
                    </button>
                  </div>
                </div>

                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <span className="check-icon">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    className="reserve-btn"
                    onClick={() => handleServiceDetail(service)}
                  >
                    Make Reservation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedService && (
        <PostDetail
          service={selectedService}
          onClose={closeDetail}
        />
      )}
    </>
  )
}