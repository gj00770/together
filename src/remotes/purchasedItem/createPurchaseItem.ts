import { requester } from "../requester";
import { PurchaseItem } from "../../types/PurchaseItem";
import { Product } from "../../types/Product";
interface Item {
  id: number;

  count: number;

  time: Date;

  product: Product[];
}
export async function createPurchaseItem(purchaseItem: Product) {
  await requester.post(`http://localhost:5000/purchase`, {
    purchaseItems: purchaseItem,
  });
}
