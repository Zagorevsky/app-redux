import { configureStore } from '@reduxjs/toolkit';
import cashSlice from './cashReducer'


export default configureStore({
    reducer: {
        cash: cashSlice,
    },
});

