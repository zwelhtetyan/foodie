import { Badge, Button, Flex, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { cartIconBtnProp } from '../../utilities/cartIconBtnProp';
import { hoverBtnProp } from '../../utilities/hoverBtnProp';

const SingleProduct = ({ id, image, title, price, rating, onClose }) => {
    //cuz title is so fucking long , i can't feel it :)
    const titleShoter = (title) => title.split(' ').slice(0, 2).join(' ');

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
                />
            </Link>
            <Text fontSize={'md'} fontWeight='bold' textAlign={'center'}>
                {titleShoter(title)}
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
                    _hover={hoverBtnProp}
                    // isLoading={true}
                >
                    <FiHeart size={20} />
                </Button>
                <Button
                    // isLoading={true}
                    // loadingText={'Loading'}
                    // spinnerPlacement='end'
                    sx={cartIconBtnProp}
                    width='100%'
                    _hover={hoverBtnProp}
                    borderLeft={'none !important'}
                    fontWeight={'sm'}
                    fontSize={'md'}
                    color='black'
                >
                    Add to cart
                </Button>
            </Flex>
        </VStack>
    );
};

export default SingleProduct;
