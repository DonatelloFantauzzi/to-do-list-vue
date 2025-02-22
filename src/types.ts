export interface ToDo {
  id: number
  text: string
  done: boolean
}

export type FilterKey = 'all' | 'completed' | 'todo'

export interface Filter {
  key: FilterKey
  text: string
  color: string
}
