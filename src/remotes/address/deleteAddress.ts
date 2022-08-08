import { requester } from "../requester";

export async function deleteAddress(id: number) {
  requester.delete(`http://localhost:5000/user/my/address/${id}`);
}
