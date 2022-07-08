import React from 'react';
import { Button, Text } from '@chakra-ui/react';
import { BiArrowBack } from 'react-icons/bi';

const BackBtn = ({ onBack }) => {
    return (
        <Button py={2} cursor='pointer' onClick={onBack}>
            <BiArrowBack /> <Text ms={3}>back to products</Text>
        </Button>
    );
};

export default BackBtn;
