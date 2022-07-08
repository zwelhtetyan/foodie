import { Box, Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { FiHeart } from 'react-icons/fi';
import { cartIconBtnProp } from '../../../utilities/cartIconBtnProp';
import { hoverBtnProp } from '../../../utilities/hoverBtnProp';

const Buttons = ({ quantity }) => {
    return (
        <Flex width={'100%'} justifyContent='space-between'>
            <Box>
                <Button
                    sx={cartIconBtnProp}
                    _hover={quantity > 1 && hoverBtnProp}
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
                >
                    <AiOutlinePlus size={20} />
                </Button>
            </Box>
            <Box mx={3} flex={1}>
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
