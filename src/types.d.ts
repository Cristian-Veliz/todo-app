import { type TODO_FILTERS } from './consts'

export interface Todo {
    id: string,
    title: string,
    completed: boolean,
}

// export type TodoTitle = Todo['title']
//Pick es un utility clases

export type TodoId = Pick<Todo, 'id' | 'completed'>
export type TodoTitle = Pick<Todo, 'title'>
export type TodoCompleted = Pick<Todo, 'completed'>

export type ListOfTodos = Todo[]

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]