import { Box, Button, Center, Heading, Text } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';

import { BuildingHouseIcon, UsersIcon } from '@/common/components/Icons';

export const SignInAsSection = ({ selectedSignInOption }) => {
  const options = {
    'university-staff': {
      title: 'university staff',
      icon: <BuildingHouseIcon h="6" w={{ base: 5, md: '6' }} />,
    },
    student: {
      title: 'student',
      icon: <UsersIcon h="6" w={{ base: 5, md: '6' }} />,
    },
  };

  const { icon, title } = options[selectedSignInOption];

  return (
    <Box>
      <Center
        bg="purple.50"
        borderRadius="12px"
        color="purple.500"
        h="10"
        mb={{ base: 6, md: 8 }}
        mx="auto"
        w="10"
      >
        {icon}
      </Center>
      <Heading
        color="gray.900"
        fontSize={{ base: '24px', md: '36px' }}
        mb="2"
        textAlign="center"
      >
        Sign in as a {title}
      </Heading>

      <Text
        color="gray.600"
        fontSize={{ base: '14px', md: '20px' }}
        mb={{ base: 6, md: 8 }}
        textAlign="center"
      >
        We use your Google account to let you login securely without passwords.
      </Text>
      <Center>
        <Button
          colorScheme="purple"
          mx="auto"
          onClick={() =>
            signIn('google', {
              selectedSignInOption,
              callbackUrl: '/home',
            })
          }
        >
          Login with Google
        </Button>
      </Center>
    </Box>
  );
};
