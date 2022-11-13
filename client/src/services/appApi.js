import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const appApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3500",
  }),

  endpoints: (builder) => ({
    //Signup user
    signupUser: builder.mutation({
      query: (user) => ({
        url: "/user/signup",
        method: "POST",
        body: user,
      }),
    }),

    //Login user
    loginUser: builder.mutation({
      query: (user) => ({
        url: "/user/login",
        method: "POST",
        body: user,
      }),
    }),

    //logout user
    logoutUser: builder.mutation({
      query: (payload) => ({
        url: "/user/logout",
        method: "DELETE",
        body: payload,
      }),
    }),
  }),
});

export const {
  useSignupUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
} = appApi;

export default appApi;
