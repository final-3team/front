import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import noticeSlice from "./noticeSlice";

export const store = configureStore({
  reducer: {user:userSlice.reducer, notice:noticeSlice.reducer},
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;