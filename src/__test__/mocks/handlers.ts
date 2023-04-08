import { rest } from 'msw'
import { usersListMockedValues } from './mockerValues'
import { endpointBaseURL } from '@/redux-toolkit/api/apiSlice'



export const handlers = [
    // Users Deatils
    rest.get(`${endpointBaseURL}users`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(usersListMockedValues))
    }),
    rest.get(`${endpointBaseURL}users/1`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(usersListMockedValues[0]))
    }),

]