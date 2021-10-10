import { RootState } from "./../app/store";
import { Amount } from "./../types/common.d";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Currency } from "../definitions/common";

export interface ChartState {
  totalIncome: Amount;
  totalExpenses: Amount;
}

const initialState: ChartState = {
  totalIncome: {
    value: "0",
    currency: Currency.UAH,
  },
  totalExpenses: {
    value: "0",
    currency: Currency.UAH,
  },
};

export const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {
    setTotalIncome: (state, action: PayloadAction<Amount>) => {
      state.totalIncome = action.payload;
    },
    setTotalExpense: (state, action: PayloadAction<Amount>) => {
      state.totalExpenses = action.payload;
    },
    updateTotalIncome: (state, action: PayloadAction<Amount>) => {
      state.totalIncome = {
        ...state.totalIncome,
        value: (+state.totalIncome.value + +action.payload.value).toString(),
      };
    },
    updateTotalExpenses: (state, action: PayloadAction<Amount>) => {
      state.totalExpenses = {
        ...state.totalExpenses,
        value: (+state.totalExpenses.value + +action.payload.value).toString(),
      };
    },
  },
});

export const {
  setTotalIncome,
  setTotalExpense,
  updateTotalIncome,
  updateTotalExpenses,
} = chartSlice.actions;

export const selectTotalIncome = (state: RootState) => state.chart.totalIncome;
export const selectTotalExpenses = (state: RootState) =>
  state.chart.totalExpenses;

export default chartSlice.reducer;
