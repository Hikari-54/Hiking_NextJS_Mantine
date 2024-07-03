import { MantineThemeOverride } from '@mantine/core';
import { rem } from '@mantine/styles';
import { ThemedComponents } from './ComponentsTheme';

export const OurMantineTheme: MantineThemeOverride = {
  //   globalStyles,
  components: ThemedComponents,
  fontSizes: {
    md: rem(14),
  },
};
