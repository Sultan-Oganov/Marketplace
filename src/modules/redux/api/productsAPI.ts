import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '../types/products';

export const productsAPI = createApi({
  reducerPath: 'productsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001',
  }),
  endpoints: (build) => ({
    getProducts: build.query<IProduct[], null>({
      query: () => ({
        url: '/products',
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productsAPI;
