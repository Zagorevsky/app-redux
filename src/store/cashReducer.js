import { createSlice } from "@reduxjs/toolkit";

const cashSlice = createSlice({
  name: "cash",
  initialState: { cash: 0 },
  reducers: {
    addCash(state, action) {
      state.cash += action.payload.cash;
    },
    getCash(state, action) {
      state.cash -= action.payload.cash;
    },
  },
});

export const { addCash, getCash } = cashSlice.actions;

export default cashSlice.reducer;
