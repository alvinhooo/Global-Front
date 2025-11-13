import axios from 'axios'
import type { MoodRecordInput, MoodRecord } from '../types/types'

const baseURL = import.meta.env.VITE_API_URL || 'https://gs-java-hb78.onrender.com'
const http = axios.create({ baseURL })

export const api = {
  async login({ username, password }: { username: string; password: string }) {
    const { data } = await http.post('main/login', { username, password })
    return data
  },

  async getUsers() {
    const { data } = await http.get('/users')
    return data
  },

  async getUserById(id: number) {
    const { data } = await http.get(`/users/${id}`)
    return data
  },

  async getMoodRecords(userId: number): Promise<MoodRecord[]> {
    const { data } = await http.get(`/users/${userId}/moods`)
    return data
  },

  async postMoodRecord(userId: number, record: MoodRecordInput) {
    const { data } = await http.post(`/users/${userId}/moods`, record)
    return data
  },
}
