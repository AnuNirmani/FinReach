import React from 'react'
import { Link } from 'react-router-dom'
import '../Dashboard/Dashboard.css'
import './team.css'
import Header from '../Dashboard/Header'
import Footer from '../Dashboard/Footer'
import teamHero from '../assets/assets/3e.png'
import ctaImage from '../assets/assets/15628.jpg'
import donPhoto from '../assets/assets/DSC03893.png'
import directorPhoto from '../assets/assets/DSC03893.jpg'
import seniorPhoto from '../assets/assets/senioraccountant.jpg'
import accountantPhoto from '../assets/assets/thilak.png'
import seniorAcctPhoto from '../assets/assets/dil01.png'

const teamMembers = [
  {
    id: 1,
    name: 'Don Siriwardana',
    role: 'PRINCIPAL',
    photo: donPhoto,
    bio: [
      "Don leads FinReach and sits across every client relationship personally. He's a Chartered Accountant in Australian and New Zealand and an ASIC Registered Company Auditor, with years of senior experience delivering accounting, audit and assurance work for organisations who couldn't afford to get it wrong.",
      "He started FinReach because he believed NFPs and growing SMEs deserved access to that same calibre of work, without the price tag or the impersonal feel of a big firm. If you work with FinReach, you work with Don.",
    ],
    quote: '"I wanted to build a firm where a community organisation gets exactly the same care and rigour as any client of a much larger practice - because the work they do matters just as much."',
    quoteAttribution: 'Don',
  },
  {
    id: 2,
    name: 'Sam Herath',
    role: 'SENIOR ACCOUNTANT',
    photo: seniorPhoto,
    bio: [
      'Sam is based here in Canberra and works directly with clients day to day - across bookkeeping, accounting and the ongoing relationship that keeps your numbers accurate and your reporting on time.',
    ],
    quote: null,
    quoteAttribution: null,
  },
  {
    id: 3,
    name: 'Thilak Perera',
    role: 'Head of Offshore Operations & Strategic Partnerships',
    photo: accountantPhoto,
    bio: [
      'Thilak leads FinReach\'s Colombo-based team of ACCA and CIMA-qualified accountants, delivering technical, detailed work for not-for-profits and growth-stage businesses.',
      'Thilak runs the operations with senior-level expertise without the overhead of a big firm. Thilak also works the NFP and SME pipeline directly, partnering with organisations to give them financial confidence.',
      'Most accounting firms hide their delivery team. I run mine in the open, because it\'s our biggest advantage, real people, ACCA and CIMA-qualified, delivering work built to the same standard whether it\'s checked in Colombo or Canberra."',
    ],
    quote: null,
    quoteAttribution: null,
  },
  {
    id: 4,
    name: 'Dileep Subramanium',
    role: null,
    photo: seniorAcctPhoto,
    bio: [
      'Dileep\'s bio',
    ],
    quote: null,
    quoteAttribution: null,
  },
]

const Team = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        className="hero-section team-hero-section"
        style={{ backgroundImage: `url(${teamHero})` }}
      >
        <div className="hero-overlay team-hero-overlay"></div>
        <div className="container hero-content h-100">
          <div className="row align-items-center justify-content-end">
            <div className="col-lg-6 col-md-10">
              <div className="team-hero-card">
                <h1 className="hero-title">
                  The People Behind Your Financial Confidence.
                </h1>
                <p className="hero-subtitle">
                  Canberra-based relationships. Technically trained delivery. One team, two locations.
                </p>
                <Link to="/book-consultation" className="btn btn-hero-secondary">
                  Book A No-Obligation Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="team-members-section">
        <div className="container">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`row align-items-center team-member-row team-member-${member.id}`}
            >
              {/* Photo */}
              <div className="col-md-5 col-lg-5 mb-4 mb-md-0">
                <div className="team-member-photo-wrap">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="team-member-photo"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="col-md-7 col-lg-6 offset-lg-1 ps-md-5">
                <h2 className="team-member-name">{member.name}</h2>
                {member.role && <span className="team-member-badge">{member.role}</span>}
                <div className="team-member-bio mt-4">
                  {member.bio.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                  {member.quote && (
                    <p className="team-member-quote">
                      {member.quote}
                      {member.quoteAttribution && (
                        <span className="team-member-quote-attribution"> - {member.quoteAttribution}</span>
                      )}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="team-cta-section"
        style={{ backgroundImage: `url(${ctaImage})` }}
      >
        <div className="team-cta-overlay"></div>
        <div className="team-cta-content">
          <h2 className="team-cta-heading">Want to know exactly who'll be working on your file?</h2>
          <Link to="/book-consultation" className="btn btn-cta-enquire enquire-now-btn-standard">
            Enquire Now
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Team
