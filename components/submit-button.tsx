"use client";

import { Button } from "@/components/ui/button";
import { type ComponentProps } from "react";
import { useFormStatus } from "react-dom";

type Props = ComponentProps<typeof Button> & {
  pendingText?: string;
};

export function SubmitButton({
  children,
  pendingText = "Submitting...",
  ...props
}: Props) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      aria-disabled={pending}
      aria-live="polite" // Announce pending state to screen readers
      {...props}
      className={`transition-colors duration-300 ${
        pending ? "bg-gray-500 text-white cursor-not-allowed" : "bg-black text-white hover:bg-gray-800"
      }`}
    >
      {pending ? pendingText : children}
    </Button>
  );
}
