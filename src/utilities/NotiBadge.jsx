import { Badge } from '@chakra-ui/react';
import React from 'react';
import 'animate.css';
import { useEffect } from 'react';

const NotiBadge = ({ val, className }) => {
    let value = val;

    if (value > 99) {
        value = '99+';
    }

    useEffect(() => {
        const badge = document.querySelector(`.${className}`);
        badge.classList.add('animate__headShake');

        const timer = setTimeout(
            () => badge.classList.remove('animate__headShake'),
            300
        );

        return () => clearTimeout(timer);
    }, [val, className]);

    return (
        <Badge
            color='white'
            bg='black'
            rounded='full'
            pos='absolute'
            top='-13px'
            right='-9px'
            className={`${className} animate__animated`}
        >
            {value}
        </Badge>
    );
};

export default NotiBadge;
