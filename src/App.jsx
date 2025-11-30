import './App.css'
import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

// Lazy load all page components
const Dashboard = lazy(() => import('./Dashboard/Dashboard'))
const Blog = lazy(() => import('./Blog/Blog'))
const BookkeepingCashFlow = lazy(() => import('./Categories/BookkeepingCashFlow.jsx'))
const AssuranceFunding = lazy(() => import('./Categories/AssuranceFunding.jsx'))
const AuditReadiness = lazy(() => import('./Categories/AuditReadiness.jsx'))
const FractionalCFOInsights = lazy(() => import('./Categories/FractionalCFOInsights.jsx'))
const About = lazy(() => import('./others/About.jsx'))
const Contact = lazy(() => import('./others/Contact.jsx'))

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
          <Route path="/categories/bookkeeping-cash-flow" element={<BookkeepingCashFlow />} />
          <Route path="/categories/assurance-funding" element={<AssuranceFunding />} />
          <Route path="/categories/audit-readiness" element={<AuditReadiness />} />
          <Route path="/categories/fractional-cfo-insights" element={<FractionalCFOInsights />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
