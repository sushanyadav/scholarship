import { Box, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { getProviders } from 'next-auth/react';

import { HORIZONTAL_PADDING } from '@/common/components/CoreLayout/Nav';
import { ChevronLeftIcon } from '@/common/components/Icons';

import { SignInOptionChoosingSection } from '@/modules/Auth/SignInOptionChoosingSection';
import { SignInAsSection } from '@/modules/Auth/SignInAsSection';

const AuthPage = () => {
  const [selectedSignInOption, setSelectedSignInOption] = useState<
    'university-staff' | 'student'
  >(undefined);

  return (
    <Flex
      bg="gray.50"
      direction={{ base: 'column', md: 'row' }}
      justifyContent={{ md: 'center' }}
      minH={{ base: 'calc(100vh - 4rem)', md: 'calc(100vh - 5rem)' }}
      px={HORIZONTAL_PADDING}
      py={{ base: 10, md: '20' }}
    >
      {selectedSignInOption && (
        <Flex
          _hover={{ color: 'purple.500' }}
          alignItems="center"
          alignSelf="flex-start"
          as="button"
          color="purple.600"
          fontWeight="medium"
          pr="8"
          onClick={() => setSelectedSignInOption(undefined)}
        >
          <ChevronLeftIcon h={{ base: 10, md: '20' }} w="8" />
          Back
        </Flex>
      )}
      {selectedSignInOption ? (
        <SignInAsSection selectedSignInOption={selectedSignInOption} />
      ) : (
        <SignInOptionChoosingSection
          setSelectedSignInOption={setSelectedSignInOption}
        />
      )}
    </Flex>
  );
};

export default AuthPage;
