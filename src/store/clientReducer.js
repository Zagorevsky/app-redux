import { createSlice } from "@reduxjs/toolkit";

const clientSlice = createSlice({
  name: "clients",
  initialState: { clients: [] },
  reducers: {
    addClient(state, action) {
      state.clients.push(action.payload);
    },
    getClient(state, action) {
      state.clients.pop();
    },
  },
});

export const { addClient, getClient } = clientSlice.actions;

export default clientSlice.reducer;
