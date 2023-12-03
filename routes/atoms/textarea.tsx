import { Link } from "@/components/atoms/link.tsx";
import { Textarea } from "@/components/atoms/textarea.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { Examples } from "@/islands/demo/examples.tsx";

export default () => {
  return (
    <Stack class="gap-8">
      <div>
        <div class="text-2xl mb-3">Source code</div>
        <Link href="https://github.com/adamzerner/rfui/blob/master/routes/helpers/textarea.tsx">
          https://github.com/adamzerner/rfui/blob/master/routes/helpers/textarea.tsx
        </Link>
      </div>
      <Examples title="Rounded">
        <Stack class="gap-5">
          <Textarea rounded="square"></Textarea>
          <Textarea rounded="sm"></Textarea>
          <Textarea rounded="lg"></Textarea>
        </Stack>
      </Examples>
      <Examples title="Disabled">
        <Textarea disabled>example</Textarea>
      </Examples>
      <Examples title="Readonly">
        <Textarea readonly>example</Textarea>
      </Examples>
      <Examples title="Invalid">
        <Textarea invalid>example</Textarea>
      </Examples>
    </Stack>
  );
};
