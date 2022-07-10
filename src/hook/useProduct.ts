import axios from "axios";
import { useQuery } from "react-query";

export function useProduct(category: string) {
  // customHook naming must start with "use"
  const getProductWithAxios = async () => {
    const test = localStorage.getItem("accessToken");
    console.log(category);
    const { data } = await axios.get(
      `http://localhost:5000/product/${category}`,
      {}
    );
    // setUserImage(data.profile_image);
    //setNickName(data.nickname);
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    return data;
  };
  const query = useQuery(`Product`, getProductWithAxios);

  return { data: query.data, isLoading: query.isLoading };
}
