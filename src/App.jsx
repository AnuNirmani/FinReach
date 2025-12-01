import './App.css'
import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

// Lazy load all page components
const Dashboard = lazy(() => import('./Dashboard/Dashboard'))
const Blog = lazy(() => import('./Blog/Blog'))
const BookkeepingCashFlow = lazy(() => import('./Blog/BookkeepingCashFlow.jsx'))
const AssuranceFunding = lazy(() => import('./Blog/AssuranceFunding.jsx'))
const AuditReadiness = lazy(() => import('./Blog/AuditReadiness.jsx'))
const FractionalCFOInsights = lazy(() => import('./Blog/FractionalCFOInsights.jsx'))
const About = lazy(() => import('./others/About.jsx'))
const Contact = lazy(() => import('./others/Contact.jsx'))
const BlogArticle = lazy(() => import('./others/BlogArticle.jsx'))

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
          <Route path="/blog/bookkeeping-cash-flow" element={<BookkeepingCashFlow />} />
          <Route path="/blog/assurance-funding" element={<AssuranceFunding />} />
          <Route path="/blog/audit-readiness" element={<AuditReadiness />} />
          <Route path="/blog/fractional-cfo-insights" element={<FractionalCFOInsights />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/financial-resilience" element={<BlogArticle />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
