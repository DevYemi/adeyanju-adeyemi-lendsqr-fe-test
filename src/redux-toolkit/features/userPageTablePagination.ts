import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface UserPageTablePagination {
    paginationUserListPerPage: number,
    paginationInterval: number,
    paginationCurrentPage: number
}

const initialState: UserPageTablePagination = {
    paginationUserListPerPage: 5,
    paginationInterval: 5,
    paginationCurrentPage: 1
}

const userPageTablePagination = createSlice({
    name: "userPageTablePagination",
    initialState,
    reducers: {
        updateUserListPerPage(state, { payload }: PayloadAction<number>) {
            state.paginationUserListPerPage = payload;
        },
        updateCurrentPage(state, { payload }: PayloadAction<number>) {
            state.paginationCurrentPage = payload;
        },
    },
})



export const { updateUserListPerPage, updateCurrentPage } = userPageTablePagination.actions;
export default userPageTablePagination;