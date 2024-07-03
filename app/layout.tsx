// src/app/layout.tsx

import '@mantine/core/styles.css';
import React, { ReactNode } from 'react';
import { ColorSchemeScript } from '@mantine/core';
import { CombinedProviders } from '../src/lib/providers/CombineProviders';
import '../src/styles/global.css';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

const RootLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no" />
      </head>
      <body>
        <CombinedProviders>{children}</CombinedProviders>
      </body>
    </html>
  );
};

export default RootLayout;
