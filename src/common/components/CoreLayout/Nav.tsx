import { Avatar, AvatarBadge, Button, Flex, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';

import { ScholarshipsLogo } from '../Icons/ScholarshipsLogo';

export const HORIZONTAL_PADDING = {
  base: 4,
  md: '10',
};

export const Nav = () => {
  const { data: session } = useSession();

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
        {session ? (
          <Flex gap="5">
            <Avatar name={session.user.name} size="sm" src={session.user.image}>
              <AvatarBadge bg="green.500" boxSize="0.8em" />
            </Avatar>
            <Button
              colorScheme="purple"
              size={{ base: 'sm', md: 'md' }}
              variant="outline"
              onClick={() => signOut({ callbackUrl: '/' })}
            >
              Sign out
            </Button>
          </Flex>
        ) : (
          <>
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
          </>
        )}
      </Stack>
    </Flex>
  );
};
