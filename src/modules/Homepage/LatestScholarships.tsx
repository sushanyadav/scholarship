import { Box, Grid, Heading } from '@chakra-ui/react';

import { HORIZONTAL_PADDING } from '@/common/components/CoreLayout/Nav';
import { Card } from '@/common/components/Card';

export const LatestScholarships = ({ ...props }) => {
  const latestScholarships = [
    {
      id: 'victoria-uni',
      description: '$30,000 for international students',
      heading: 'Victoria University Grant',
      image: '/universities/university-1.png',
    },
    {
      id: 'sydney-uni',
      description: '$30,000 for international students',
      heading: 'University of Sydney Grant',
      image: '/universities/university-2.png',
    },
    {
      id: 'sydney-uni-2',
      description: '$30,000 for international students',
      heading: 'University of Sydney Grant',
      image: '/universities/university-3.png',
    },
  ];

  return (
    <Box {...props} maxW="1440px" mx="auto" px={HORIZONTAL_PADDING}>
      <Heading
        fontSize={{ base: '24px', md: '30px' }}
        mb={{ base: 4, md: '6' }}
      >
        Latest Scholarships
      </Heading>
      <Grid
        gap="6"
        templateColumns={{
          base: 'repeat(auto-fill, minmax(18.75rem, 1fr))',
          lg: 'repeat(auto-fill, 27.3331rem)',
        }}
        w="full"
      >
        {latestScholarships.map(({ id, ...rest }) => {
          return <Card key={id} {...rest} />;
        })}
      </Grid>
    </Box>
  );
};
