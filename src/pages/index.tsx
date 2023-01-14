import { Box } from '@chakra-ui/react';

import { PageHead } from '@/common/components/PageHead';

// TODO: overwrite tailwind class with chakra UI
const Home = () => {
  return (
    <div className="h-full">
      <PageHead
        removeTitleAppend
        description="Home page description"
        name="Home"
      />
      <section className="grid place-content-center h-full">
        <Box bg="red.200">Hello world</Box>
      </section>
    </div>
  );
};

export default Home;
