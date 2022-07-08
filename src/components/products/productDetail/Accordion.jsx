import React from 'react';
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
} from '@chakra-ui/react';

const AccordionContainer = ({ description }) => {
    return (
        <Accordion width='100%' allowToggle bg='gray.200' mb={'7px !important'}>
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left' fontSize='lg'>
                            Details
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>{description}</AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
};

export default AccordionContainer;
