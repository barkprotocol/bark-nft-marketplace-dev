"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { signOutAction } from "@/app/actions";
import { Button } from "./ui/button";
import Link from "next/link";

export default function HeaderAuth() {
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUser() {
      if (!hasEnvVars) {
        setLoading(false);
        return;
      }

      try {
        const client = createClient();
        const { data, error } = await client.auth.getUser();
        
        if (error) {
          setError(error.message);
          setUser(null);
        } else {
          setUser(data.user);
        }
      } catch (err) {
        setError("Failed to fetch user");
      } finally {
        setLoading(false);
      }
    }
    
    fetchUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!hasEnvVars) {
    return (
      <div className="flex gap-2">
        <Button asChild size="sm" variant="outline" disabled>
          <Link href="/sign-in">Sign in</Link>
        </Button>
        <Button asChild size="sm" variant="default" disabled>
          <Link href="/sign-up">Sign up</Link>
        </Button>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return user ? (
    <div className="flex items-center gap-4">
      Hey, {user.email}!
      <form action={signOutAction}>
        <Button type="submit" variant="outline">
          Sign out
        </Button>
      </form>
    </div>
  ) : (
    <div className="flex gap-2">
      <Button asChild size="sm" variant="outline">
        <Link href="/sign-in">Sign in</Link>
      </Button>
      <Button asChild size="sm" variant="default">
        <Link href="/sign-up">Sign up</Link>
      </Button>
    </div>
  );
}
