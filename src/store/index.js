import { configureStore } from '@reduxjs/toolkit';
import productUIReducer from './products/products-ui';
import searchProductReducer from './products/search-product';
import cartReducer from './cart/cart-slice';
import wishListReducer from './wishlist/wishlist-slice';
import modalSliceReducer from './modal-slice';
import cartUIReducer from './cart/cart-ui';
import wishlistUIReducer from './wishlist/wishlist-ui';

const store = configureStore({
    reducer: {
        productUI: productUIReducer,
        searchProduct: searchProductReducer,
        cart: cartReducer,
        wishList: wishListReducer,
        modal: modalSliceReducer,
        cartUI: cartUIReducer,
        wishlistUI: wishlistUIReducer,
    },
});

export default store;
