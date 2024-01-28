import { H1 } from "@/components/atoms/h1.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Text } from "@/components/atoms/text.tsx";

export default () => {
  return (
    <div class="max-w-prose text-lg">
      <H1>Unexpected error</H1>
      <Text>
        <p>
          There was an unexpected error. Sorry about that.
        </p>
        <p>
          Please <Link href="mailto:adamzerner@protonmail.com">reach out</Link>
          {" "}
          for help.
        </p>
      </Text>
    </div>
  );
};
