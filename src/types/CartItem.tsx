import { Product } from "./Product";

export interface CartItemEntity {
  id: number;
  count: number;
  product: Product;
}
