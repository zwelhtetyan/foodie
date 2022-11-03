import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authSliceAction } from '../store/auth';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import BackBtn from '../utilities/BackBtn';
import { cartSliceAction } from '../store/cart/cart-slice';
import { wishListSliceAction } from '../store/wishlist/wishlist-slice';

const UserAccount = () => {
   const { userName } = useSelector((state) => state.auth);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleClickSignout = () => {
      signOut(auth)
         .then(() => {
            dispatch(
               authSliceAction.setAuth({
                  isAuthenticated: false,
                  userName: '',
                  userPhoto: '',
                  userId: '',
               })
            );

            dispatch(cartSliceAction.setCartItems([]));
            dispatch(wishListSliceAction.setWishlist([]));

            navigate('/');
            localStorage.removeItem('user');
            console.log('log out');
         })
         .catch((error) => {
            console.log(error);
         });
   };

   return (
      <Box px={5} maxWidth='1200px' m='auto' mt='65px'>
         <Box
            marginTop={'6rem !important'}
            mb='2rem'
            px={['0', '1rem', '3rem']}
         >
            <BackBtn onBack={() => navigate('/')} />
            <Text fontSize={'lg'} textAlign='center' fontWeight='bold' mt={5}>
               Welcome, {userName}
            </Text>

            <Button
               display='block'
               m='auto'
               mt={5}
               fontWeight='normal'
               onClick={handleClickSignout}
            >
               Sign out
            </Button>
         </Box>
      </Box>
   );
};

export default UserAccount;
