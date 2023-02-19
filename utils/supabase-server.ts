import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { cookies, headers } from 'next/headers';
import { Database } from 'prisma/db_types';

export const createServerClient = () =>
  createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  });
