import { Product } from "./Product";

export interface OrderItemEntity {
  id: number;
  count: number;
  product: Product;
  price: number;
}
