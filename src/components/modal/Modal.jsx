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
import { cartSliceAction } from '../../store/cart-slice';
import { modalSliceAction } from '../../store/modal-slice';
import { wishListSliceAction } from '../../store/wishlist-slice';

const ModalElement = () => {
    const dispatch = useDispatch();
    const { isOpen, content, newItem, addingTo } = useSelector(
        (state) => state.modal.addingState
    );

    const onClose = () => dispatch(modalSliceAction.onClose());

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
                    </ModalBody>

                    <ModalFooter>
                        <Button ariant='ghost' mr={3} onClick={onClose}>
                            Close
                        </Button>

                        <Button
                            colorScheme='green'
                            variant='solid'
                            onClick={add}
                        >
                            Okay
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ModalElement;
