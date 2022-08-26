import { requester } from "../requester";

export async function deleteAddress(id: number) {
  requester.delete(`http://13.209.132.48/user/my/address/${id}`);
}
