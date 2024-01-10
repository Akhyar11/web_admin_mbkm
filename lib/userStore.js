import { create } from "zustand";

export const userStore = create((set) => ({
  id: 0,
  userName: "default",
  email: "",
  setUser: ({ id, userName, email }) => set({ id, userName, email }),
}));
