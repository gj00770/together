import Product from "../../pages/product";
import { CartItemEntity } from "../types/CartItem";

export function SumPrice(price: [CartItemEntity]) {
  // if (Array.isArray(price)) {
  let sum = 0;
  for (let i = 0; i < price.length; i++) {
    sum = sum + price[i].product.price * price[i].count;
  }
  return sum;
  // }
}
