import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalOverlay,
    Text,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { cartSliceAction } from '../../store/cart/cart-slice';
import { modalSliceAction } from '../../store/modal-slice';
import { wishListSliceAction } from '../../store/wishlist/wishlist-slice';
import { FcGoogle } from 'react-icons/fc';
import { auth, provider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';
import { authSliceAction } from '../../store/auth';

const ModalElement = () => {
    const dispatch = useDispatch();
    const { isOpen, content, newItem, addingTo, isAuthAlert } = useSelector(
        (state) => state.modal.addingState
    );

    //close modal
    const onClose = () => dispatch(modalSliceAction.onClose());

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((response) => {
                console.log('sign in done');
                onClose();
                dispatch(
                    authSliceAction.setAuth({
                        isAuthenticated: true,
                        userName: response.user.displayName,
                        userPhoto: response.user.photoURL,
                        userId: response.user.uid,
                    })
                );
                localStorage.setItem(
                    'user',
                    JSON.stringify({
                        isAuthenticated: true,
                        userName: response.user.displayName,
                        userPhoto: response.user.photoURL,
                        userId: response.user.uid,
                    })
                );
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    const add = () => {
        if (addingTo === 'cart') {
            dispatch(wishListSliceAction.removeFromWishlist(newItem.id));
            dispatch(cartSliceAction.addToCart(newItem));
        } else {
            dispatch(wishListSliceAction.addToWishlist(newItem));
            dispatch(cartSliceAction.removeFromCart(newItem.id));
        }
        onClose();
    };

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                isCentered
                motionPreset='none'
            >
                <ModalOverlay />
                <ModalContent width='400px' maxWidth='95%'>
                    <ModalCloseButton />
                    <ModalBody mt={'2.5rem'}>
                        <Text fontSize={'lg'}>{content}</Text>
                        {isAuthAlert && (
                            <Button
                                display='flex'
                                alignItems='center'
                                m='auto'
                                mt='5'
                                onClick={signInWithGoogle}
                            >
                                <FcGoogle size={20} />{' '}
                                <Text ms={2} fontWeight='normal'>
                                    Sign in with google
                                </Text>
                            </Button>
                        )}
                    </ModalBody>

                    <ModalFooter>
                        <Button ariant='ghost' mr={3} onClick={onClose}>
                            Close
                        </Button>

                        {!isAuthAlert && (
                            <Button
                                colorScheme='green'
                                variant='solid'
                                onClick={add}
                            >
                                Okay
                            </Button>
                        )}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ModalElement;
