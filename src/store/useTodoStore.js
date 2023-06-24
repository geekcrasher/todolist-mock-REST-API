import { create } from "zustand";

export const useTodoStore = create((set) => ({
   todo: null,
   title: '',
   description: '',
   priority: [],
   setTodo: (todo) => set({todo}),
   setTitle: (title) => set({title}),
   setDescription: (description) => set({description}),
   setPriority: (priority) => set({priority})
}))

