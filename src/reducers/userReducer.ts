import { RootState } from "./../app/store";
import { QuickPaymentData } from "./../types/common.d";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  quickPayments: QuickPaymentData[];
}

const initialState: UserState = {
  quickPayments: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addQuickPayment: (state, action: PayloadAction<QuickPaymentData>) => {
      state.quickPayments = [...state.quickPayments, action.payload];
    },
    setQuickPayments: (state, action: PayloadAction<QuickPaymentData[]>) => {
      state.quickPayments = [...action.payload];
    },
  },
});

export const { addQuickPayment, setQuickPayments } = userSlice.actions;

export const selectQuickPayments = (state: RootState) =>
  state.user.quickPayments;

export default userSlice.reducer;
