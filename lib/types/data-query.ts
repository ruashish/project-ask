export interface DataQuery<Request> {
  queryKey?: string;
  url: string;
  body?: Request;
  method?: string;
  page?: number;
  pageSize?: number;
}

export interface DataQueryResponse<Response> {
  data: Response;
  error: any;
  isError: boolean;
  isLoading: boolean;
}
