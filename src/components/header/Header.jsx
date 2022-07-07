import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import logo from '../../assets/logo/logo.png';
import { BsCartDash } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import { FiHeart } from 'react-icons/fi';
import UserAvatar from './Avatar';
import DesktopSearchBar from './DesktopSearchBar';
import MobileSearchBar from './MobileSearchBar';
import { useAppContext } from '../../context/AppCtx';

const Header = () => {
    const { showSearchBarHandler } = useAppContext();

    return (
        <>
            <MobileSearchBar />
            <Flex
                h={'65px'}
                width='100%'
                bg={'white'}
                px={['.5rem', '2rem', '5rem']}
                align={'center'}
                justifyContent={'space-between'}
                pos={'fixed'}
                top={0}
                left={0}
                zIndex='99'
                boxShadow={'lg'}
            >
                <Flex alignItems={'flex-end'}>
                    <Image src={logo} alt='logo' w={42} h={42} />
                    <Text
                        fontSize={{ base: '19px', sm: '2xl' }}
                        letterSpacing={1}
                        fontFamily={'monospace'}
                        fontWeight='extrabold'
                        className='brand_name'
                    >
                        SHOPIFY
                    </Text>
                </Flex>
                <Flex alignItems='center'>
                    <DesktopSearchBar />
                    <Box ms={['1.5rem', '2rem']} onClick={showSearchBarHandler}>
                        <BsSearch size={20} cursor={'pointer'} />
                    </Box>
                    <Box ms={['1.5rem', '2rem']}>
                        <FiHeart size={22} cursor={'pointer'} />
                    </Box>
                    <Box ms={['1.5rem', '2rem']}>
                        <BsCartDash size={22} cursor={'pointer'} />
                    </Box>
                    <UserAvatar />
                </Flex>
            </Flex>
        </>
    );
};

export default Header;
