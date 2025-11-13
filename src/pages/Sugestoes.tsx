const suggestions = [
  { when: 'Cansado', text: 'Faça uma pausa de 10 minutos e caminhe um pouco; hidrate-se.' },
  { when: 'Ansioso', text: 'Respire profundamente por 5 minutos ou experimente 2 minutos de mindfulness.' },
  { when: 'Motivado', text: 'Ótimo! Anote suas tarefas mais importantes e aproveite o momento.' },
]

export default function Sugestoes() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Sugestões</h1>
      <div className="grid gap-4 mb-8">
        {suggestions.map((s, i) => (
          <div key={i} className="p-4 bg-white dark:bg-gray-800 rounded shadow">
            <div className="font-semibold">Quando estiver {s.when}</div>
            <div className="mt-1 text-sm">{s.text}</div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4">
        <a
          href="/dashboard"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-900 transition"
        >
          Voltar para Dashboard
        </a>
        <a
          href="/"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-900 transition"
        >
          Ir para Home
        </a>
      </div>
    </div>
  )
}
