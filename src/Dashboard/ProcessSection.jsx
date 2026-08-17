import React from 'react';
import './Dashboard.css';
import don from '../assets/assets/don.png';
import directorImage from '../assets/assets/director.jpg';
import senioraccountant2Image from '../assets/assets/dileep.png';
import accountantImage from '../assets/assets/lahiru.png';
import thilak from '../assets/assets/thilak.png';
import cfoImage from '../assets/assets/cfo1.jpg';

const ProcessSection = () => {
  const teamMembers = [
    {
      image: don,
      name: 'Don Siriwardana',
      role: 'Director',
      location: 'Canberra, ACT',
    },
    {
      image: accountantImage,
      name: 'Lahiru Perera',
      role: 'Accountant',
      location: 'Canberra, ACT',
    },
    {
      image: senioraccountant2Image,
      name: 'Dileep Subramaniam',
      role: 'Senior Accountant',
      location: 'Canberra, ACT',
    },
    {
      image: thilak,
      name: 'Thilak Ranasinghe',
      role: 'Head of Offshore Operations & Strategic Partnerships',
      location: 'Canberra, ACT',
    },
  ];

  return (
    <section className="team-people-section">
      <div className="container team-people-shell text-center">
        <span className="team-people-badge">The Team</span>
        <h2 className="team-people-title">The people behind the work</h2>

        <div className="row g-4 team-people-grid justify-content-center">
          {teamMembers.map((member) => (
            <div key={member.name} className="col-xl-3 col-lg-3 col-md-6 d-flex">
              <article className="team-member-card text-start w-100">
                <img src={member.image} alt={member.name} className="team-member-image" />
                <div className="team-member-body">
                  <h3 className="team-member-name">{member.name}</h3>
                  <p className="team-member-role">{member.role}</p>
                  <p className="team-member-location">{member.location}</p>

                  <div className="team-member-socials">
                    <a href="#" aria-label={`${member.name} on Facebook`} className="team-social-link">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" aria-label={`${member.name} on Instagram`} className="team-social-link">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#" aria-label={`${member.name} on LinkedIn`} className="team-social-link">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
