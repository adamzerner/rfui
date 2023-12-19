import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { Examples } from "@/islands/demo/examples.tsx";

export default () => {
  return (
    <Stack class="gap-8">
      <div>
        <div class="text-2xl mb-3">Source code</div>
        <Link href="https://github.com/adamzerner/rfui/blob/master/routes/atoms/code-block.tsx">
          https://github.com/adamzerner/rfui/blob/master/routes/atoms/code-block.tsx
        </Link>
      </div>
      <Examples title="Default">
        <CodeBlock
          code={`const firstName = 'John';
const lastName = 'Doe';
const fullName = firstName + " " + lastName;`}
        />
      </Examples>
      <Examples title="Language">
        <CodeBlock
          language="ts"
          code={`const firstName = 'John';
const lastName = 'Doe';
const fullName = firstName + " " + lastName;`}
        />
      </Examples>
    </Stack>
  );
};
