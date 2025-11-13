export type User = {
  id: number
  name: string
  rm: string
  turma: string
  photoUrl?: string
  github?: string
  linkedin?: string
}

export type Mood =
  'Cansado' |
  'Motivado' |
  'Ansioso' |
  'Neutro' |
  'Estressado'

export type MoodRecordInput = {
  mood: Mood
  note?: string
  date: string
}


export type MoodRecord = {
  id: number
  mood: Mood
  note?: string
  date: string
}
