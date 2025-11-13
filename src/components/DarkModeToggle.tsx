import { useTheme } from '../context/ThemeContext';

export default function DarkModeToggle() {
  const { theme, toggle } = useTheme();
  const dark = theme === 'dark';

  return (
    <button
      onClick={toggle}
      className="p-2 rounded bg-indigo-500 hover:bg-indigo-700 transition-colors"
      title="Alternar modo"
    >
      {dark ? '🌙' : '☀️'}
    </button>
  );
}
