import { requester } from "../requester";

export async function updateUserProfile(file: File) {
  requester.put("http://localhost:5000/user/updateUserProfile", {
    profile_image: URL.createObjectURL(file),
  });
}
export async function updateUserDefaultAdress(id: number) {
  requester.put("http://localhost:5000/user/updateUserProfile", {
    default_address: id,
  });
}
