import { Link } from 'react-router-dom'
import DarkModeToggle from '../components/DarkModeToggle'
import img from '../img/logo.png'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-indigo-600 text-white shadow">
      <Link to="/" className="font-bold text-xl flex items-center gap-2">
        <img src={img} alt="logo" className="w-8 h-8" />
        MindLink
      </Link>
      <div className="flex gap-4 items-center">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">Sobre</Link>
        <Link to="/faq" className="hover:underline">FAQ</Link>
        <Link to="/integrantes" className="hover:underline">Integrantes</Link>
        <Link to="/contact" className="hover:underline">Contato</Link>
        <DarkModeToggle />
      </div>
    </nav>
  )
}
