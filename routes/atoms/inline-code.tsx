import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { Examples } from "@/islands/demo/examples.tsx";

export default () => {
  return (
    <Stack class="gap-8">
      <div>
        <div class="text-2xl mb-3">Source code</div>
        <Link href="https://github.com/adamzerner/rfui/blob/master/routes/atoms/inline-code.tsx">
          https://github.com/adamzerner/rfui/blob/master/routes/atoms/inline-code.tsx
        </Link>
      </div>
      <Examples title="Default">
        <div>
          When I wrote <InlineCode>sayHello("John")</InlineCode> it didn't work.
        </div>
      </Examples>
    </Stack>
  );
};
