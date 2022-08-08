import { requester } from "../requester";

export async function createCartItem(id: number, count: number) {
  await requester.post(`http://localhost:5000/product/${id}/cartItem`, {
    count: count,
  });
}
