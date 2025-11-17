import axios from 'axios'
import type { MoodRecordInput, MoodRecord } from '../types/types'

const baseURL = import.meta.env.VITE_API_URL || 'https://gs-java-hb78.onrender.com'
const http = axios.create({ baseURL })

export const api = {
  async login({ username, password }: { username: string; password: string }) {
    const { data } = await http.post('/main/login', { username, password })
    return data
  },

  async getUsers() {
    const { data } = await http.get('/main/usuario')
    return data
  },

  async getUserById(id: number) {
    const { data } = await http.get(`/main/usuario/${id}`)
    return data
  },

  async createUser(user: { username: string; password: string }) {
    const { data } = await http.post('/main/usuario', user)
    return data
  },

  async updateUser(id: number, user: { username?: string; password?: string }) {
    const { data } = await http.put(`/main/usuario/${id}`, user)
    return data
  },

  async deleteUser(id: number) {
    const { data } = await http.delete(`/main/usuario/${id}`)
    return data
  },

  async getMoodRecords(Id: number): Promise<MoodRecord[]> {
    const { data } = await http.get(`/main/usuario/${Id}/moods`)
    return data
  },

  async postMoodRecord(Id: number, record: MoodRecordInput) {
    const { data } = await http.post(`/main/usuario/${Id}/moods`, record)
    return data
  },

  async updateMoodRecord(Id: number, moodId: number, record: MoodRecordInput) {
    const { data } = await http.put(`/main/usuario/${Id}/moods/${moodId}`, record)
    return data
  },

  async deleteMoodRecord(Id: number, moodId: number) {
    const { data } = await http.delete(`/main/usuario/${Id}/moods/${moodId}`)
    return data
  }
}
