import { Heading, Flex, Box, Text } from '@chakra-ui/react';

import { BuildingHouseIcon, UsersIcon } from '@/common/components/Icons';

import { SignInOptionCard } from './SignInOptionCard';

export const SignInOptionChoosingSection = ({ setSelectedSignInOption }) => {
  return (
    <Box>
      <Heading
        color="gray.900"
        fontSize={{ base: '24px', md: '36px' }}
        mb="2"
        textAlign="center"
      >
        Sign in to your account
      </Heading>

      <Text
        color="gray.600"
        fontSize={{ base: '14px', md: '20px' }}
        mb={{ base: 6, md: 8 }}
        textAlign="center"
      >
        If you don’t have an account, we’ll make one for you.
      </Text>
      <Flex
        alignItems="center"
        flexWrap="wrap"
        gap={{ base: 3, md: 5 }}
        justifyContent="center"
      >
        <SignInOptionCard
          as="button"
          description="Use your university assigned credentials to view and rank scholarships."
          icon={<BuildingHouseIcon h="6" w={{ base: 5, md: '6' }} />}
          maxW="390px"
          title="University staff"
          onClick={() => setSelectedSignInOption('university-staff')}
        />
        <SignInOptionCard
          as="button"
          description="Browse and apply to scholarships available in our application."
          icon={<UsersIcon h="6" w={{ base: 5, md: '6' }} />}
          maxW="390px"
          title="Student"
          onClick={() => setSelectedSignInOption('student')}
        />
      </Flex>
    </Box>
  );
};
