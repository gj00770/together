import axios from "axios";
import { useQuery } from "react-query";
import { User } from "../types/User";

export function useUser() {
  const query = useQuery<User>(
    "me12323",
    async () => {
      const test = localStorage.getItem("accessToken");
      try {
        const { data } = await axios.post(
          "http://13.209.132.48/user/test",
          {},
          {
            headers: { Authorization: `Bearer ${test}` },
          }
        );
        return data;
      } catch (err) {
        // setUserImage(data.profile_image);
        //setNickName(data.nickname);
        // await new Promise((resolve) => setTimeout(resolve, 5000));
        return null;
      }
    },
    { refetchOnMount: true }
  );

  return {
    data: query.data,
    isLoading: query.isLoading,
    refetch: query.refetch,
  };
}
