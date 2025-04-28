import { BaseQueryFn, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE,
});

const baseQueryExtented: BaseQueryFn = async (args, api, extraOption) => {
  const respone = await baseQuery(args, api, extraOption);
  return respone;
};
