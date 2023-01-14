import { Box, Center, Heading, Text } from '@chakra-ui/react';

export const SignInOptionCard = ({ description, icon, title, ...props }) => {
  return (
    <Box
      bg="white"
      border="1px solid"
      borderColor="gray.200"
      borderRadius="8px"
      p="6"
      shadow="sm"
      textAlign="left"
      {...props}
    >
      <Center
        bg="purple.50"
        borderRadius="12px"
        color="purple.500"
        h="10"
        w="10"
      >
        {icon}
      </Center>
      <Heading color="gray.900" fontSize="sm" fontWeight="600" mb="1" mt="4">
        {title}
      </Heading>
      <Text color="gray.600" fontSize="xs">
        {description}
      </Text>
    </Box>
  );
};
