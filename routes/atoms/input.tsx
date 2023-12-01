import { Input } from "@/components/atoms/input.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { Examples } from "@/islands/demo/examples.tsx";

export default () => {
  return (
    <Stack gap="8">
      <div>
        <div class="text-2xl mb-3">Source code</div>
        <Link href="https://github.com/adamzerner/rfui/blob/master/routes/atoms/input.tsx">
          https://github.com/adamzerner/rfui/blob/master/routes/atoms/input.tsx
        </Link>
      </div>
      <Examples title="Size">
        <Stack gap="5">
          <Input size="sm" />
          <Input size="md" />
          <Input size="lg" />
        </Stack>
      </Examples>
      <Examples title="Rounded">
        <Stack gap="5">
          <Input rounded="square" />
          <Input rounded="sm" />
          <Input rounded="lg" />
          <Input rounded="full" />
        </Stack>
      </Examples>
      <Examples title="Disabled">
        <Input disabled />
      </Examples>
      <Examples title="Readonly">
        <Input readonly value="example" />
      </Examples>
      <Examples title="Invalid">
        <Input invalid value="example" />
      </Examples>
      <Examples title="Type">
        <Stack gap="5">
          <Input type="text" placeholder="text" />
          <Input type="email" placeholder="email" />
          <Input type="number" />
          <Input type="password" value="foobar" />
          <Input type="date" />
          <Input type="datetime-local" />
          <Input type="time" />
          <Input type="file" />
          <Input type="range" />
          <Input type="color" />
        </Stack>
      </Examples>
    </Stack>
  );
};
