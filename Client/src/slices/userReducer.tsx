import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  loggedIn: boolean;
  fetch: boolean;
  expires: boolean;
  image: string | ArrayBuffer | null ;
}

const initialState: UserState = {
  loggedIn: false,
  fetch: false,
  expires: false,
  image: "/user.png",
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
    updateImage: (
      state,
      action: PayloadAction<string | ArrayBuffer | null >
    ) => {
      state.image = action.payload;
    },
  },
});

export const { updateLoggedIn, updateFetch, updateExpires, updateImage } = userSlice.actions;
export const selectLoggedIn = (state : {user: UserState}) => state.user.loggedIn;

export default userSlice.reducer;
