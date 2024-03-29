import axios from "axios";
import { useQuery } from "react-query";

export function useProductByCategory(category: string) {
  // customHook naming must start with "use"
  const getProductWithAxios = async () => {
    const test = localStorage.getItem("accessToken");
    const { data } = await axios.get(
      `http://13.209.132.48/product/${category}`,
      {}
    );
    return data;
  };
  const query = useQuery(`Productca${category}`, getProductWithAxios);

  return { data: query.data, isLoading: query.isLoading };
}
