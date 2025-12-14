import './App.css'
import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';



// Lazy load all page components
const Dashboard = lazy(() => import('./Dashboard/Dashboard'))
const Blog = lazy(() => import('./Blog/Blog'))
const BookkeepingCashFlow = lazy(() => import('./categories/Bookkeeping&Accounting.jsx'))
const AssuranceFunding = lazy(() => import('./categories/Assurance.jsx'))
const AuditReadiness = lazy(() => import('./categories/Auditing.jsx'))
const FractionalCFOInsights = lazy(() => import('./categories/FractionalCFO.jsx'))
const About = lazy(() => import('./others/About.jsx'))
const Contact = lazy(() => import('./others/Contact.jsx'))
const BlogArticle = lazy(() => import('./others/BlogArticle.jsx'))

// Blog category pages
const BlogBookkeepingCashFlow = lazy(() => import('./Blog/blog/BookkeepingCashFlow.jsx'))
const BlogAssuranceFunding = lazy(() => import('./Blog/blog/AssuranceFunding.jsx'))
const BlogAuditReadiness = lazy(() => import('./Blog/blog/AuditReadiness.jsx'))
const BlogFractionalCFOInsights = lazy(() => import('./Blog/blog/FractionalCFOInsights.jsx'))

// Loading component
const Loading = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
    <div>Loading...</div>
  </div>
)

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/bookkeeping-accounting" element={<BookkeepingCashFlow />} />
          <Route path="/assurance" element={<AssuranceFunding />} />
          <Route path="/auditing" element={<AuditReadiness />} />
          <Route path="/fractional-cfo" element={<FractionalCFOInsights />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/financial-resilience" element={<BlogArticle />} />
          <Route path="/blog/article/:id" element={<BlogArticle />} />
          
          {/* Blog category pages */}
          <Route path="/blog/bookkeeping-cash-flow" element={<BlogBookkeepingCashFlow />} />
          <Route path="/blog/assurance-funding" element={<BlogAssuranceFunding />} />
          <Route path="/blog/audit-readiness" element={<BlogAuditReadiness />} />
          <Route path="/blog/fractional-cfo-insights" element={<BlogFractionalCFOInsights />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
