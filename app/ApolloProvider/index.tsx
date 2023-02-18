'use client';

import { ApolloProvider as Provider } from '@apollo/client';
import apolloClient from 'lib/gaphqlClient';
import { ReactNode } from 'react';

export const ApolloProvider = ({ children }: { children: ReactNode }) => (
  <Provider client={apolloClient}>{children}</Provider>
);
