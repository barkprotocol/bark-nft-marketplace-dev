// app/api/supabase/route.ts
import { createServerClient } from '@supabase/ssr';
import { cookies, NextResponse } from 'next/headers';

export async function GET() {
  const cookieStore = cookies();

  // Check if environment variables are defined
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return NextResponse.json({ error: 'Supabase environment variables are not set' }, { status: 500 });
  }

  const supabaseClient = createServerClient(
    supabaseUrl,
    supabaseAnonKey,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options);
            });
          } catch (error) {
            console.error('Error setting cookies:', error);
          }
        },
      },
    }
  );

  return NextResponse.json({ message: 'Client created' });
}
