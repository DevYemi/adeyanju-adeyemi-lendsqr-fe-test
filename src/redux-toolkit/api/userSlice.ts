import { apiSlice } from "./apiSlice";
import { userRequestResultTypes } from "./types";


const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => `/users`,
            transformResponse: (result, meta, arg) => result as userRequestResultTypes[]
        }),
        getUserById: builder.query({
            query: (userId: string | undefined) => `/users/${userId}`,
            transformResponse: (result, meta, arg) => result as userRequestResultTypes
        })
    })
})


export const {
    useGetUsersQuery,
    useGetUserByIdQuery
} = extendedApiSlice