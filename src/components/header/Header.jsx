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
import { useNavigate } from 'react-router-dom';
import NotiBadge from '../../utilities/NotiBadge';
import useCloseSearch from '../../hooks/useCloseSearch';
import { useDispatch, useSelector } from 'react-redux';
import showAuthAlert from '../../utilities/showAuthAlert';

const Header = () => {
    const { showMobileSearchBar, showDesktopSearchBar, showSearchBarHandler } =
        useAppContext();
    const { cartItems } = useSelector((state) => state.cart);
    const { wishlist } = useSelector((state) => state.wishList);
    const { isAuthenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleClose = useCloseSearch();

    const navigate = useNavigate();

    const totalAmount = cartItems.reduce(
        (amount, item) => amount + item.quantity,
        0
    );

    const totalWishlist = wishlist.length;

    const handleClickWishlistIcon = () => {
        if (!isAuthenticated) {
            showAuthAlert(dispatch);
            return;
        }
        handleClose();
        navigate('/wishlist');
    };

    const handleClickCartIcon = () => {
        if (!isAuthenticated) {
            showAuthAlert(dispatch);
            return;
        }
        handleClose();
        navigate('/cart');
    };

    console.log('header render');

    return (
        <>
            <MobileSearchBar showMobileSearchBar={showMobileSearchBar} />
            <Flex
                h={'65px'}
                width='100%'
                bg={'white'}
                px={['.5rem', '2rem', '5rem']}
                alignItems={'center'}
                justifyContent={'center'}
                pos={'fixed'}
                top={0}
                left={0}
                zIndex='99'
                boxShadow={'lg'}
            >
                <Flex
                    justifyContent={'space-between'}
                    width='100%'
                    maxWidth={'1200px'}
                >
                    <Flex
                        alignItems={'flex-end'}
                        cursor='pointer'
                        userSelect={'none'}
                        onClick={() => {
                            handleClose();
                            navigate('/');
                        }}
                    >
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

                    {/* navbar right */}
                    <Flex alignItems='center'>
                        <DesktopSearchBar
                            showDesktopSearchBar={showDesktopSearchBar}
                        />
                        <Box
                            ms={['1.5rem', '2rem']}
                            onClick={showSearchBarHandler}
                        >
                            <BsSearch size={20} cursor={'pointer'} />
                        </Box>

                        {/* <Link to='/wishlist' onClick={handleClose}> */}
                        <Box
                            ms={['1.5rem', '2rem']}
                            pos='relative'
                            onClick={handleClickWishlistIcon}
                        >
                            <FiHeart size={22} cursor={'pointer'} />
                            <NotiBadge
                                val={totalWishlist > 0 ? totalWishlist : ''}
                                className='whishlistNotiBadge'
                            />
                        </Box>
                        {/* </Link> */}

                        {/* <Link to='/cart' onClick={handleClose}> */}
                        <Box
                            ms={['1.5rem', '2rem']}
                            pos='relative'
                            onClick={handleClickCartIcon}
                        >
                            <BsCartDash size={22} cursor={'pointer'} />
                            <NotiBadge
                                val={totalAmount > 0 ? totalAmount : ''}
                                className='cartNotiBadge'
                            />
                        </Box>
                        {/* </Link> */}

                        {/* avatar */}
                        <UserAvatar />
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};

export default Header;
