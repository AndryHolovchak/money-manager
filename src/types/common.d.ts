import {
  CategoryType,
  Currency,
  ExpenseCategoryType,
  IncomeCategoryType,
} from "./../definitions/common";

export interface Payment {
  amount: Amount;
  timestamp: string;
  category: CategoryData;
}

export interface Amount {
  value: string;
  currency: Currency;
}

export interface CategoryData {
  type: CategoryType;
  name: string;
  icon: string;
}

export interface QuickPaymentData {
  name: string;
  amount: Amount;
  category: CategoryData;
}
