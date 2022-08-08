import { useQueryClient } from "react-query";

const useSetClientState = (key: any) => {
  const queryClient = useQueryClient();
  console.log("jo");
  return (state: any) => queryClient.setQueryData(key, state);
};

export default useSetClientState;
