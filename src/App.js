import React, { useEffect } from 'react';
import Header from './components/header/Header';
import { Box } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import fetchProductData from './store/products/products-action';
import SearchedProducts from './components/products/SearchedProducts';
import { Route, Routes } from 'react-router-dom';
import ProductDetail from './components/products/productDetail/ProductDetail';
import Home from './pages/Home';
import Cart from './components/cart/Cart';
import Wishlist from './components/wishlist/Wishlist';
import ModalElement from './components/modal/Modal';
import useSendDataToFirebase from './hooks/useSendDataToFirebase';
import getDataFromFirebase from './store/getDataFromFirebase';

let initialRender = true;

const App = () => {
    const dispatch = useDispatch();
    const { cartItems, change: cartChange } = useSelector(
        (state) => state.cart
    );
    const { wishlist, change: wishlistChange } = useSelector(
        (state) => state.wishList
    );
    const sendRequest = useSendDataToFirebase();

    useEffect(() => {
        if (initialRender) {
            initialRender = false;
            dispatch(fetchProductData()); // fetch product from fakestore api
            dispatch(getDataFromFirebase('cart')); // fetch cart data from firebase
            dispatch(getDataFromFirebase('wishlist')); // fetch wishlist data from firebase
        }
    }, [dispatch]);

    //send cart data to firebase
    useEffect(() => {
        if (cartChange) {
            sendRequest(cartItems, 'cart').catch((err) => console.log(err));
        }
    }, [cartItems, sendRequest, cartChange]);

    //send wishlist data to firebase
    useEffect(() => {
        if (wishlistChange) {
            sendRequest(wishlist, 'wishlist').catch((err) => console.log(err));
        }
    }, [wishlist, sendRequest, wishlistChange]);

    console.log('app render');

    return (
        <Box>
            <Header />
            <SearchedProducts />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='products/:_id' element={<ProductDetail />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/wishlist' element={<Wishlist />} />
            </Routes>
            <ModalElement />
        </Box>
    );
};

export default App;
