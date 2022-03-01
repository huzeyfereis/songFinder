import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import itunesSearchSlice from "./itunesSearchSlice";

export const store = configureStore({
  reducer: {
    itunesSearch: itunesSearchSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
