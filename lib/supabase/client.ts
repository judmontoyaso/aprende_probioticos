import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false, // No necesitamos auth por ahora
  },
});

// Cliente con service role key para operaciones administrativas (solo server-side)
export const supabaseAdmin = (serviceRoleKey?: string) => {
  const key = serviceRoleKey || process.env.SUPABASE_SERVICE_ROLE_KEY!;
  
  if (!key) {
    throw new Error('Missing Supabase service role key');
  }
  
  return createClient<Database>(supabaseUrl, key, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
};
