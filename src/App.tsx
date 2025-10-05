import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { AdminLogin } from './pages/admin/Login'
import { AdminDashboard } from './pages/admin/Dashboard'
import { ShipLogAdmin } from './pages/admin/ShipLogAdmin'
import { RegistrationsAdmin } from './pages/admin/RegistrationsAdmin'
import { AnalyticsAdmin } from './pages/admin/AnalyticsAdmin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/ship-log" element={<ShipLogAdmin />} />
        <Route path="/admin/registrations" element={<RegistrationsAdmin />} />
        <Route path="/admin/analytics" element={<AnalyticsAdmin />} />
        <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
