import { Avatar } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import showAuthAlert from '../../utilities/showAuthAlert';

const UserAvatar = () => {
    const { isAuthenticated, userPhoto } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleClickAvatar = () => {
        if (!isAuthenticated) {
            showAuthAlert(dispatch);
            return;
        } else {
            navigate('/userAccount');
        }
    };

    return (
        <Avatar
            // name={'zwel htet yan'}
            src={userPhoto}
            width={'40px'}
            height='40px'
            ms={['1.5rem', '2rem']}
            cursor='pointer'
            userSelect='none'
            onClick={handleClickAvatar}
        />
    );
};

export default UserAvatar;
