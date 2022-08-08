import { requester } from "../requester";

export async function deleteCartItem(id: number) {
  await requester.delete(`http://localhost:5000/product/${id}/cartItem`, {});
}
