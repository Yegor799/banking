import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const clientId = '074e7842-be8a-4ee3-9659-6b0122fb1382';
const AUTH_TOKEN = '8122d42815d3c04b66531e59fd9ce98b';

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

