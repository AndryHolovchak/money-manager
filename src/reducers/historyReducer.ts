import { RootState } from "./../app/store";
import { Income, Expsense } from "./../types/common.d";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface HistoryState {
  incomes: Income[];
  expenses: Expsense[];
}

const initialState: HistoryState = {
  incomes: [],
  expenses: [],
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addIncome: (state, action: PayloadAction<Income>) => {
      state.incomes = [...state.incomes, action.payload];
    },
    addExpense: (state, action: PayloadAction<Expsense>) => {
      state.expenses = [...state.expenses, action.payload];
    },
    setIncomes: (state, action: PayloadAction<Income[]>) => {
      state.incomes = [...action.payload];
    },
    setExpenses: (state, action: PayloadAction<Expsense[]>) => {
      state.expenses = [...action.payload];
    },
  },
});

export const { addIncome, addExpense, setIncomes, setExpenses } =
  historySlice.actions;

export const selectIncomes = (state: RootState) => state.history.incomes;
export const selectExpenses = (state: RootState) => state.history.expenses;

export default historySlice.reducer;
