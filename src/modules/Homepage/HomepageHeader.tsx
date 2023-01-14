import { Box, Center, Heading, Text } from '@chakra-ui/react';

import { HORIZONTAL_PADDING } from '@/common/components/CoreLayout/Nav';

export const HomepageHeader = () => {
  return (
    <Center bg="gray.500" py={{ base: '16', md: '20' }}>
      <Box px={HORIZONTAL_PADDING} textAlign="center">
        <Heading color="white" fontSize={{ base: '24px', md: '36px' }} mb="2">
          Find the best scholarships for you
        </Heading>
        <Text color="whiteAlpha.600" fontSize={{ base: '14px', md: '20px' }}>
          One place for you to find, apply and track all of your scholarships
        </Text>
      </Box>
    </Center>
  );
};
