import React from "react";
import "../styles/pages/Team.css";

const teamMembers = [
    {
        name: "Ayşe Yılmaz",
        role: "Founder & Lead Developer",
        bio: "8+ years in software development. Passionate about React, Node.js, and building strong tech communities.",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        name: "Mehmet Demir",
        role: "Content Editor",
        bio: "Specialist in tech writing, SEO, and content strategy. Loves making complex topics accessible.",
        avatar: "https://randomuser.me/api/portraits/men/46.jpg"
    },
    {
        name: "Zeynep Kaya",
        role: "UI/UX Designer",
        bio: "Designs delightful, user-friendly interfaces. Focused on accessibility, visual identity, and user research.",
        avatar: "https://randomuser.me/api/portraits/women/47.jpg"
    },
    {
        name: "Emre Şahin",
        role: "Full Stack Developer",
        bio: "Enjoys solving tough problems and automating workflows. Experienced with cloud and DevOps.",
        avatar: "https://randomuser.me/api/portraits/men/48.jpg"
    }
];

function Team() {
    return (
        <section className="team-page" aria-label="Our Team">
            <h2 className="team-title">Our Team</h2>
            <div className="team-list">
                {teamMembers.map(member => (
                    <div key={member.name} className="team-card">
                        <img src={member.avatar} alt={member.name} className="team-avatar" />
                        <h3 className="team-name">{member.name}</h3>
                        <div className="team-role">{member.role}</div>
                        <div className="team-bio">{member.bio}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Team;