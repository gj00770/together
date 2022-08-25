import axios from "axios";
import { useQuery } from "react-query";

export function useProductById(id: any) {
  // customHook naming must start with "use"
  const getProductWithAxios = async () => {
    const test = localStorage.getItem("accessToken");
    const { data } = await axios.get(
      `http://localhost:5000/product/find/${id}`,
      {}
    );

    return data;
  };
  const query = useQuery(`Product${id}`, getProductWithAxios);

  return { data: query.data, isLoading: query.isLoading };
}
