import axios from "axios";
import { useQuery } from "react-query";

export function useUser() {
  const query = useQuery("me", async () => {
    const test = localStorage.getItem("accessToken");
    const { data } = await axios.post(
      "http://localhost:5000/user/test",
      {},
      {
        headers: { Authorization: `Bearer ${test}` },
      }
    );
    // setUserImage(data.profile_image);
    //setNickName(data.nickname);
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    return data;
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    Refetching: query.isRefetching,
    refetch: query.refetch,
  };
}
