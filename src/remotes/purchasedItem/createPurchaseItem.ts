import { requester } from "../requester";

interface Item {
  id: number;

  count: number;
}
export async function createPurchaseItem(purchaseItem: Item[] | []) {
  await requester.post(`http://localhost:5000/purchase`, {
    purchaseItems: purchaseItem,
  });
}
