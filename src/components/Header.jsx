import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import logo from '../assets/logo/logo.png';
import { FaShoppingCart } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';

const Header = () => {
    return (
        <Flex
            h={'65px'}
            bg={'blackAlpha.100'}
            px={['1rem', '3rem', '5rem']}
            align={'center'}
            justifyContent={'space-between'}
        >
            <Flex alignItems={'flex-end'}>
                <Image src={logo} alt='logo' w={45} h={45} />
                <Text
                    fontSize={'2xl'}
                    letterSpacing={2}
                    ms={'1'}
                    fontFamily={'monospace'}
                    fontWeight='extrabold'
                >
                    FOODIE
                </Text>
            </Flex>
            <Flex alignItems='center'>
                <Box ms={['1.5rem', '2rem']}>
                    <BsSearch size={20} cursor={'pointer'} />
                </Box>
                <Box ms={['1.5rem', '2rem']}>
                    <FaShoppingCart size={20} cursor={'pointer'} />
                </Box>
                <Box
                    ms={['1.5rem', '2rem']}
                    w='35px'
                    h='35px'
                    display={'flex'}
                    alignItems='center'
                    justifyContent={'center'}
                    border={'1px solid black'}
                    borderRadius='50%'
                >
                    <FaUser size={20} cursor={'pointer'} />
                </Box>
            </Flex>
        </Flex>
    );
};

export default Header;
