import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../services/api'

export default function Login(){
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const nav = useNavigate()

  async function handleSubmit(e: React.FormEvent){
    e.preventDefault();
    setLoading(true); setError(null)
    try{
      const data = await api.login({ username, password })
      localStorage.setItem('token', data.token)
      nav('/dashboard')
    }catch(err:any){
      setError(err.message || 'Erro no login')
    }finally{setLoading(false)}
  }

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input value={username} onChange={e=>setUsername(e.target.value)} placeholder="Usuário" className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700" />
        <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Senha" className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700" />
        {error && <div className="text-red-500">{error}</div>}
        <button disabled={loading} className="w-full py-2 bg-indigo-600 text-white rounded">{loading? 'Entrando...' : 'Entrar'}</button>
      </form>
    </div>
  )
}
