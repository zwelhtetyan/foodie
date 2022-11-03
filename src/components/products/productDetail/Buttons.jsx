import React, { useState } from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import { FiHeart } from 'react-icons/fi';
import { cartIconBtnProp } from '../../../utilities/cartIconBtnProp';
import { hoverBtnProp } from '../../../utilities/hoverBtnProp';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import useProductConflix from '../../../hooks/useProductConflix';

const Buttons = ({ newItem, isWishlist }) => {
   const [quantity, setQuantity] = useState(1);
   const [totalPrice, setTotalPrice] = useState(newItem.price);

   const addQuantity = () => setQuantity((prev) => prev + 1);

   const reomveQuantity = () => setQuantity((prev) => prev - 1);

   useEffect(() => {
      setTotalPrice(newItem.price * quantity);
   }, [quantity, newItem.price]);

   const transformedItem = { ...newItem, quantity: quantity, totalPrice };

   const { addToCartHandler, addToWishListHandler } =
      useProductConflix(transformedItem);

   return (
      <Flex width={'100%'} justifyContent='space-between'>
         {/* quantity buttons */}
         <Box>
            <Button
               sx={cartIconBtnProp}
               _hover={quantity !== 1 && hoverBtnProp}
               onClick={reomveQuantity}
               disabled={quantity === 1}
            >
               <AiOutlineMinus size={20} />
            </Button>

            <Button sx={cartIconBtnProp} borderLeft='none !important'>
               {quantity}
            </Button>

            <Button
               sx={cartIconBtnProp}
               _hover={hoverBtnProp}
               borderLeft='none !important'
               onClick={addQuantity}
            >
               <AiOutlinePlus size={20} />
            </Button>
         </Box>

         {/* add to cart */}
         <Box mx={3} flex={1} onClick={addToCartHandler}>
            <Button
               sx={cartIconBtnProp}
               width='100%'
               _hover={hoverBtnProp}
               fontWeight={'sm'}
               fontSize={'md'}
               color='black'
            >
               Add to cart
            </Button>
         </Box>

         {/* wishlist icon */}
         <Box onClick={addToWishListHandler}>
            <Button sx={cartIconBtnProp} _hover={hoverBtnProp}>
               {isWishlist(newItem.id) ? (
                  <FaHeart size={20} />
               ) : (
                  <FiHeart size={20} />
               )}
            </Button>
         </Box>
      </Flex>
   );
};

export default Buttons;
