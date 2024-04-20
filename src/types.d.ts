import { type TODO_FILTERS } from './consts'

export interface Todo {
    id: string,
    title: string,
    completed: boolean,
}

// export type TodoTitle = Todo['title']
//Pick es un utility clases

export type TodoId = {
    id: string;
    completed?: boolean;
};
export type TodoTitle = Pick<Todo, 'title'>
export type TodoCompleted = boolean;

export type ListOfTodos = Todo[]

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]