import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <section>
      <div className="rounded-lg p-8 bg-gradient-to from-indigo-50 to-white dark:from-indigo-900 dark:to-gray-900 shadow">
        <h1 className="text-3xl font-bold mb-2">MindLink</h1>
        <p className="mb-4">Monitor de Saúde Mental e Bem-Estar — registre seu humor e acompanhe o bem-estar semanal.</p>
        <div className="flex gap-3">
          <Link to="/login" className="px-4 py-2 bg-indigo-600 text-white rounded">Entrar</Link>
          <Link to="/about" className="px-4 py-2 border rounded">Sobre o projeto</Link>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded shadow">
          <h2 className="font-semibold">Como funciona</h2>
          <ol className="list-decimal ml-5 mt-2 space-y-1">
            <li>Login</li>
            <li>Registre seu humor do dia</li>
            <li>Veja recomendações e o gráfico semanal</li>
          </ol>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded shadow">
          <h2 className="font-semibold">Objetivos (ODS)</h2>
          <ul className="list-disc ml-5 mt-2">
            <li>ODS 3 — Saúde e bem-estar</li>
            <li>ODS 8 — Trabalho decente</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
