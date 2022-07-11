import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productUISliceAction } from '../../store/products/products-ui';
import { categories } from './categroy-list';

const Category = () => {
    const [categoryList, setCategoryList] = useState(categories);
    const dispatch = useDispatch();
    const { ctegType } = useSelector((state) => state.productUI);

    const properties = {
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textTransform: 'uppercase',
        userSelect: 'none',
    };

    const activeState = {
        bg: 'black',
        color: 'white',
    };

    //handling active state
    const cateGoryClickHandler = (id, content) => {
        setCategoryList((catefories) =>
            catefories.map((item) => {
                if (item.id === id) {
                    return { ...item, active: true };
                }
                return { ...item, active: false };
            })
        );

        dispatch(productUISliceAction.setCtegType(content));
    };

    const categroy = categoryList.map((item) => (
        <Box
            width={
                item.content === 'All'
                    ? { base: '100%', md: '20%' }
                    : { base: '50%', md: '20%' }
            }
            height={{ base: '60px', sm: '100px' }}
            sx={
                item.content.toLowerCase() === ctegType.toLowerCase() &&
                activeState
            }
            {...properties}
            key={item.id}
            _hover={{
                bg: {
                    base:
                        item.content.toLowerCase() !== ctegType.toLowerCase() &&
                        'transparent',
                    sm:
                        item.content.toLowerCase() !== ctegType.toLowerCase() &&
                        'gray.200',
                },
            }}
            onClick={cateGoryClickHandler.bind(null, item.id, item.content)}
        >
            <Text>{item.content}</Text>
        </Box>
    ));

    return (
        <Flex
            justifyContent={'space-around'}
            alignItems='center'
            flexWrap='wrap'
            my={5}
            bg={'gray.100'}
        >
            {categroy}
        </Flex>
    );
};

export default Category;
