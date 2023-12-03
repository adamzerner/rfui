import { Link } from "@/components/atoms/link.tsx";
import { RadioButton } from "@/components/atoms/radio-button.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { Examples } from "@/islands/demo/examples.tsx";

export default () => {
  return (
    <Stack class="gap-8">
      <div>
        <div class="text-2xl mb-3">Source code</div>
        <Link href="https://github.com/adamzerner/rfui/blob/master/routes/atoms/radio-button.tsx">
          https://github.com/adamzerner/rfui/blob/master/routes/atoms/radio-button.tsx
        </Link>
      </div>
      <Examples title="Size">
        <Stack class="gap-5">
          <RadioButton size="sm" />
          <RadioButton size="md" />
          <RadioButton size="lg" />
        </Stack>
      </Examples>
      <Examples title="Disabled">
        <RadioButton disabled />
      </Examples>
      <Examples title="Invalid">
        <RadioButton invalid />
      </Examples>
    </Stack>
  );
};
