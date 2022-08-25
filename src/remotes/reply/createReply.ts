import { requester } from "../requester";

export async function createReply(id: number, reply: string) {
  await requester.post(`http://localhost:5000/product/${id}/reply`, {
    content: reply,
  });
}
