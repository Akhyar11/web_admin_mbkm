import { createSlice } from "@reduxjs/toolkit";

export const setUser = createSlice({
  initialState: {
    data: [],
  },
  name: "user",
  reducers: {
    getUser: (state, action) => {
      switch (action.type) {
        case "login":
          state.data = action.payload;
      }
    },
  },
});

export const { getUser } = setUser.actions;
