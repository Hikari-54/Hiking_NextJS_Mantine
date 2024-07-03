import { ReactNode } from 'react';
import { MantineProvider as MantineCoreProvider } from '@mantine/core';
import { OurMantineTheme } from '../theme/MantineTheme/MantineTheme';

interface MantineProviderProps {
  children: ReactNode;
}

export const MantineProvider = ({ children }: MantineProviderProps) => (
  <MantineCoreProvider
    theme={{
      ...OurMantineTheme,
      fontFamily: 'Nunito, sans-serif',
    }}
    defaultColorScheme="auto"
  >
    {children}
  </MantineCoreProvider>
);
