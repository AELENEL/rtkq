import { api  } from "..";
const apie = api.injectEndpoints({
  endpoints: (build) => ({
    getProduct: build.query<
      PRODUCT.getProductResponce,
      PRODUCT.getProductRequest
    >({
      query: () => ({
        url: "/motionShop",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductQuery } = apie;
