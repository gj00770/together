import { useQuery } from 'react-query';

const useClientValue = (key, initialData) =>
  useQuery(key, {
    initialData,
    staleTime: Infinity,
  }).data;

export default useClientValue;
