import axios from "axios";
import { useQuery } from "react-query";

export function useProductBySearch(search: any) {
  // customHook naming must start with "use"
  const getProductWithAxios = async () => {
    console.log(search);
    const test = localStorage.getItem("accessToken");
    const { data } = await axios.get(
      `http://localhost:5000/product/search/${search}`,
      {}
    );
    // setUserImage(data.profile_image);
    //setNickName(data.nickname);
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    return data;
  };
  const query = useQuery(`Productse${search}`, getProductWithAxios);

  return { data: query.data, isLoading: query.isLoading };
}
