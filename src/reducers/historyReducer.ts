import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface HistoryState {
  incomes: string[];
  expenses: string[];
}

const initialState: HistoryState = {
  incomes: [],
  expenses: [],
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addIncome: (state, action: PayloadAction<string>) => {
      state.incomes = [...state.incomes, action.payload];
    },
    addExpense: (state, action: PayloadAction<string>) => {
      state.expenses = [...state.expenses, action.payload];
    },
  },
});

export const { addIncome, addExpense } = historySlice.actions;

export default historySlice.reducer;
