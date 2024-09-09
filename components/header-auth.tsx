import { signOutAction } from "@/app/actions";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Link from "next/link";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/server";
import { useState, useEffect } from "react";

// Async component logic
export default function AuthButton() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const {
          data: { user },
        } = await createClient().auth.getUser();

        setUser(user);
      } catch (err) {
        console.error("Error fetching user:", err);
        setError("Unable to fetch user data");
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, []);

  if (!hasEnvVars) {
    return null; // Return nothing if environment variables are missing
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <div className="text-red-600">
        {error}
      </div>
    );
  }

  return user ? (
    <div className="flex items-center gap-4">
      <span className="text-sm font-medium">Hey, {user.email}!</span>
      <form action={signOutAction}>
        <Button type="submit" variant="outline" aria-label="Sign out">
          Sign out
        </Button>
      </form>
    </div>
  ) : (
    <div className="flex gap-2">
      <Button asChild size="sm" variant="outline" aria-label="Sign in">
        <Link href="/sign-in">Sign in</Link>
      </Button>
      <Button asChild size="sm" variant="default" aria-label="Sign up">
        <Link href="/sign-up">Sign up</Link>
      </Button>
    </div>
  );
}
