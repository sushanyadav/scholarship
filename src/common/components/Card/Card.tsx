import { Box, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

export const Card = ({ image, heading, description, ...props }) => {
  return (
    <Box
      bg="white"
      border="1px solid"
      borderColor="gray.200"
      borderRadius="8px"
      maxW="fit-content"
      shadow="sm"
      {...props}
    >
      <Image
        alt={heading}
        height={346}
        src={image}
        style={{ overflow: 'hidden', objectFit: 'cover' }}
        width={437.33}
      />
      <Box p="5">
        <Heading as="h3" color="gray.900" fontSize="20px" mb="2">
          {heading}
        </Heading>
        <Text fontSize="14px">{description}</Text>
      </Box>
    </Box>
  );
};
