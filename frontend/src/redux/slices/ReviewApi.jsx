import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BACKEND_URL from '../../BaseUrl.jsx'; 

export const reviewApi = createApi({
  reducerPath: "reviewApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BACKEND_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState()?.user?.profile?.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Content-type", "application/json");
      return headers;
    },
    credentials: "include",
  }),
  endpoints: (builder) => ({
    createReview: builder.mutation({
      query: (data) => ({
        url: "/create-review",
        method: "POST",
        body: data,
      }),
    }),
    getReviews: builder.query({
      query: () => ({
        url: "/get-all-reviews",
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateReviewMutation, useGetReviewsQuery } = reviewApi;
