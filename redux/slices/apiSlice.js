import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Creamos la API base con fetchBaseQuery
export const api = createApi({
  reducerPath: "api", // nombre del slice generado
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3002/api" }),
  endpoints: (builder) => ({
    // Endpoint para login tradicional
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }),
    }),
    // Endpoint para login con Facebook
    loginWithFacebook: builder.mutation({
      query: (facebookToken) => ({
        url: "/login/facebook",
        method: "POST",
        body: { token: facebookToken },
      }),
    }),
  }),
});

// Exportamos hooks generados automáticamente
export const { useLoginMutation, useLoginWithFacebookMutation } = api;
