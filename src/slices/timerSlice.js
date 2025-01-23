// src/slices/timerSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  timers: {}, // Store timers for each todo (using todoId as the key)
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    startTimer: (state, action) => {
      const { todoId } = action.payload;
      if (!state.timers[todoId]) {
        state.timers[todoId] = { time: 0, isRunning: true };
      } else {
        state.timers[todoId].isRunning = true;
      }
    },
    stopTimer: (state, action) => {
      const { todoId } = action.payload;
      if (state.timers[todoId]) {
        state.timers[todoId].isRunning = false;
      }
    },
    resetTimer: (state, action) => {
      const { todoId } = action.payload;
      state.timers[todoId] = { time: 0, isRunning: false };
    },
    incrementTimer: (state, action) => {
      const { todoId } = action.payload;
      if (state.timers[todoId]?.isRunning) {
        state.timers[todoId].time += 1;
      }
    },
  },
});

export const { startTimer, stopTimer, resetTimer, incrementTimer } = timerSlice.actions;
export const timerReducer = timerSlice.reducer;
