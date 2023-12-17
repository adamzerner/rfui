import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Stack } from "@/components/helpers/stack.tsx";

export default () => {
  return (
    <div class="max-w-prose text-lg">
      <h1 class="text-4xl text-neutral-700 mt-9 mb-7">About</h1>
      <Stack class="gap-4 leading-relaxed">
        <p>
          Like{"  "}
          <Link href="https://react-bootstrap.github.io/">
            React Bootstrap
          </Link>{" "}
          and{" "}
          <Link href="https://chakra-ui.com/">Chakra UI</Link>, RFUI is a
          component library for React and Preact apps. It lets you do something
          like this:
        </p>
        <CodeBlock>
          {`import { Button } from "rfui";

const SubmitButton = () => {
  return (
    <Button variant="secondary" type="submit">
      Submit
    </Button>
  );
};
`}
        </CodeBlock>
      </Stack>
    </div>
  );
};
