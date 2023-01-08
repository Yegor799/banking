import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const clientId = '7582c092-497f-412e-8e55-d5062a8a5b3b';
const AUTH_TOKEN = 'adff2dbd3352cf46f64dc1a2c1d84b81';

export const bankingApi = createApi({
  reducerPath: 'bankingApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://client.demo.crassu.la',
    prepareHeaders: (headers) => {
      headers.set('Authorization', AUTH_TOKEN);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllAccounts: builder.query({
      query: () => `/api/clients/${clientId}/accounts`,
    }),
    getBalances: builder.query({
      query: () => `/api/clients/${clientId}/balances`,
    }),
    getCurrentAccountInfo: builder.query({
      query: (accountId) => `/api/clients/${clientId}/accounts/${accountId}`
    }),
    getAllTransactions: builder.query({
      query: () => `/api/clients/${clientId}/transactions`,
    }),
    getPersonDetails: builder.query({
      query: () => `/api/clients/${clientId}/person-details`,
    }),
  })
})

export const {
  useGetAllAccountsQuery,
  useGetBalancesQuery,
  useGetCurrentAccountInfoQuery,
  useGetAllTransactionsQuery,
  useGetPersonDetailsQuery,
} = bankingApi;

