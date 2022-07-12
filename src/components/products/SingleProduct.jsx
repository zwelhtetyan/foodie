import React from 'react';
import { Badge, Button, Flex, Image, Text, VStack } from '@chakra-ui/react';
import { FiHeart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { cartIconBtnProp } from '../../utilities/cartIconBtnProp';
import { hoverBtnProp } from '../../utilities/hoverBtnProp';
import { titleShorter } from '../../utilities/titleShorter';
import { FaHeart } from 'react-icons/fa';
import useProductConflix from '../../hooks/useProductConflix';

const SingleProduct = ({
    id,
    image,
    title,
    price,
    rating,
    onClose,
    quantity,
    wishlists,
}) => {
    const isWishlist = (id) => wishlists.some((item) => item.id === id);

    const newItem = {
        id,
        title,
        image,
        price,
        quantity,
        totalPrice: price,
    };

    const { addToCartHandler, addToWishListHandler } =
        useProductConflix(newItem);

    return (
        <VStack
            width={[
                'calc(100% / 2 - 10px)',
                'calc(100% / 3 - 10px)',
                'calc(100% / 4 - 20px)',
                'calc(100% / 5 - 20px)',
            ]}
            m={['5px', '5px', '10px', '10px']}
            p={['2', '3']}
            boxShadow={'lg'}
        >
            <Link to={`products/${id}`} onClick={onClose}>
                <Image
                    src={image}
                    alt='product_img'
                    w={['100px', '120px']}
                    height={['100px', '150px']}
                    cursor='pointer'
                    _hover={{ transform: 'scale(0.91)' }}
                    transition='.3s'
                />
            </Link>
            <Text fontSize={'md'} fontWeight='bold' textAlign={'center'}>
                {titleShorter(title, 2)}
            </Text>

            <Text sx={{ marginTop: '0 !important' }}>
                <Text as={'span'} fontWeight='semibold'>
                    Price
                </Text>{' '}
                : ${price.toFixed(2)}
            </Text>
            <Badge
                bg={'black'}
                color='white'
                rounded={'sm'}
                textTransform={'capitalize'}
                p={1}
                px={2}
            >
                Rating : {rating.rate}
            </Badge>
            <Flex alignItems='center' justifyContent={'space-between'} w='100%'>
                <Button
                    sx={cartIconBtnProp}
                    _hover={{ md: hoverBtnProp }}
                    onClick={addToWishListHandler}
                >
                    {isWishlist(id) ? (
                        <FaHeart size={20} />
                    ) : (
                        <FiHeart size={20} />
                    )}
                </Button>
                <Button
                    sx={cartIconBtnProp}
                    _hover={{md: hoverBtnProp}}
                    width='100%'
                    borderLeft={'none !important'}
                    fontWeight={'sm'}
                    fontSize={'md'}
                    onClick={addToCartHandler}
                >
                    Add to cart
                </Button>
            </Flex>
        </VStack>
    );
};

export default SingleProduct;
