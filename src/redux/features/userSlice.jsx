import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    isLogin: false,
    user: null
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        handleLogin: (state, action) => {
            state.user = action.payload
        },
        handleLogout: (state, action) => {
            state.user = null
        }

    }
})
export const { handleLogin, handleLogout } = userSlice.actions;
export default userSlice.reducer