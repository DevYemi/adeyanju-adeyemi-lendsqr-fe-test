import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface DashboardAsideState {
    isOpen: boolean
}

const initialState: DashboardAsideState = {
    isOpen: false
}

const sideNavVisibility = createSlice({
    name: "sideNavVisibility",
    initialState,
    reducers: {
        toggleSideNavVisibility(state, { payload }: PayloadAction<boolean>) {
            state.isOpen = payload;
        },
    },
})



export const { toggleSideNavVisibility } = sideNavVisibility.actions;
export default sideNavVisibility;