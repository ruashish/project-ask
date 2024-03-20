import { useQuery } from 'react-query';

import { DataQuery, DataQueryResponse } from '../types';

export const useDataQueries = <Request, Response>({
  queryKey,
  url,
  body,
  method = 'POST',
  page = 1,
  pageSize = 20,
}: DataQuery<Request>): DataQueryResponse<Response> => {
  const { data, isError, error, isLoading } = useQuery([queryKey ?? url, page], async () => {
    const response = await fetch(url, {
      body: JSON.stringify({ ...body, page, pageSize }),
      headers: {
        'Content-Type': 'application/json',
      },
      method,
    });
    return response.json();
  });

  return {
    data,
    error,
    isError,
    isLoading,
  };
};
