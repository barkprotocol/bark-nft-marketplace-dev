import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const origin = requestUrl.origin;
  const redirectTo = requestUrl.searchParams.get("redirect_to")?.toString();

  const supabase = createClient();

  try {
    if (code) {
      await supabase.auth.exchangeCodeForSession(code);
    }
  } catch (error) {
    console.error("Error exchanging code for session:", error);
    // Handle error or redirect to an error page
    return NextResponse.redirect(`${origin}/error`);
  }

  if (redirectTo) {
    return NextResponse.redirect(`${origin}${redirectTo}`);
  }

  // URL to redirect to after sign up process completes
  return NextResponse.redirect(`${origin}/protected`);
}
