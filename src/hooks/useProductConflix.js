import { useDispatch, useSelector } from 'react-redux';
import { cartSliceAction } from '../store/cart/cart-slice';
import { modalSliceAction } from '../store/modal-slice';
import { wishListSliceAction } from '../store/wishlist/wishlist-slice';
import showAuthAlert from '../utilities/showAuthAlert';

const useProductConflix = (newItem) => {
   const { isAuthenticated } = useSelector((state) => state.auth);
   const { cartItems } = useSelector((state) => state.cart);
   const { wishlist } = useSelector((state) => state.wishList);
   const dispatch = useDispatch();

   const alreadyInCart = (id) => cartItems.find((item) => item.id === id);

   const alreadyInWishlist = (id) => wishlist.find((item) => item.id === id);

   const content = (from, to) => {
      return `Adding this product to your ${to} will remove it from ${from}.`;
   };

   const addToWishListHandler = () => {
      if (!isAuthenticated) {
         showAuthAlert(dispatch);
         return;
      }

      if (alreadyInCart(newItem.id)) {
         // console.log('alreay exist in cart , so we will remove it');
         dispatch(
            modalSliceAction.conflixItem({
               content: content('cart', 'wishlist'),
               newItem,
               addingTo: 'wishlist',
            })
         );
      } else {
         dispatch(wishListSliceAction.addToWishlist(newItem));
      }
   };

   const addToCartHandler = () => {
      if (!isAuthenticated) {
         showAuthAlert(dispatch);
         return;
      }

      if (alreadyInWishlist(newItem.id)) {
         // console.log('alreay exist in wishlist, so  we will remove it');
         dispatch(
            modalSliceAction.conflixItem({
               content: content('wishlist', 'cart'),
               newItem,
               addingTo: 'cart',
            })
         );
      } else {
         dispatch(cartSliceAction.addToCart(newItem));
      }
   };

   return { addToCartHandler, addToWishListHandler };
};

export default useProductConflix;
