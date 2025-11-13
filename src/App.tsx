import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/Sobre'
import Contact from './pages/Contato'
import FAQ from './pages/Faq'
//import Integrantes from './pages/Integrantes'
//import IntegrantePerfil from './pages/IntegrantePerfil'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import MoodHistory from './pages/MoodHistory'
import Suggestions from './pages/Sugestoes'
import Integrantes from './pages/Integrantes'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
        <Navbar />
        <main className="flex-1 p-6 max-w-6xl mx-auto w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/integrantes" element={<Integrantes />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/moods" element={<MoodHistory />} />
            <Route path="/suggestions" element={<Suggestions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
