import { configureStore } from "@reduxjs/toolkit";
import cashSlice from "./cashReducer";
import clientSlise from "./clientReducer";

export default configureStore({
  reducer: {
    cash: cashSlice,
    client: clientSlise,
  },
});
