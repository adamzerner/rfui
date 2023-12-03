import { Checkbox } from "@/components/atoms/checkbox.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { Examples } from "@/islands/demo/examples.tsx";

export default () => {
  return (
    <Stack class="gap-8">
      <div>
        <div class="text-2xl mb-3">Source code</div>
        <Link href="https://github.com/adamzerner/rfui/blob/master/routes/atoms/checkbox.tsx">
          https://github.com/adamzerner/rfui/blob/master/routes/atoms/checkbox.tsx
        </Link>
      </div>
      <Examples title="Size">
        <Stack class="gap-5">
          <Checkbox size="sm" />
          <Checkbox size="md" />
          <Checkbox size="lg" />
        </Stack>
      </Examples>
      <Examples title="Rounded">
        <Stack class="gap-5">
          <Checkbox rounded="square" />
          <Checkbox rounded="sm" />
          <Checkbox rounded="lg" />
          <Checkbox rounded="full" />
        </Stack>
      </Examples>
      <Examples title="Disabled">
        <Checkbox disabled />
      </Examples>
      <Examples title="Readonly">
        <Checkbox readonly value="example" />
      </Examples>
      <Examples title="Invalid">
        <Checkbox invalid value="example" />
      </Examples>
    </Stack>
  );
};
