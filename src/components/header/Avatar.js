import { Avatar } from '@chakra-ui/react';
import React from 'react';

const UserAvatar = () => {
    return (
        <Avatar
            name={'zwel htet yan'}
            width={'40px'}
            height='40px'
            ms={['1.5rem', '2rem']}
            cursor='pointer'
            userSelect='none'
        />
    );
};

export default UserAvatar;
