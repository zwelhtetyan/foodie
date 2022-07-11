import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    change: false,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartItems(state, action) {
            state.cartItems = action.payload || [];
        },

        addToCart(state, action) {
            const newItem = action.payload;

            const existingItem = state.cartItems.find(
                (item) => item.id === newItem.id
            );

            if (existingItem) {
                state.cartItems = state.cartItems.map((item) =>
                    item.id === newItem.id
                        ? {
                              ...item,
                              quantity: item.quantity + newItem.quantity,
                              totalPrice:
                                  item.price *
                                  (item.quantity + newItem.quantity),
                          }
                        : item
                );
            } else {
                state.cartItems = [...state.cartItems, newItem];
            }
            state.change = true;
        },

        removeFromCart(state, action) {
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload
            );
            state.change = true;
        },

        addQuantity(state, action) {
            state.cartItems = state.cartItems.map((item) =>
                item.id === action.payload
                    ? {
                          ...item,
                          quantity: item.quantity + 1,
                          totalPrice: item.price * (item.quantity + 1),
                      }
                    : item
            );
            state.change = true;
        },

        removeQuantity(state, action) {
            const itemArr = state.cartItems.map((item) =>
                item.id === action.payload
                    ? {
                          ...item,
                          quantity: item.quantity - 1,
                          totalPrice: item.price * (item.quantity - 1),
                      }
                    : item
            );

            state.cartItems = itemArr.filter((item) => item.quantity > 0);
            state.change = true;
        },

        clearCart(state) {
            state.cartItems = [];
            state.change = true;
        },
    },
});

export const cartSliceAction = cartSlice.actions;

export default cartSlice.reducer;
