import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "../slices/todoSlice";
import { timerReducer } from "../slices/timerSlice";

const store = configureStore({
    reducer: {
        todo : todoReducer,
        timer: timerReducer
    }, 
})

export default store;