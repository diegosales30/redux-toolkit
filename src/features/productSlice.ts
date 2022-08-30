import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
type Products = {
  products: [
    {
      id: number;
      name: string;
      photo: string;
      price: string;
      brand: string;
      description: string;
    }
  ];
};
//tipar as propriedades que vou usar, para não dar erro

// Define a service using a base URL and expected endpoints
const productApi = createApi({
  reducerPath: "product",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mks-frontend-challenge-api.herokuapp.com/api/v1",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Products, void>({
      query: () => "/products?page=1&rows=8&sortBy=id&orderBy=ASC",
    }),
  }),
});

export default productApi;
