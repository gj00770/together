import Product from "../../pages/product";
import { cartItem } from "../types/CartItem";

export function SumPrice(price: [cartItem]) {
  let sum = 0;
  for (let i = 0; i < price.length; i++) {
    sum = sum + price[i].product.price;
  }
  return sum;
}
