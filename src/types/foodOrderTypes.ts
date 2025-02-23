export interface OrderDetails {
  id: string;
  restaurantImg: string;
  restaurantName: string;
  address: string;
  orderCode: string;
  status: OrderStatus;
  orderDate: string;
  amount: number;
  food: string;
  customer: {
    name: string;
    phone: string;
    email: string;
    address: string;
  };
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
  payment: {
    method: string;
    status: "paid" | "pending" | "failed";
    transactionId?: string;
  };
}

export type OrderStatus =
  | "received"
  | "preparing"
  | "delivering"
  | "completed"
  | "canceled";

export type SortField = keyof Pick<
  OrderDetails,
  "orderDate" | "amount" | "status"
>;

export interface TableHeaderType {
  label: string;
  field?: SortField;
  align?: "left" | "right" | "center";
  sortable?: boolean;
  width?: string;
}
