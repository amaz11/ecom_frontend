import { LoginRequest, LoginResponse } from "../../utils/types/types";
import { apiSlice } from "../features/apiSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginResponse,LoginRequest>({
      query: (credantial) => ({
        url: "/auth/sign-in",
        method: "POST",
        body: { ...credantial },
      }),
    }),
  }),
});


export const  {useLoginMutation} = authApi


