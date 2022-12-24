import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSidebarOpen: false,
    isSearchFormOpen: false
}
const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen
        },
        closeSidebar: (state) => {
            state.isSidebarOpen = false
        },
        openSearchForm: (state) => {
            state.isSearchFormOpen = true
        },
        closeSearchForm: (state) => {
            state.isSearchFormOpen = false
        }
    }
})

export const { toggleSidebar, closeSidebar, openSearchForm, closeSearchForm } = sidebarSlice.actions;
export default sidebarSlice.reducer