"use client";

import NextError from "next/error";
import { useEffect } from "react";

<<<<<<< HEAD
export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {}, [error]);
=======
export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
  }, [error]);
>>>>>>> ba69781707a4c6eb9ffdc166390e5f3c1ebf08f1

  return (
    <html>
      <body>
        {/* `NextError` is the default Next.js error page component. Its type
        definition requires a `statusCode` prop. However, since the App Router
        does not expose status codes for errors, we simply pass 0 to render a
        generic error message. */}
        <NextError statusCode={0} />
      </body>
    </html>
  );
}
