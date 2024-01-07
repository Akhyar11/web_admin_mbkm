import { configureStore } from "@reduxjs/toolkit";
import { setUser } from "./user.js";

export const makeStore = () => {
  return configureStore({
    reducer: {
      setUser,
    },
  });
};
