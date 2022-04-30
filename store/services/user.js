import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.MIX_API_URL}/api/` }),
    endpoints: (builder) => ({
        getWallet: builder.query({
            query: () => {
                return {
                    url: "wallet",
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                        Accept: "application/json",
                    },
                    method: "GET",
                };
            },
        }),
        login: builder.mutation({
            query: (formData) => ({
                url: "login",
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            }),
        }),
        register: builder.mutation({
            query: (formData) => ({
                url: "register",
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: "logout",
                method: "POST",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    Accept: "application/json",
                },
            }),
        }),
        forgetPassowrd: builder.mutation({
            query: (formData) => ({
                url: "forget-password",
                method: "POST",
                headers: {
                    Accept: "application/json",
                },
                body: formData,
            }),
        }),
        resetPassword: builder.mutation({
            query: (formData) => ({
                url: "update-password",
                method: "POST",
                headers: {
                    Accept: "application/json",
                },
                body: formData,
            }),
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetWalletQuery,
    useLoginMutation,
    useLogoutMutation,
    useRegisterMutation,
    useForgetPassowrdMutation,
    useResetPasswordMutation,
} = userApi;
