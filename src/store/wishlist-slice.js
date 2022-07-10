import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    wishlist: [],
};

const wishListSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist(state, action) {
            const newItem = action.payload;

            const existingItem = state.wishlist.find(
                (item) => item.id === newItem.id
            );

            if (existingItem) {
                state.wishlist = state.wishlist.filter(
                    (item) => item.id !== newItem.id
                );
            } else {
                state.wishlist = [...state.wishlist, newItem];
            }
        },

        removeFromWishlist(state, action) {
            state.wishlist = state.wishlist.filter(
                (item) => item.id !== action.payload
            );
        },

        clearWishlist(state) {
            state.wishlist = [];
        },
    },
});

export const wishListSliceAction = wishListSlice.actions;

export default wishListSlice.reducer;
