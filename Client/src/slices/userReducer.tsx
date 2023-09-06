import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  loggedIn: boolean;
}

const initialState: UserState = {
  loggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload;
    },
  },
});

export const selectLoggedIn = (state : {user: UserState}) => state.user.loggedIn;
export const { updateLoggedIn } = userSlice.actions;

export default userSlice.reducer;
