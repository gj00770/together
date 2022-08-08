import { Product } from "./Product";
export interface PurchaseItem {
  id: number;

  count: number;

  time: Date;

  product: Product[];
}

//{id ; asd ; co asda ; product = { id : 123 , asd}
