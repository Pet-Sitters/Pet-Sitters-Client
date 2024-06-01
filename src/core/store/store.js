import { configureStore } from "@reduxjs/toolkit";
import authorization from "./auth/slice";

export const store = configureStore({
  reducer: {
		authorization
  },
});