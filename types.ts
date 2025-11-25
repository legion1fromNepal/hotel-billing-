
export interface MenuItem {
  id: number;
  name: string;
  price: number;
  // FIX: Add missing 'category' and 'image' properties to resolve type errors.
  category: string;
  image: string;
}

export interface OrderItem extends MenuItem {
  quantity: number;
}

export interface Bill {
  id: string;
  name: string;
  receiptNumber: string;
  items: OrderItem[];
  billNumber: number;
}

export interface RestaurantDetails {
  name: string;
  address: string;
  phone: string;
}

export interface CompletedBill {
  id: string;
  name: string;
  receiptNumber: string;
  items: OrderItem[];
  paidAt: string;
  finalTotal: number;
  subtotal: number;
  discount: number;
  paidBillNumber?: string; // New property for sequential paid bill numbers
}
