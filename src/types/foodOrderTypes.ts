// Core address type used across the system
interface Address {
  street: string;
  city: string;
  state?: string;
  country?: string;
  postalCode?: string;
  additionalInfo?: string;
}

// Customer information
interface Customer {
  id: string;
  name: string;
  phone: string;
  email: string;
  deliveryAddress?: Address;
  pickupLocation?: Address;
  preferences?: {
    dietaryRestrictions?: string[];
    allergies?: string[];
  };
}

// Menu item in an order
interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  customizations?: {
    instructions?: string;
    modifications?: string[];
  };
}

// Payment information
export interface Payment {
  id: string;
  method: "credit_card" | "debit_card" | "upi" | "cash" | "wallet";
  status: "pending" | "processing" | "paid" | "failed" | "refunded";
  transactionId: string;
  amount: number;
  currency: string;
  timestamp: string;
  metadata?: Record<string, unknown>;
}

// Restaurant information
interface Restaurant {
  id: string;
  name: string;
  imageUrl: string;
  address: Address;
  contact: {
    phone: string;
    email: string;
  };
  operatingHours?: {
    [key: string]: {
      open: string;
      close: string;
    };
  };
}

// Order status tracking with more granular states
export type OrderStatus =
  | "created"
  | "confirmed"
  | "preparing"
  | "ready_for_pickup"
  | "out_for_delivery"
  | "delivered"
  | "cancelled"
  | "refunded";

// Event types for comprehensive tracking
type OrderEventType =
  | "order_created"
  | "order_confirmed"
  | "preparation_started"
  | "preparation_completed"
  | "ready_for_pickup"
  | "pickup_in_progress"
  | "pickup_completed"
  | "delivery_assigned"
  | "out_for_delivery"
  | "delivery_completed"
  | "order_cancelled"
  | "refund_initiated"
  | "refund_completed";

// Event tracking for order lifecycle
export interface OrderEvent {
  id: string;
  type: OrderEventType;
  title: string;
  description?: string;
  timestamp: string;
  status: "pending" | "in_progress" | "completed" | "failed";
  metadata?: {
    location?: Address;
    agent?: string;
    notes?: string;
    [key: string]: unknown;
  };
}

export interface OrderFilters {
  status: OrderStatus | "all";
  restaurant: string;
  dateFrom: string | null;
  dateTo: string | null;
  searchTerm: string;
  fulfillmentType?: "delivery" | "pickup" | "all";
  paymentStatus?: Payment["status"] | "all";
}

// Main order interface
export interface OrderDetails {
  id: string;
  orderCode: string;
  restaurant: Restaurant;
  customer: Customer;
  items: OrderItem[];
  status: OrderStatus;
  payment: Payment;

  // Timestamps for key events
  createdAt: string;
  updatedAt: string;
  scheduledFor?: string;

  // Order metrics
  subtotal: number;
  tax: number;
  deliveryFee?: number;
  discount?: number;
  totalAmount: number;

  // Delivery/pickup details
  fulfillmentType: "delivery" | "pickup";

  // Event tracking
  events: OrderEvent[];

  // Additional metadata
  tags?: string[];
  notes?: string;
  metadata?: Record<string, unknown>;
}

// Sorting configuration
type SortDirection = "asc" | "desc";

export type SortField = keyof Pick<
  OrderDetails,
  | "createdAt"
  | "totalAmount"
  | "status"
  | "orderCode"
  | "updatedAt"
  | "scheduledFor"
>;

// Sort configuration interface
export interface SortConfig {
  field: SortField;
  direction: SortDirection;
}

export interface TableHeaderType {
  label: string;
  field?: SortField;
  align?: "left" | "right" | "center";
  sortable?: boolean;
  width?: string;
}
