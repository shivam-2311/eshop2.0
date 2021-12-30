import { createSlice } from '@reduxjs/toolkit'


const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload
        },
        loginFaliure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        logout: (state) => {
            state.currentUser = null
        },
        registerStart: (state) => {
            state.isFetching = true
        },
        registerSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload
        },
        registerFaliure: (state) => {
            state.isFetching = false;
            state.error = true;
        }
    }

});

export const { loginStart, loginSuccess, loginFaliure, logout, registerStart, registerSuccess, registerFaliure } = userSlice.actions;
export default userSlice.reducer