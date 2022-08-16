import { requester } from "../requester";

export async function updateUserProfile(file: File) {
  const data = new FormData();
  data.append("file", file);

  await requester.post("http://localhost:5000/user/updateProfileImage", data);
}

export async function updateUserDefaultAdress(id: number) {
  await requester.put("http://localhost:5000/user/updateUserProfile", {
    default_address: id,
  });
}

export async function updateUserNickName(nickName: string) {
  await requester.put("http://localhost:5000/user/updateUserProfile", {
    nickname: nickName,
  });
}

//export async function updateUserNickName(nickName: string) {
// await requester.post("http://localhost:5000/user/updateUserProfile", {
//   nickname: nickName,
// })
