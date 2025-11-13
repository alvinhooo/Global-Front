import { useEffect, useState } from 'react'
import { api } from '../services/api'
import type { Mood } from '../types/types';

export default function MoodHistory() {
  const userId = 1;
  const [records, setRecords] = useState<any[]>([])
  const [mood, setMood] = useState<Mood>('Neutro')
  const [note, setNote] = useState('')

  useEffect(() => {
    api.getMoodRecords(userId)
      .then(d => setRecords(d))
      .catch(() => {})
  }, [])

  async function save() {
    try {
      await api.postMoodRecord(userId, { mood, note })
      const updated = await api.getMoodRecords(userId)
      setRecords(updated)
      setNote('')
    } catch (e) {
      alert('Erro ao salvar')
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Registrar humor</h1>
      <div className="p-4 bg-white dark:bg-gray-800 rounded shadow space-y-3">
        <select value={mood}  onChange={e => setMood(e.target.value as Mood)} className="p-2 rounded bg-gray-100 dark:bg-gray-700">
          <option>Cansado</option>
          <option>Motivado</option>
          <option>Ansioso</option>
          <option>Neutro</option>
          <option>Estressado</option>
        </select>

        <textarea value={note} onChange={e => setNote(e.target.value)} placeholder="Observações (opcional)"
        className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700"/>

        <button onClick={save} className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
          Salvar
        </button>
      </div>

      <div className="mt-6">
        <h2 className="font-semibold">Histórico</h2>
        <ul className="mt-2 space-y-2">
          {records.map(r => (
            <li key={r.id} className="p-3 bg-white dark:bg-gray-800 rounded shadow-sm">
              <div className="text-sm text-gray-500">
                {new Date(r.date).toLocaleString()}
              </div>
              <div className="font-medium">{r.mood}</div>
              {r.note && <div className="text-sm mt-1">{r.note}</div>}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <a href="/dashboard" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-900 transition">
          Voltar para Dashboard
        </a>

        <a href="/" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-900 transition">
          Ir para Home
        </a>

      </div>
    </div>
  )
}
