import { cartSliceAction } from './cart/cart-slice';
import { cartUISliceActions } from './cart/cart-ui';
import { wishListSliceAction } from './wishlist/wishlist-slice';
import { wishlistUISliceActions } from './wishlist/wishlist-ui';

const getDataFromFirebase = (url) => {
    return (dispatch) => {
        const getRequest = async () => {
            console.log(`fetching ${url} data from firebase`);

            if (url === 'cart') {
                dispatch(cartUISliceActions.setLoading(true));
            } else if (url === 'wishlist') {
                dispatch(wishlistUISliceActions.setLoading(true));
            }

            const response = await fetch(
                `https://shopify-eed5f-default-rtdb.asia-southeast1.firebasedatabase.app/${url}.json`
            );

            if (!response.ok) {
                throw new Error(`fetching ${url} data failed!`);
            }

            const data = await response.json();

            if (url === 'cart') {
                dispatch(cartSliceAction.setCartItems(data));
                dispatch(cartUISliceActions.setLoading(false));
            } else if (url === 'wishlist') {
                dispatch(wishListSliceAction.setWishlist(data));
                dispatch(wishlistUISliceActions.setLoading(false));
            }
        };

        getRequest().catch((err) => {
            if (url === 'cart') {
                dispatch(cartUISliceActions.setError(err.message));
                dispatch(cartUISliceActions.setLoading(false));
            } else if (url === 'wishlist') {
                dispatch(wishlistUISliceActions.setError(err.message));
                dispatch(wishlistUISliceActions.setLoading(false));
            }
        });
    };
};

export default getDataFromFirebase;
