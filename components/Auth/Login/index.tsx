'use client';

import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
// eslint-disable-next-line import/no-cycle
import { useSupabase } from 'components/Supabase/SupabaseProvider';

// Supabase auth needs to be triggered client-side
export default function Login() {
  const { supabase, session } = useSupabase();
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log({ error });
    }
  };

  if (!session)
    return (
      <Auth
        redirectTo="http://localhost:3000/"
        appearance={{ theme: ThemeSupa }}
        supabaseClient={supabase}
        socialLayout="horizontal"
      />
    );

  return (
    <>
      <button onClick={handleLogout}>Sign out</button>
    </>
  );
}
