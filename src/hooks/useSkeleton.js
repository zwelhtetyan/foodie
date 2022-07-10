import { Box, Flex, Skeleton, Stack, VStack } from '@chakra-ui/react';

const useSkeleton = (productsToShow) => {
    const productSkeletonArr = [];

    for (let i = 0; i < productsToShow; i++) {
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

    const productDetailSkeleton = (
        <Box margin={'auto'} mt='65px' px={5} maxWidth='1000px'>
            <Box marginTop={'6rem !important'}>
                <Skeleton width='190px' height='40px' />
            </Box>

            <Flex
                marginTop={'2rem !important'}
                marginBottom={'2rem'}
                flexDirection={['column', 'column', 'row']}
                align='center'
            >
                <Flex
                    width={{ base: '100%', md: '50%' }}
                    overflow='hidden'
                    align={'center'}
                    justify={'center'}
                >
                    <Skeleton width='90%' height='350px' />
                </Flex>

                <VStack
                    width={{ base: '100%', md: '50%' }}
                    align='start'
                    mt={{ base: '2.5rem', md: '0' }}
                >
                    <Skeleton height='35px' width='100%' />
                    <Skeleton height='22px' width='100%' />
                    <Skeleton height='22px' width='100%' />
                    <Skeleton height='40px' width='100%' />
                    <Skeleton height='40px' width='100%' />
                </VStack>
            </Flex>
        </Box>
    );

    return { productSkeletonArr, productDetailSkeleton };
};

export default useSkeleton;
