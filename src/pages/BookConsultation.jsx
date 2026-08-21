import React, { useEffect, useRef } from 'react'
import './BookConsultation.css'

const BookConsultation = () => {
  const bookingIframeRef = useRef(null)

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

  useEffect(() => {
    const scriptSrc = 'https://link.finreach.com.au/js/form_embed.js'
    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`)

    if (!existingScript) {
      const script = document.createElement('script')
      script.src = scriptSrc
      script.async = true
      document.body.appendChild(script)
    }

    if (window.iFrameResize && bookingIframeRef.current) {
      window.iFrameResize(
        {
          log: false,
          checkOrigin: false,
          scrolling: true,
        },
        bookingIframeRef.current,
      )
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
            scrolling="no"
            id="BJoQPqSKhkjd5wiK5ZV1"
            title="Book a No Obligation Consultation"
          />
        </div>
      </section>
    </main>
  )
}

export default BookConsultation
