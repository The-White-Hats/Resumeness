import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  loggedIn: boolean;
  fetch: boolean;
  expires: boolean;
}

const initialState: UserState = {
  loggedIn: false,
  fetch: false,
  expires: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload;
    },
    updateFetch: (state, action: PayloadAction<boolean>) => {
      state.fetch = action.payload;
    },
    updateExpires: (state, action: PayloadAction<boolean>) => {
      state.expires = action.payload;
    },
  },
});

export const { updateLoggedIn, updateFetch, updateExpires } = userSlice.actions;

export default userSlice.reducer;
