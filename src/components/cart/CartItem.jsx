import { Flex, VStack, Image, Text, Box, HStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { cartSliceAction } from '../../store/cart-slice';
import QuantityBtnGroup from '../../utilities/QuantityBtnGroup';
import { titleShorter } from '../../utilities/titleShorter';

const CartItem = ({ id, title, price, image, totalPrice, quantity }) => {
    const [hover, setHover] = useState(false);
    const dispatch = useDispatch();

    const enter = () => setHover(true);

    const leave = () => setHover(false);

    const removeFromCartHandler = () =>
        dispatch(cartSliceAction.removeFromCart(id));

    return (
        <Box
            pos='relative'
            px={3}
            py={4}
            rounded='sm'
            borderBottom='1px'
            borderColor='gray.200'
        >
            <HStack justify='space-between' mt={4}>
                <Text width='70%' me={'2rem'} fontWeight='600'>
                    {titleShorter(title, 2)}
                </Text>
                <VStack width='30%' pe='2rem'>
                    <Text>${totalPrice.toFixed(2)}</Text>
                    <Text mt='-3px !important' fontSize='13px'>
                        (${price.toFixed(2)})
                    </Text>
                </VStack>
            </HStack>

            <Flex justify='space-between' align='center'>
                <Box
                    pos='absolute'
                    top='1px'
                    right='2px'
                    onMouseEnter={enter}
                    onMouseLeave={leave}
                    onClick={removeFromCartHandler}
                >
                    <IoCloseOutline
                        size={30}
                        cursor='pointer'
                        color={hover ? 'black' : '#a3a2a2'}
                    />
                </Box>

                <Image src={image} width={70} height={70} />

                <VStack>
                    <QuantityBtnGroup id={id} quantity={quantity} />
                </VStack>
            </Flex>
        </Box>
    );
};

export default CartItem;
