import {
  Currency,
  ExpenseCategory,
  IncomeCategory,
} from "./../definitions/common";

export interface Expsense {
  amount: Amount;
  timestamp: string;
  category: ExpenseCategory;
}

export interface Income {
  amount: Amount;
  timestamp: string;
  category: IncomeCategory;
}

export interface Amount {
  value: string;
  currency: Currency;
}
