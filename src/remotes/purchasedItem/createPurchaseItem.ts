import { requester } from "../requester";

interface Item {
  id: number;

  count: number;
}
export async function createPurchaseItem(purchaseItem: Item[] | []) {
  await requester.post(`http://13.209.132.48/purchase`, {
    purchaseItems: purchaseItem,
  });
}
