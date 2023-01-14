import { Button, Flex, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { ScholarshipsLogo } from '../Icons/ScholarshipsLogo';

export const HORIZONTAL_PADDING = {
  base: 4,
  md: '10',
};

export const Nav = () => {
  const router = useRouter();
  return (
    <Flex
      alignItems="center"
      borderBottom="1px solid"
      borderBottomColor="gray.100"
      h={{ base: '4rem', md: '5rem' }}
      justifyContent="space-between"
      px={HORIZONTAL_PADDING}
    >
      <Link href="/">
        <ScholarshipsLogo
          height="32px"
          width={{ base: '108px', md: '152px' }}
        />
      </Link>
      <Stack direction="row" spacing={{ base: 2, md: 4 }}>
        <Button
          colorScheme="purple"
          size={{ base: 'sm', md: 'md' }}
          variant="solid"
          onClick={() => router.push('/auth')}
        >
          Create account
        </Button>
        <Button
          colorScheme="purple"
          size={{ base: 'sm', md: 'md' }}
          variant="outline"
          onClick={() => router.push('/auth')}
        >
          Sign in
        </Button>
      </Stack>
    </Flex>
  );
};
