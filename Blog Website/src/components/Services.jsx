import React from "react";
import "../styles/pages/Services.css";

const services = [
    {
        title: "Technical Consulting",
        desc: "Get expert advice on your web projects, from architecture to deployment. Personalized support for startups, businesses, and individuals.",
        icon: "💡"
    },
    {
        title: "SEO Optimization",
        desc: "Boost your online visibility with professional SEO, keyword research, and content strategy tailored for modern web platforms.",
        icon: "🚀"
    },
    {
        title: "Content Creation",
        desc: "We craft original, high-quality articles, tutorials, and guides for your audience. Let us help you engage and grow your community.",
        icon: "✍️"
    },
    {
        title: "Custom Development",
        desc: "Need a custom tool, component, or integration? We design and build unique solutions to fit your specific requirements.",
        icon: "🛠️"
    }
];

function Services() {
    return (
        <section className="services-page" aria-label="Our Services">
            <h2 className="services-title">Our Services</h2>
            <div className="services-list">
                {services.map(service => (
                    <div key={service.title} className="service-card">
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;