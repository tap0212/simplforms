import type { SupabaseClient } from '@supabase/auth-helpers-nextjs';
import Header from 'components/Header';
// eslint-disable-next-line import/no-cycle
import SupabaseListener from 'components/Supabase/SupabaseLitener';
import SupabaseProvider from 'components/Supabase/SupabaseProvider';
import { Database } from 'prisma/db_types';
import './globals.css';

import { Provider } from '../components/Provider';
import { createServerClient } from '../utils/supabase-server';

export type TypedSupabaseClient = SupabaseClient<Database>;

// do not cache this layout
export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <head />
      <body>
        <Provider>
          <SupabaseProvider session={session}>
            <SupabaseListener serverAccessToken={session?.access_token} />
            <Header />
            {children}
          </SupabaseProvider>
        </Provider>
      </body>
    </html>
  );
}
