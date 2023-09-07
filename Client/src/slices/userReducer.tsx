import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import personalImg from "../assets/user.png";
export interface UserState {
  loggedIn: boolean;
  fetch: boolean;
  expires: boolean;
  image: string | ArrayBuffer | null | File;
}

const initialState: UserState = {
  loggedIn: false,
  fetch: false,
  expires: false,
  image: personalImg,
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
      action: PayloadAction<string | ArrayBuffer | null | File>
    ) => {
      state.image = action.payload;
    },
  },
});

export const { updateLoggedIn, updateFetch, updateExpires, updateImage } =
  userSlice.actions;

export default userSlice.reducer;
