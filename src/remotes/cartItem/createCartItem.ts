import { requester } from "../requester";

export async function createCartItem(id: number, count: number) {
  await requester.post(`http://13.209.132.48/product/${id}/cartItem`, {
    count: count,
  });
}
