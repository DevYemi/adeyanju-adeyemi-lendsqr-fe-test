import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const domain = 'https://6270020422c706a0ae70b72c.mockapi.io';
const basePath = "lendsqr/api/v1/";


// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: `${domain}/${basePath}` }),
    refetchOnReconnect: true,
    endpoints: () => ({}),

})

