import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'
import Blog from './Blog/Blog'
import BookkeepingCashFlow from './Categories/BookkeepingCashFlow.jsx'
import AssuranceFunding from './Categories/AssuranceFunding.jsx'
import AuditReadiness from './Categories/AuditReadiness.jsx'
import FractionalCFOInsights from './Categories/FractionalCFOInsights.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/categories/bookkeeping-cash-flow" element={<BookkeepingCashFlow />} />
        <Route path="/categories/assurance-funding" element={<AssuranceFunding />} />
        <Route path="/categories/audit-readiness" element={<AuditReadiness />} />
        <Route path="/categories/fractional-cfo-insights" element={<FractionalCFOInsights />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
