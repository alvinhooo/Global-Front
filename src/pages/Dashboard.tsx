import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../services/api'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default function Dashboard() {
  const userId = 1
  const [records, setRecords] = useState<any[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    api
      .getMoodRecords(userId)
      .then((data) => setRecords(data))
      .catch(() => {
        setRecords([
          { date: new Date().toISOString(), mood: 'Motivado' },
        ])
      })
  }, [])

  const labels = records.map((r) => new Date(r.date).toLocaleDateString())

  const data = {
    labels,
    datasets: [
      {
        label: 'Bem-estar (simplificado)',
        data: records.map((r) => {
          const map: Record<string, number> = {
            Cansado: 2,
            Ansioso: 1,
            Neutro: 3,
            Motivado: 5,
            Estressado: 1,
          }
          return map[r.mood] ?? 3
        }),
        tension: 0.4,
      },
    ],
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
        <Line data={data} />
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          onClick={() => navigate('/moods')}
          className="p-4 bg-white dark:bg-gray-800 rounded shadow cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          Registrar humor — componente simplificado (redirecionar para MoodHistory)
        </div>

        <div
          onClick={() => navigate('/suggestions')}
          className="p-4 bg-white dark:bg-gray-800 rounded shadow cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          Sugestões automáticas — acesse /suggestions
        </div>
      </div>
    </div>
  )
}
