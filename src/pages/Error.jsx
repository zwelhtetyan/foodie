import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();

    return (
        <Box px={5} maxWidth='1200px' m='auto' mt='65px'>
            <Box
                marginTop={'6rem !important'}
                mb='2rem'
                px={['0', '1rem', '3rem']}
                textAlign='center'
            >
                <Text fontSize='5xl'>SORRY</Text>
                <Text>We couldn't find that page !</Text>
                <Text mt={2}>
                    Try searching or{' '}
                    <Text
                        as='span'
                        color='blue.500'
                        textDecoration='underline'
                        onClick={() => navigate('/')}
                        cursor='pointer'
                        _hover={{ color: 'blue.400' }}
                    >
                        go back to home page
                    </Text>
                </Text>
            </Box>
        </Box>
    );
};

export default Error;
