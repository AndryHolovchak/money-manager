import { Payment } from "./../types/common.d";
import { RootState } from "./../app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface HistoryState {
  payments: Payment[];
}

const initialState: HistoryState = {
  payments: [],
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addPayment: (state, action: PayloadAction<Payment>) => {
      state.payments = [...state.payments, action.payload];
    },
    setPayments: (state, action: PayloadAction<Payment[]>) => {
      state.payments = [...action.payload];
    },
  },
});

export const { addPayment, setPayments } = historySlice.actions;

export const selectPayments = (state: RootState) => state.history.payments;

export default historySlice.reducer;
