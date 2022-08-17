import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const clientId = '1d7f3023-e257-4381-b997-bf56911e821a';
const AUTH_TOKEN = '7ff7e0139784048a9d56420d0783e5a4';

export const bankingApi = createApi({
  reducerPath: 'bankingApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://client.demo.crassu.la',
    // credentials: 'include',
    prepareHeaders: (headers) => {
    headers.set('Authorization', AUTH_TOKEN);
    return headers;      
  },
  }),  
  endpoints: (builder) => ({
    getAllAccounts: builder.query({
      query: () => `/api/clients/${clientId}/accounts`,
    })
  })
})

export const { useGetAllAccountsQuery } = bankingApi;