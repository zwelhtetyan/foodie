import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    error: null,
};

const cartUISlice = createSlice({
    name: 'cartUI',
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

export const cartUISliceActions = cartUISlice.actions;

export default cartUISlice.reducer;
