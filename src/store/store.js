import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./HomeSlice/slice";
import battleReducer from "./BattleSlice/slice";
export const store = configureStore({
  reducer: {
    home: homeReducer,
    battle: battleReducer,
  },
});
