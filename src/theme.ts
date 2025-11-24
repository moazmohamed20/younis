import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  direction: 'rtl',
  fonts: {
    heading: `'Cairo', 'Segoe UI', Tahoma, sans-serif`,
    body: `'Cairo', 'Segoe UI', Tahoma, sans-serif`,
  },
  styles: {
    global: {
      body: {
        fontFamily: `'Cairo', 'Segoe UI', Tahoma, sans-serif`,
      },
    },
  },
});

export default theme;
