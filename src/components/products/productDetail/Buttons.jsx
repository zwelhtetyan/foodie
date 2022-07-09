import React, { useState } from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import { FiHeart } from 'react-icons/fi';
import { cartIconBtnProp } from '../../../utilities/cartIconBtnProp';
import { hoverBtnProp } from '../../../utilities/hoverBtnProp';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { cartSliceAction } from '../../../store/cart-slice';

const Buttons = ({ newItem }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    const addQuantity = () => setQuantity((prev) => prev + 1);

    const reomveQuantity = () => setQuantity((prev) => prev - 1);

    const transformedItem = { ...newItem, quantity: quantity };

    const addToCartHandler = () => {
        dispatch(cartSliceAction.addToCart(transformedItem));
    };

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
                    // isLoading={true}
                    // loadingText={'Loading'}
                    // spinnerPlacement='end'
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
            <Box>
                <Button
                    sx={cartIconBtnProp}
                    _hover={hoverBtnProp}
                    // isLoading={true}
                >
                    <FiHeart size={20} />
                </Button>
            </Box>
        </Flex>
    );
};

export default Buttons;
