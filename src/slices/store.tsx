import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./colorReducer";
import formReducer from "./formReducer";
const store = configureStore({
  reducer: {
    formCollection: formReducer,
    color: colorReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
