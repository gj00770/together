import axios from "axios";
import { useQuery } from "react-query";

export function useProductBySearch(search: string) {
  // customHook naming must start with "use"
  const getProductWithAxios = async () => {
    const test = localStorage.getItem("accessToken");
    const { data } = await axios.get(
      `http://13.209.132.48/product/search/${search}`,
      {}
    );

    return data;
  };
  const query = useQuery(`Productse${search}`, getProductWithAxios);

  return { data: query.data, isLoading: query.isLoading };
}
