import { requester } from "../requester";

export async function deleteCartItem(id: number) {
  await requester.delete(`http://13.209.132.48/product/${id}/cartItem`, {});
}
