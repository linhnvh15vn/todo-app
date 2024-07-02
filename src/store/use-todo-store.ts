import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { type Todo } from '../types';

interface TodoStore {
  todoList: Todo[];
  filter: 'all' | 'active' | 'completed' | string;
  setFilter: (filter: string) => void;
  set: (todoList: Todo[]) => void;
  create: (title: string) => void;
  update: (id: string) => void;
  remove: (id: string) => void;
  removeCompleted: () => void;
}

const createTodo = (title: string): Todo => {
  return {
    id: Date.now().toString(),
    title,
    isCompleted: false,
  };
};

export const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      todoList: [],
      filter: 'all',

      setFilter: (filter) => set({ filter }),

      set: (todoList) => set({ todoList }),

      create: (title) =>
        set((state) => ({ todoList: [...state.todoList, createTodo(title)] })),

      update: (id) =>
        set((state) => ({
          todoList: state.todoList.map((todo) =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
          ),
        })),

      remove: (id) =>
        set((state) => ({
          todoList: state.todoList.filter((todo) => todo.id !== id),
        })),

      removeCompleted: () =>
        set((state) => ({
          todoList: state.todoList.filter((todo) => todo.isCompleted !== true),
        })),
    }),
    {
      name: 'todo-storage',
    },
  ),
);
