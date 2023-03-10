import { ChakraProvider } from '@chakra-ui/react';
import { NextComponentType } from 'next';
import type { AppProps as NextAppProps } from 'next/app';
import { Inter } from '@next/font/google';
import { NextFont } from '@next/font/dist/types';

import { CoreLayout } from '@/common/components/CoreLayout';
import { PageHead } from '@/common/components/PageHead';

const inter: NextFont = Inter({
  variable: '--inter-font',
});

type ComponentProps = {
  layout?: () => JSX.Element;
} & NextComponentType;

type AppProps<C> = {
  Component: C;
} & NextAppProps;

export const App = ({ Component, pageProps }: AppProps<ComponentProps>) => {
  // Use default Layout.tsx component, or specify your own layout in the page
  // by doing PageA.layout = CustomLayoutComponent;
  const Layout = Component.layout ?? CoreLayout;

  return (
    <>
      <style global jsx>{`
        :root {
          --inter-font: ${inter.style.fontFamily};
        }
      `}</style>
      <ChakraProvider>
        <PageHead />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
};

export default App;
