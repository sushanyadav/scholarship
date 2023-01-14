import { Box } from '@chakra-ui/react';

// TODO: overwrite tailwind class with chakra UI
export const CoreLayout = ({ children }) => {
  return <Box className="min-h-full h-full relative">{children}</Box>;
};
