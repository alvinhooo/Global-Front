import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

export default function Header() {
  const themeCtx = useContext(ThemeContext);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-bold text-indigo-600 dark:text-indigo-400"
        >
          MindLink
        </Link>

        <nav className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'font-semibold' : 'hover:underline'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/integrantes"
            className={({ isActive }) =>
              isActive ? 'font-semibold' : 'hover:underline'
            }
          >
            Integrantes
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'font-semibold' : 'hover:underline'
            }
          >
            Sobre
          </NavLink>
          <NavLink
            to="/faq"
            className={({ isActive }) =>
              isActive ? 'font-semibold' : 'hover:underline'
            }
          >
            FAQ
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'font-semibold' : 'hover:underline'
            }
          >
            Contato
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? 'font-semibold' : 'hover:underline'
            }
          >
            Dashboard
          </NavLink>

          <button
            onClick={themeCtx.toggle}
            className="ml-3 px-3 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
          >
            Toggle Theme
          </button>
        </nav>
      </div>
    </header>
  );
}
