// import axios from "axios";
// import { useQuery } from "react-query";

// export function useProductByCategory(category: any) {
//   // customHook naming must start with "use"
//   const getProductWithAxios = async () => {
//     console.log(category);
//     const test = localStorage.getItem("accessToken");
//     const { data } = await axios.get(
//       `http://localhost:5000/product/find/${category}`,
//       {}
//     );
//     // setUserImage(data.profile_image);
//     //setNickName(data.nickname);
//     // await new Promise((resolve) => setTimeout(resolve, 5000));
//     return data;
//   };
//   const query = useQuery(`Product3232${category}`, getProductWithAxios);

//   return { data: query.data, isLoading: query.isLoading };
// }
