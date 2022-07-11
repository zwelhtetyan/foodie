import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { cartSliceAction } from '../store/cart/cart-slice';
import { wishListSliceAction } from '../store/wishlist/wishlist-slice';

const useGetDataFromFirebase = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const getRequest = useCallback(
        async (url) => {
            setLoading(true);
            console.log(`fetching ${url} data from firebase`);
            const response = await fetch(
                `https://shopify-eed5f-default-rtdb.asia-southeast1.firebasedatabase.app/${url}.json`
            );

            if (!response.ok) {
                throw new Error('sending data failed!');
            }

            const data = await response.json();
            setLoading(false);

            if (url === 'cart') {
                dispatch(cartSliceAction.setCartItems(data));
            } else if (url === 'wishlist') {
                dispatch(wishListSliceAction.setWishlist(data));
            }
        },
        [dispatch]
    );

    return { getRequest, loading };
};

export default useGetDataFromFirebase;
