import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./userSlice";

export const store = configureStore({
     reducer: {
          todos: todoSlice,
     },
});
