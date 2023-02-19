import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { Database } from 'prisma/db_types';

export const createBrowserClient = () =>
  createBrowserSupabaseClient<Database>();
