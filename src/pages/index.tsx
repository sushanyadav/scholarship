import { PageHead } from '@/common/components/PageHead';

import { HomepageHeader } from '@/modules/Homepage/HomepageHeader';
import { LatestScholarships } from '@/modules/Homepage/LatestScholarships';

const Home = () => {
  return (
    <>
      <PageHead description="Home page description" name="Home" />
      <HomepageHeader />
      <LatestScholarships my={{ base: '6', md: '10' }} />
    </>
  );
};

export default Home;
