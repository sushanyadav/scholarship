import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

import { HORIZONTAL_PADDING } from '@/common/components/CoreLayout/Nav';

const UserHomepage = () => {
  return (
    <Flex
      bg="gray.50"
      direction={{ base: 'column', md: 'row' }}
      gap={3}
      justifyContent="space-between"
      minH={{ base: 'calc(100vh - 4rem)', md: 'calc(100vh - 5rem)' }}
      px={HORIZONTAL_PADDING}
      py={{ base: 6, md: 10 }}
    >
      <Box>
        <Heading fontSize={{ base: '24px', md: '30px' }}>
          Welcome, Saugat
        </Heading>
        <Text
          color="gray.600"
          fontSize={{ base: '14px', md: '18px' }}
          mt={{ base: 1, md: 2 }}
        >
          Here are the scholarship available at the moment
        </Text>
      </Box>
      <Flex gap={{ base: 2, md: '3' }}>
        <Button
          colorScheme="purple"
          size={{ base: 'sm', md: 'md' }}
          variant="outline"
        >
          Contact support
        </Button>
        <Button
          colorScheme="purple"
          size={{ base: 'sm', md: 'md' }}
          variant="outline"
        >
          Email us
        </Button>
      </Flex>
    </Flex>
  );
};

export default UserHomepage;
