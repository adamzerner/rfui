import { Link } from "@/components/atoms/link.tsx";
import { Select } from "@/components/atoms/select.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { Examples } from "@/islands/demo/examples.tsx";

export default () => {
  return (
    <Stack class="gap-8">
      <div>
        <div class="text-2xl mb-3">Source code</div>
        <Link href="https://github.com/adamzerner/rfui/blob/master/routes/atoms/select.tsx">
          https://github.com/adamzerner/rfui/blob/master/routes/atoms/select.tsx
        </Link>
      </div>
      <Examples title="Size">
        <Stack class="gap-5">
          <Select size="sm"></Select>
          <Select size="md"></Select>
          <Select size="lg"></Select>
        </Stack>
      </Examples>
      <Examples title="Rounded">
        <Stack class="gap-5">
          <Select rounded="square"></Select>
          <Select rounded="sm"></Select>
          <Select rounded="lg"></Select>
          <Select rounded="full"></Select>
        </Stack>
      </Examples>
      <Examples title="Disabled">
        <Select disabled></Select>
      </Examples>
      <Examples title="Readonly">
        <Select readonly></Select>
      </Examples>
      <Examples title="Invalid">
        <Select invalid></Select>
      </Examples>
    </Stack>
  );
};
