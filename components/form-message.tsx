export type Message =
  | { success: string }
  | { error: string }
  | { message: string };

export function FormMessage({ message }: { message: Message }) {
  if ('success' in message) {
    return (
      <div className="text-foreground border-l-2 border-foreground px-4 py-2 bg-green-50">
        {message.success}
      </div>
    );
  }

  if ('error' in message) {
    return (
      <div className="text-destructive-foreground border-l-2 border-destructive-foreground px-4 py-2 bg-red-50">
        {message.error}
      </div>
    );
  }

  if ('message' in message) {
    return (
      <div className="text-foreground border-l-2 border-foreground px-4 py-2 bg-blue-50">
        {message.message}
      </div>
    );
  }

  return null; // or return a default message if desired
}
