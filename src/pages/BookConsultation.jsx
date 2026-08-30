import React, { useEffect, useRef } from 'react'
import './BookConsultation.css'

const BookConsultation = () => {
  const bookingIframeRef = useRef(null)

  useEffect(() => {
    const scriptSrc = 'https://link.finreach.com.au/js/form_embed.js'
    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`)

    if (!existingScript) {
      const script = document.createElement('script')
      script.src = scriptSrc
      script.async = true
      document.body.appendChild(script)
    }

    document.body.style.backgroundColor = '#ececec'
    document.documentElement.style.backgroundColor = '#ececec'

    return () => {
      document.body.style.backgroundColor = ''
      document.documentElement.style.backgroundColor = ''
    }
  }, [])

  return (
    <main className="book-consult-page">
      <section className="book-consult-card">
        <div className="book-consult-right">
          <iframe
            ref={bookingIframeRef}
            src="https://link.finreach.com.au/widget/booking/BJoQPqSKhkjd5wiK5ZV1"
            allow="payment"
            className="book-consult-iframe"
            scrolling="yes"
            id="BJoQPqSKhkjd5wiK5ZV1"
            title="Book a No Obligation Consultation"
          />
        </div>
      </section>
    </main>
  )
}

export default BookConsultation