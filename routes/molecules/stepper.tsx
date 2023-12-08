import { Link } from "@/components/atoms/link.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { Examples } from "@/islands/demo/examples.tsx";
import { Stepper } from "@/islands/molecules/stepper.tsx";

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
          <Stepper size="sm" />
          <Stepper size="md" />
          <Stepper size="lg" />
        </Stack>
      </Examples>
      <Examples title="Rounded">
        <Stack class="gap-5">
          <Stepper rounded="square" />
          <Stepper rounded="sm" />
          <Stepper rounded="lg" />
          <Stepper rounded="full" />
        </Stack>
      </Examples>
      <Examples title="Name">
        <Stepper name="age" />
      </Examples>
      <Examples title="Min and max">
        <Stepper min={0} max={5} />
      </Examples>
    </Stack>
  );
};