import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Dashboard/Dashboard.css'
import './team.css'
import Header from '../Dashboard/Header'
import Footer from '../Dashboard/Footer'
import teamHero from '../assets/assets/3e.png'
import ctaImage from '../assets/assets/15628.jpg'
import donPhoto from '../assets/assets/DSC03893.png'
import accountantPhoto from '../assets/assets/thilak.png'
import seniorAcctPhoto from '../assets/assets/dil01.png'
import lahiru from '../assets/assets/lahiru.png'

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
    name: 'Thilak Ranasinghe',
    role: 'Head of Offshore Operations & Strategic Partnerships',
    photo: accountantPhoto,
    bio: [
      "Thilak Ranasinghe is the Head of Offshore Operations and Strategic Partnerships at FinReach, where he leads the firm's Colombo-based team of ACCA/CIMA-qualified accounting professionals. In this role, Thilak is responsible for the governance, performance management, and strategic growth of FinReach's offshore delivery capability, the operational engine that enables Australian NFP organisations, dental and allied health practices, and growth-stage SMEs to access senior-firm accounting expertise at a fraction of the cost of an in-house team.",

      "Thilak brings more than 30 years of experience spanning IT solutions, BPO and KPO development, business operations, and executive leadership. His career has been defined by building things that work: delivery teams capable of operating at professional standard, commercial partnerships that generate lasting value, and operational frameworks that hold up under scrutiny. He has held COO-level responsibility across digital services and IT infrastructure businesses, founded and led a private business institute from inception, and delivered executive education across MBA programmes affiliated with leading UK universities.",

      "At FinReach, Thilak was the architect of the Australia–Sri Lanka hybrid delivery model, designing the workflow systems, quality control frameworks, capacity planning structure, and performance governance that make the model credible and compliant in the Australian regulatory environment. He leads go-to-market strategy across FinReach's NFP and healthcare verticals, overseeing CRM pipeline design, LinkedIn-led outreach, and the prospecting and nurture programmes that bring the right clients to the firm.",

      "Sri Lanka holds the largest pool of British-certified accountants outside the UK. Thilak's role is to make sure that credential depth translates into delivery excellence and that FinReach's clients experience the full benefit of it, with Australian professional oversight at every step.",
    ],
    quote: null,
    quoteAttribution: null,
  },
  {
    id: 3,
    name: 'Dileep Subramanium',
    role: 'Senior Accountant',
    photo: seniorAcctPhoto,
    bio: [
      "With more than sixteen years of experience across management accounting, financial reporting and business partnering, Dileep, a CPA Australia member, brings to FinReach the same standard of technical rigour and clear-headed judgement that defines the firm's approach to client work.",

"His career spans complex, high-growth organisations across manufacturing, FMCG and listed-company environments, where he has consistently turned dense financial detail into insight that boards and executives can act on with confidence.",

      "At Star Garments Group, a USD 200 million apparel manufacturer, Dileep led financial planning and analysis across a demanding operational environment, monitoring performance against budget, driving cost efficiency through data-led decision-making, and strengthening internal controls across the business. His work reduced the cash conversion cycle by ten days and delivered a 10–15% reduction in logistics overhead costs, outcomes built on the same disciplined, numbers-first approach he brings to every engagement.",

      "Earlier in his career, at Sunshine Holdings PLC, a listed FMCG joint venture between Tata Global Beverages, Pyramid Wilmar and Sunshine Holdings, Dileep produced consolidated management accounts for the Board, led budget processes across multiple stakeholders, and supported the CEO and CFO in modelling the financial impact of major strategic decisions. He maintained gross profit margins between 38–40% through disciplined pricing, cost control and supply chain coordination, and strengthened credit control processes to reduce receivables risk.",

      "That breadth of experience from board-level reporting to hands-on process improvement gives Dileep a rare ability to move between the big picture and the fine detail without losing sight of either.",

      "At FinReach, Dileep applies this experience to the organisations that matter most: not-for-profits navigating funding complexity and board obligations, and growth-stage Canberra businesses that need reliable numbers behind every decision. He brings the same proactive, no-surprises approach to every client relationship, showing up consistently, flagging issues early, and making sure the numbers are never the reason a good decision gets delayed.",

      "Skilled across ERP and financial systems and driven by continuous improvement, Dileep is focused on giving FinReach's clients the clarity and confidence to make their next move with certainty.",

    ],
    quote: null,
    quoteAttribution: null,
  },
    {
    id: 3,
    name: 'Lahiru Perera',
    role: 'Manager Audit and Assurance',
    photo: lahiru,
    bio: [
      "With over sixteen years of experience spanning audit, financial management, corporate reporting, and operational finance leadership, Lahiru Perera brings to FinReach a deeply practical and execution-focused approach to financial management, shaped by years of working across complex industries, high-pressure reporting environments, and large-scale organisational structures.",

      "A Chartered Accountant (ACA) of CA, Lahiru has built his career at the intersection of financial discipline, operational control, and business performance. His expertise extends across auditing, financial planning and analysis, internal controls, compliance, treasury oversight, budgeting, and group financial reporting, allowing him to support organisations not only from a compliance perspective, but from a broader strategic and operational lens.",

      "At KPMGSri Lanka, Lahiru managed a diversified portfolio of more than 40 entities, including listed companies, banking and financial institutions, and businesses operating across manufacturing, healthcare, tourism, construction, trading, and investment management. Over the years, he led multidisciplinary audit teams, supervised large engagements, and worked closely with boards, management teams, and audit committees to strengthen governance, improve financial visibility, and support sound decision-making.",

      "His experience also extends internationally through his tenure with KPMG Qatar, where he worked on audit engagements across sectors including manufacturing, construction, automotive, and investment management while operating within demanding reporting timelines and multicultural business environments.",

      "Beyond audit and assurance, Lahiru has held senior corporate finance leadership roles at organisations including Viluxur Holidays and Courtaulds Clothing Group, where he was responsible for overseeing finance operations, consolidated reporting, budgeting, forecasting, treasury management, payroll oversight, tax compliance, and the implementation of internal control frameworks. He has also played a key role in strengthening financial systems and bridging operational control gaps across group entities, helping organisations move from fragmented financial processes towards more structured and reliable finance functions.",

      "Known for his ability to balance technical precision with practical execution, Lahiru approaches finance as more than a reporting function. His focus lies in helping businesses build financial clarity, operational consistency, and stronger decision-making foundations while supporting sustainable growth.",

      "Throughout his career, Lahiru has been recognised for performance excellence, receiving KPMG’s highest year-end performance rating across four consecutive performance cycles.",

      "At FinReach, Lahiru works closely with businesses to strengthen financial operations, improve reporting quality, enhance internal controls, and create finance structures that support long-term business stability and growth. Combining audit discipline with hands-on commercial finance experience, he helps organisations navigate complexity with greater confidence, visibility, and control.",

    ],
    quote: null,
    quoteAttribution: null,
  },
]

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null)
  const [bioPreviewHeights, setBioPreviewHeights] = useState({})
  const imageWrapRefs = useRef({})

  useEffect(() => {
    const updatePreviewHeights = () => {
      const updatedHeights = {}

      teamMembers.forEach((member) => {
        const imageWrap = imageWrapRefs.current[member.id]
        if (imageWrap) {
          updatedHeights[member.id] = imageWrap.clientHeight
        }
      })

      setBioPreviewHeights(updatedHeights)
    }

    updatePreviewHeights()
    window.addEventListener('resize', updatePreviewHeights)

    return () => {
      window.removeEventListener('resize', updatePreviewHeights)
    }
  }, [])

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
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`row align-items-center team-member-row team-member-${member.id}`}
            >
              {/* Photo */}
              <div className="col-md-5 col-lg-5 mb-4 mb-md-0">
                <div
                  className="team-member-photo-wrap"
                  ref={(el) => {
                    imageWrapRefs.current[member.id] = el
                  }}
                >
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
                <div
                  className="team-member-bio team-member-bio-preview mt-4"
                  style={{ maxHeight: bioPreviewHeights[member.id] ? `${bioPreviewHeights[member.id]}px` : '360px' }}
                >
                  <div className="team-member-bio-preview-content">
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
                <button
                  type="button"
                  className="btn team-see-more-btn"
                  onClick={() => setSelectedMember(member)}
                >
                  See more
                </button>
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
          <button className="btn btn-cta-enquire enquire-now-btn-standard">
            Enquire Now
          </button>
        </div>
      </section>

      {selectedMember && (
        <div
          className="team-bio-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="teamBioModalTitle"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedMember(null)
            }
          }}
        >
          <div className="team-bio-modal">
            <button
              type="button"
              className="team-bio-modal-close"
              aria-label="Close"
              onClick={() => setSelectedMember(null)}
            >
              ×
            </button>
            <h3 id="teamBioModalTitle" className="team-bio-modal-title">{selectedMember.name}</h3>
            {selectedMember.role && <p className="team-bio-modal-role">{selectedMember.role}</p>}
            <div className="team-bio-modal-content">
              {selectedMember.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              {selectedMember.quote && (
                <p className="team-member-quote">
                  {selectedMember.quote}
                  {selectedMember.quoteAttribution && (
                    <span className="team-member-quote-attribution"> - {selectedMember.quoteAttribution}</span>
                  )}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}

export default Team
