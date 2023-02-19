'use client';

import { ApolloProvider } from '@apollo/client';
import apolloClient from 'lib/gaphqlClient';
import { ReactNode } from 'react';

export const Provider = ({ children }: { children: ReactNode }) => (
  <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
);
