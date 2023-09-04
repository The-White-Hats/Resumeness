import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface ColorState {
  color: string;
}

const initialState: ColorState = {
  color: "#224286d6",
};

export const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    updateColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
  },
});

export const { updateColor } = colorSlice.actions;

export default colorSlice.reducer;
