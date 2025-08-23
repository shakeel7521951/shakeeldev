// src/redux/slices/userApi.jsx
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BACKEND_URL from '../../BaseUrl.jsx'; 

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BACKEND_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState()?.user?.profile?.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
    credentials: "include",
  }),
  endpoints: (builder) => ({
    userRegistration: builder.mutation({
      query: (userData) => ({
        url: "/sign-up",
        method: "POST",
        body: userData,
      }),
    }),
    login: builder.mutation({
      query: (userData) => ({
        url: "/login",
        method: "POST",
        body: userData,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),
    updatePassword: builder.mutation({
      query: (userData) => ({
        url: "/update-password",
        method: "PUT",
        body: userData,
      }),
    }),
    updateProfile: builder.mutation({
      query: (formData) => ({
        url: "/update-profile",
        method: "PUT",
        body: formData,
      }),
    }),
    profile: builder.query({
      query: () => ({
        url: "/my-profile",
        method: "GET",
      }),
    }),
    allUsers: builder.query({
      query: () => ({
        url: "/all-users",
        method: "GET",
      }),
    }),
    updateUserRole: builder.mutation({
      query: ({ userId, role }) => ({
        url: "/update-user-role",
        method: "PUT",
        body: { userId, role },
      }),
    }),
    verifyUser: builder.mutation({
      query: ({ otp, email }) => ({
        url: "/verify-user",
        method: "POST",
        body: { otp, email },
      }),
    }),
    forgotpasswordotp: builder.mutation({
      query: (email) => ({
        url: "/forgot-password-otp",
        method: "POST",
        body: { email },
      }),
    }),
    verifyOTP: builder.mutation({
      query: ({ email, otp }) => ({
        url: "/verify-otp",
        method: "POST",
        body: { email, otp },
      }),
    }),
    resetPassword: builder.mutation({
      query: ({ email, password }) => ({
        url: "/reset-password",
        method: "PUT",
        body: { email, password },
      }),
    }),
  }),
});

export const {
  useUserRegistrationMutation,
  useVerifyUserMutation,
  useLoginMutation,
  useLogoutMutation,
  useProfileQuery,
  useUpdatePasswordMutation,
  useUpdateProfileMutation,
  useAllUsersQuery,
  useUpdateUserRoleMutation,
  useForgotpasswordotpMutation,
  useVerifyOTPMutation,
  useResetPasswordMutation,
} = userApi;
