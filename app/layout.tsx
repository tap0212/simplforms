import Header from 'components/Header';
import './globals.css';

import { ApolloProvider } from './ApolloProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ApolloProvider>
          <Header />
          {children}
        </ApolloProvider>
      </body>
    </html>
  );
}
