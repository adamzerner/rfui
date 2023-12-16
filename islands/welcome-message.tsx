import { Link } from "@/components/atoms/link.tsx";
import { UnorderedList } from "@/components/atoms/unordered-list.tsx";
import { Alert, AlertBody, AlertHeader } from "@/islands/molecules/alert.tsx";
import { useEffect, useState } from "preact/hooks";

export const WelcomeMessage = () => {
  const [hasVisitedBefore, setHasVisitedBefore] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("hasVisitedBefore")) {
      setHasVisitedBefore(true);
    } else {
      localStorage.setItem("hasVisitedBefore", "true");
    }
  }, []);

  if (hasVisitedBefore) {
    return null;
  }

  return (
    <Alert variant="info" class="mb-10">
      <AlertHeader>Welcome to RFUI</AlertHeader>
      <AlertBody>
        <p>
          Since it's your first time here, you might want to check these pages
          out:
        </p>
        <UnorderedList class="mt-2 mb-4" bulletType="triangle">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/getting-started">Getting Started</Link>
          </li>
          <li>
            <Link href="/philosophy">Philosophy</Link>
          </li>
        </UnorderedList>
        <p>
          If you have any thoughts or questions, don't hesitate to reach out:
          {" "}
          <Link href="mailto:adamzerner@protonmail.com">
            adamzerner@protonmail.com
          </Link>.
        </p>
      </AlertBody>
    </Alert>
  );
};
