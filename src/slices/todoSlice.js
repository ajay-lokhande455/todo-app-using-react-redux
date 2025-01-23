import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [], // List of todo items
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        description: action.payload.description, // Fixed typo
        priority: action.payload.priority || "Medium", // New field: Priority (Low, Medium, High)
        dueDate: action.payload.dueDate || null, // New field: Due date
        category: action.payload.category || "General", // New field: Category
        completed: false,
        createdAt: new Date().toLocaleString(),
        completedAt: null,
        updatedAt: null, // Tracks when the todo was last updated
      };
      state.todos.push(newTodo);
      console.log("Todo added:", newTodo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      console.log("Todo deleted with ID:", action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? new Date().toLocaleString() : null;
        todo.updatedAt = new Date().toLocaleString(); // Update timestamp
        console.log("Todo toggled:", todo);
      }
    },
    updateTodo: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
      if (index !== -1) {
        state.todos[index] = {
          ...state.todos[index],
          ...action.payload, // Update fields dynamically
          updatedAt: new Date().toLocaleString(), // Update timestamp
        };
        console.log("Todo updated:", state.todos[index]);
      }
    },
    clearCompleted: (state) => {
      // New reducer: Clear all completed todos
      state.todos = state.todos.filter((todo) => !todo.completed);
      console.log("Cleared all completed todos");
    },
    sortTodos: (state, action) => {
      // New reducer: Sort todos by field (e.g., priority, due date, etc.)
      const field = action.payload.field;
      const order = action.payload.order || "asc"; // "asc" or "desc"
      state.todos.sort((a, b) => {
        if (order === "asc") {
          return a[field] > b[field] ? 1 : -1;
        }
        return a[field] < b[field] ? 1 : -1;
      });
      console.log("Todos sorted by:", field, "Order:", order);
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo, updateTodo, clearCompleted, sortTodos } =
  todoSlice.actions;

export const todoReducer = todoSlice.reducer;
