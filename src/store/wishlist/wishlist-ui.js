import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    error: null,
};

const wishlistUISlice = createSlice({
    name: 'wishlistUI',
    initialState,
    reducers: {
        setLoading(state, action) {
            state.loading = action.payload;
        },

        setError(state, action) {
            state.error = action.payload;
        },
    },
});

export const wishlistUISliceActions = wishlistUISlice.actions;

export default wishlistUISlice.reducer;
