import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const wishListSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {},
});

export const wishListSliceAction = wishListSlice.actions;

export default wishListSlice.reducer;
