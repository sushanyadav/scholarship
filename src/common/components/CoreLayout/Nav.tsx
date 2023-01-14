import { Button, Flex, Stack } from '@chakra-ui/react';

import { ScholarshipsLogo } from '../IconComponents/ScholarshipsLogo';

export const HORIZONTAL_PADDING = {
  base: 4,
  md: '10',
};

export const Nav = () => {
  return (
    <Flex
      alignItems="center"
      borderBottom="1px solid"
      borderBottomColor="gray.100"
      h={{ base: '4rem', md: '5rem' }}
      justifyContent="space-between"
      px={HORIZONTAL_PADDING}
    >
      <ScholarshipsLogo height="32px" width={{ base: '108px', md: '152px' }} />
      <Stack direction="row" spacing={{ base: 2, md: 4 }}>
        <Button
          colorScheme="purple"
          size={{ base: 'sm', md: 'md' }}
          variant="solid"
        >
          Create account
        </Button>
        <Button
          colorScheme="purple"
          size={{ base: 'sm', md: 'md' }}
          variant="outline"
        >
          Sign in
        </Button>
      </Stack>
    </Flex>
  );
};
