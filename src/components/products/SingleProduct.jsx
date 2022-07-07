import { Badge, Button, Flex, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { FiHeart } from 'react-icons/fi';

const SingleProduct = ({ id, image, title, price, rating }) => {
    //cuz title is so fucking long , i can't feel it :)
    const titleShoter = (title) => title.split(' ').slice(0, 2).join(' ');

    const btnHover = {
        border: '1px solid black',
        bg: 'black',
        color: 'white',
    };

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
            <Image
                src={image}
                alt='product_img'
                w={['100px', '120px']}
                height={['100px', '150px']}
            />
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
                rounded='5'
                textTransform={'capitalize'}
                p={1}
            >
                Rating : {rating.rate}
            </Badge>
            <Flex alignItems='center' justifyContent={'space-between'} w='100%'>
                <Button
                    colorScheme='dark'
                    variant='outline'
                    // _hover={{ bg: 'gray.200' }}
                    _hover={btnHover}
                    p={0}
                    border={'1px'}
                    rounded={0}
                    // isLoading={true}
                >
                    <FiHeart size={20} />
                </Button>
                <Button
                    // isLoading={true}
                    // loadingText={'Loading'}
                    // spinnerPlacement='end'
                    colorScheme='dark'
                    rounded={0}
                    width='100%'
                    _hover={btnHover}
                    variant='outline'
                    borderLeft={'none'}
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
