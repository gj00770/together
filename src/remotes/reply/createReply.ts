import { requester } from "../requester";

export async function createReply(id: number, reply: string) {
  await requester.post(`http://13.209.132.48/product/${id}/reply`, {
    content: reply,
  });
}
