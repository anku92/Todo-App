import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./reducer/tasksSlice";

export const store = configureStore({
    reducer: { tasks: tasksSlice }
})