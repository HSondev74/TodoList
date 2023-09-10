// src/features/todoSlice.js
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
     name: "todos",
     initialState: [],
     reducers: {
          addTodo: (state, action) => {
               state.push({
                    id: Date.now(),
                    text: action.payload,
               });
               return state;
          },
          toggleComplete: (state, action) => {
               const todo = state.find((item) => item.id === action.payload);
               if (todo) {
                    todo.completed = !todo.completed;
               }
          },
          editTodo: (state, action) => {
               const todo = state.map((item) =>
                    item.id === action.payload.id
                         ? { ...item, text: action.payload.text }
                         : item
               );
               return todo;
          },
          removeTodo: (state, action) => {
               return state.filter((todo) => todo.id !== action.payload);
          },
     },
});

export const { addTodo, toggleComplete, editTodo, removeTodo } =
     todoSlice.actions;

export default todoSlice.reducer;
