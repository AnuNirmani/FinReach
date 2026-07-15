import React, { useEffect } from 'react'
import './BookConsultation.css'
import frLogo from '../assets/FR.png'

const BookConsultation = () => {
  useEffect(() => {
    const previousHtmlOverflow = document.documentElement.style.overflow
    const previousBodyOverflow = document.body.style.overflow
    const previousBodyPaddingTop = document.body.style.paddingTop
    const previousBodyBg = document.body.style.backgroundColor
    const previousHtmlBg = document.documentElement.style.backgroundColor

    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    document.body.style.paddingTop = '0px'
    document.body.style.backgroundColor = '#ececec'
    document.documentElement.style.backgroundColor = '#ececec'

    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow
      document.body.style.overflow = previousBodyOverflow
      document.body.style.paddingTop = previousBodyPaddingTop
      document.body.style.backgroundColor = previousBodyBg
      document.documentElement.style.backgroundColor = previousHtmlBg
    }
  }, [])

  return (
    <main className="book-consult-page">
      <section className="book-consult-card">
        <aside className="book-consult-left">
          <img src={frLogo} alt="FinReach" className="book-consult-logo" />
          <h1 className="book-consult-title">Book a No Obligation Consultation</h1>
          <p className="book-consult-duration">
            <i className="bi bi-clock" aria-hidden="true"></i>
            <span>30 min</span>
          </p>
          <p className="book-consult-note">
            Book a free 30 minute no obligation consultation with Don to discuss your
            organisation&apos;s needs.
          </p>
        </aside>

        <div className="book-consult-right">
          <div className="book-consult-scroll">
            <h2 className="book-consult-heading">Enter Details</h2>

            <div className="book-consult-grid-2">
              <label className="book-consult-field">
                <span className="book-consult-label">First Name *</span>
                <input className="book-consult-input" placeholder="Enter your first name" />
              </label>
              <label className="book-consult-field">
                <span className="book-consult-label">Last Name *</span>
                <input className="book-consult-input" placeholder="Enter your last name" />
              </label>

              <label className="book-consult-field">
                <span className="book-consult-label">Phone *</span>
                <input className="book-consult-input" defaultValue="+61" />
              </label>
              <label className="book-consult-field">
                <span className="book-consult-label">Email *</span>
                <input className="book-consult-input" placeholder="your@email.com" />
              </label>
            </div>

            <div className="book-consult-full">
              <label className="book-consult-field">
                <span className="book-consult-label">Organisation *</span>
                <input className="book-consult-input" placeholder="Enter your organisation" />
              </label>
            </div>

            <div className="book-consult-groups">
              <div>
                <h3 className="book-consult-group-title">Select which type of organisation you are? *</h3>
                <label className="book-consult-option">
                  <input type="checkbox" className="book-consult-checkbox" />
                  <span>Not-for-profits / charities</span>
                </label>
                <label className="book-consult-option">
                  <input type="checkbox" className="book-consult-checkbox" />
                  <span>Growth-stage SMEs</span>
                </label>
                <label className="book-consult-option">
                  <input type="checkbox" className="book-consult-checkbox" />
                  <span>Both</span>
                </label>
                <label className="book-consult-option">
                  <input type="checkbox" className="book-consult-checkbox" />
                  <span>Other</span>
                </label>
              </div>

              <div>
                <h3 className="book-consult-group-title">What would you like help with? *</h3>
                <label className="book-consult-option">
                  <input type="checkbox" className="book-consult-checkbox" />
                  <span>Bookkeeping &amp; accounting</span>
                </label>
                <label className="book-consult-option">
                  <input type="checkbox" className="book-consult-checkbox" />
                  <span>Auditing &amp; assurance</span>
                </label>
                <label className="book-consult-option">
                  <input type="checkbox" className="book-consult-checkbox" />
                  <span>Grant acquittals or compliance reporting</span>
                </label>
                <label className="book-consult-option">
                  <input type="checkbox" className="book-consult-checkbox" />
                  <span>Fractional CFO / financial oversight</span>
                </label>
              </div>
            </div>

            <div className="book-consult-extra">
              <label className="book-consult-field">
                <span className="book-consult-label">Tell us a bit about what&apos;s going on</span>
                <textarea
                  className="book-consult-textarea"
                  rows={3}
                  defaultValue="We&apos;ve outgrown our current accountant, we&apos;ve got an audit coming up, we need someone who"
                />
              </label>

              <label className="book-consult-field book-consult-field-select">
                <span className="book-consult-label">How did you hear about us?</span>
                <select className="book-consult-select" defaultValue="">
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="google">Google</option>
                  <option value="referral">Referral</option>
                  <option value="social">Social media</option>
                  <option value="other">Other</option>
                </select>
              </label>

              <label className="book-consult-option book-consult-option-consent">
                <input type="checkbox" className="book-consult-checkbox" />
                <span>
                  By checking this box, I consent to receive non-marketing text messages from
                  Finreach
                </span>
              </label>

              <label className="book-consult-option book-consult-option-consent">
                <input type="checkbox" className="book-consult-checkbox" />
                <span>
                  By checking this box, I consent to receive marketing and promotional from
                  FinReach at the phone number provided.
                </span>
              </label>
            </div>

            <div className="book-consult-actions">
              <button type="button" className="book-consult-continue">
                Continue
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default BookConsultation
