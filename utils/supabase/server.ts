import { createServerClient as ssrCreateServerClient } from "@supabase/ssr";

export const createServerClient = () =>
  ssrCreateServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
