import axios from "axios";
import { useQuery } from "react-query";

export function useProductById(id: any) {
  // customHook naming must start with "use"
  const getProductWithAxios = async () => {
    console.log(id);
    const test = localStorage.getItem("accessToken");
    const { data } = await axios.get(
      `http://localhost:5000/product/find/${id}`,
      {}
    );
    // setUserImage(data.profile_image);
    //setNickName(data.nickname);
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    return data;
  };
  const query = useQuery(`Product${id}`, getProductWithAxios);

  return { data: query.data, isLoading: query.isLoading };
}
