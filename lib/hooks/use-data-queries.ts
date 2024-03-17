import { useQuery } from 'react-query';

interface useDataQueriesProps {
  queryKey?: string;
  url: string;
}

export const useDataQueries = ({ queryKey, url }: useDataQueriesProps) => {
  const { data, isError, error, isLoading } = useQuery(queryKey ?? url, async () => {
    const response = await fetch(url);
    return response.json();
  });

  return {
    data,
    error,
    isError,
    isLoading,
  };
};
