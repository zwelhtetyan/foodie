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
import UserAccount from './pages/UserAccount';
import Error from './pages/Error';

let initialRender = true;

const App = () => {
    const dispatch = useDispatch();
    const { userId, isAuthenticated } = useSelector((state) => state.auth);
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
        }

        dispatch(getDataFromFirebase('cart' + userId)); // fetch cart data from firebase
        dispatch(getDataFromFirebase('wishlist' + userId)); // fetch wishlist data from firebase
    }, [dispatch, userId, isAuthenticated]);

    //send cart data to firebase
    useEffect(() => {
        if (cartChange) {
            sendRequest(cartItems, 'cart' + userId).catch((err) =>
                console.log(err)
            );
        }
    }, [cartItems, sendRequest, cartChange, userId]);

    //send wishlist data to firebase
    useEffect(() => {
        if (wishlistChange) {
            sendRequest(wishlist, 'wishlist' + userId).catch((err) =>
                console.log(err)
            );
        }
    }, [wishlist, sendRequest, wishlistChange, userId]);

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
                <Route path='userAccount' element={<UserAccount />} />
                <Route path='/*' element={<Error />} />
            </Routes>
            <ModalElement />
        </Box>
    );
};

export default App;
