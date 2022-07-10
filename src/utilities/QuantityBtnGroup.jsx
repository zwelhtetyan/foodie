import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { cartSliceAction } from '../store/cart-slice';
import { cartIconBtnProp } from './cartIconBtnProp';
import { hoverBtnProp } from './hoverBtnProp';

const QuantityBtnGroup = ({ id, quantity }) => {
    const dispatch = useDispatch();

    const addQuantityHandler = (e) => {
        e.stopPropagation();
        dispatch(cartSliceAction.addQuantity(id));
    };

    const removeQuantityHandler = (e) => {
        e.stopPropagation();
        dispatch(cartSliceAction.removeQuantity(id));
    };

    return (
        <Box>
            <Button
                sx={cartIconBtnProp}
                _hover={hoverBtnProp}
                onClick={removeQuantityHandler}
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
                onClick={addQuantityHandler}
            >
                <AiOutlinePlus size={20} />
            </Button>
        </Box>
    );
};

export default QuantityBtnGroup;
