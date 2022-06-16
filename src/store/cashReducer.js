import { createSlice } from '@reduxjs/toolkit';


const cashSlice = createSlice({
  name: 'cash',
  cash: 0,
  // Редьюсеры в слайсах мутируют состояние и ничего не возвращают наружу
  reducers: {
    addCash: (state, action) => {
      state.cash += action.payload;
    },
    getCash: (state, action) => {
      state.cash -= action.payload;
    },
  },
});

export const { addCash, getCash} = cashSlice.actions;

// По умолчанию экспортируется редьюсер сгенерированный слайсом
export default cashSlice.reducer;
