import './App.css'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Lazy load all page components
const Dashboard = lazy(() => import('./Dashboard/Dashboard'))
const Blog = lazy(() => import('./Blog/Blog'))
const BookkeepingCashFlow = lazy(() => import('./Categories/BookkeepingCashFlow.jsx'))
const AssuranceFunding = lazy(() => import('./Categories/AssuranceFunding.jsx'))
const AuditReadiness = lazy(() => import('./Categories/AuditReadiness.jsx'))
const FractionalCFOInsights = lazy(() => import('./Categories/FractionalCFOInsights.jsx'))

// Loading component
const Loading = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
    <div>Loading...</div>
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/categories/bookkeeping-cash-flow" element={<BookkeepingCashFlow />} />
          <Route path="/categories/assurance-funding" element={<AssuranceFunding />} />
          <Route path="/categories/audit-readiness" element={<AuditReadiness />} />
          <Route path="/categories/fractional-cfo-insights" element={<FractionalCFOInsights />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
