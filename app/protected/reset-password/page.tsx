import { resetPasswordAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface ResetPasswordProps {
  searchParams: Message;
}

export default function ResetPassword({ searchParams }: ResetPasswordProps) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await resetPasswordAction({ password });
      setSuccess("Password reset successfully. You can now log in.");
      setError(null);
    } catch (e) {
      setError("Failed to reset password. Please try again.");
      setSuccess(null);
    }
  };

  return (
    <form className="flex flex-col w-full max-w-md p-4 gap-2" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-medium">Reset password</h1>
      <p className="text-sm text-foreground/60">
        Please enter your new password below.
      </p>
      <Label htmlFor="password">New password</Label>
      <Input
        type="password"
        name="password"
        placeholder="New password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Label htmlFor="confirmPassword">Confirm password</Label>
      <Input
        type="password"
        name="confirmPassword"
        placeholder="Confirm password"
        required
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      <SubmitButton type="submit">
        Reset password
      </SubmitButton>
      <FormMessage message={searchParams} />
    </form>
  );
}
