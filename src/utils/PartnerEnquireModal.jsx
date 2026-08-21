import { useEffect, useRef } from 'react'
import './EnquireModal.css'

export default function PartnerEnquireModal({ isOpen, onClose }) {
  const overlayRef = useRef(null)
  const iframeRef = useRef(null)

  // Inject the GHL embed script and trigger iFrameResize when modal opens
  useEffect(() => {
    const SCRIPT_SRC = 'https://link.finreach.com.au/js/form_embed.js'
    if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      const script = document.createElement('script')
      script.src = SCRIPT_SRC
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  useEffect(() => {
    if (!isOpen || !iframeRef.current) return
    const tryResize = () => {
      if (window.iFrameResize) {
        window.iFrameResize({ log: false, checkOrigin: false, scrolling: true }, iframeRef.current)
      }
    }
    // Retry until the script has loaded
    const id = setInterval(() => { if (window.iFrameResize) { tryResize(); clearInterval(id) } }, 200)
    return () => clearInterval(id)
  }, [isOpen])

  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    if (isOpen) document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="enquire-modal-overlay"
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-label="Partner Enquiry Form"
    >
      <div className="enquire-modal-container">
        <button
          className="enquire-modal-close"
          onClick={onClose}
          aria-label="Close enquiry form"
          type="button"
        >
          &times;
        </button>
        <iframe
          ref={iframeRef}
          src="https://link.finreach.com.au/widget/form/OH4TZEDANc9WMRdRr8x8"
          style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
          id="inline-OH4TZEDANc9WMRdRr8x8"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Partner With Us — Enquiry Form - Brandscape"
          data-height="868"
          data-layout-iframe-id="inline-OH4TZEDANc9WMRdRr8x8"
          data-form-id="OH4TZEDANc9WMRdRr8x8"
          title="Partner With Us — Enquiry Form - Brandscape"
        />
      </div>
    </div>
  )
}
