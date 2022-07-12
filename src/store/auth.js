import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated:
        JSON.parse(localStorage.getItem('user'))?.isAuthenticated || false,
    userName: JSON.parse(localStorage.getItem('user'))?.userName || '',
    userPhoto: JSON.parse(localStorage.getItem('user'))?.userPhoto || '',
    userId: JSON.parse(localStorage.getItem('user'))?.userId || '',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth(state, action) {
            state.isAuthenticated = action.payload.isAuthenticated;
            state.userName = action.payload.userName;
            state.userPhoto = action.payload.userPhoto;
            state.userId = action.payload.userId;
        },

        onLogout(state) {
            state = initialState;
        },
    },
});

export const authSliceAction = authSlice.actions;

export default authSlice.reducer;
