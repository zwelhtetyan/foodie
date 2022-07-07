import { Skeleton, Stack } from '@chakra-ui/react';

const productSkeletonArr = [];

for (let i = 0; i < 5; i++) {
    productSkeletonArr.push(
        <Stack
            key={i}
            width={[
                'calc(100% / 2 - 10px)',
                'calc(100% / 3 - 10px)',
                'calc(100% / 4 - 20px)',
                'calc(100% / 5 - 20px)',
            ]}
            m={['5px', '5px', '10px', '10px']}
        >
            <Skeleton height={['110px', '170px']} />
            <Skeleton height='10px' />
            <Skeleton height='10px' />
            <Skeleton height='40px' />
        </Stack>
    );
}

export default productSkeletonArr;
