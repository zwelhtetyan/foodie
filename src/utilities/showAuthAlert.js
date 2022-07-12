import { modalSliceAction } from '../store/modal-slice';

const showAuthAlert = (dispatch) => {
    dispatch(
        modalSliceAction.conflixItem({
            content: 'Sing in your account for shopping.',
            isAuthAlert: true,
        })
    );
};

export default showAuthAlert;
