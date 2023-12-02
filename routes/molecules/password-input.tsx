import { Link } from "@/components/atoms/link.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { Examples } from "@/islands/demo/examples.tsx";
import { PasswordInput } from "@/islands/molecules/password-input.tsx";

export default () => {
  return (
    <Stack class="gap-8">
      <div>
        <div class="text-2xl mb-3">Source code</div>
        <Link href="https://github.com/adamzerner/rfui/blob/master/routes/molecules/password-input.tsx">
          https://github.com/adamzerner/rfui/blob/master/routes/molecules/password-input.tsx
        </Link>
      </div>
      <Examples title="Size">
        <Stack class="gap-5">
          <PasswordInput size="sm" />
          <PasswordInput size="md" />
          <PasswordInput size="lg" />
        </Stack>
      </Examples>
      <Examples title="Rounded">
        <Stack class="gap-5">
          <PasswordInput rounded="square" />
          <PasswordInput rounded="sm" />
          <PasswordInput rounded="lg" />
          <PasswordInput rounded="full" />
        </Stack>
      </Examples>
      <Examples title="Invalid">
        <PasswordInput invalid />
      </Examples>
    </Stack>
  );
};
