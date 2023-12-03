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
          <Select size="sm">
            <option value="foo">foo</option>
            <option value="bar">bar</option>
            <option value="baz">baz</option>
          </Select>
          <Select size="md">
            <option value="foo">foo</option>
            <option value="bar">bar</option>
            <option value="baz">baz</option>
          </Select>
          <Select size="lg">
            <option value="foo">foo</option>
            <option value="bar">bar</option>
            <option value="baz">baz</option>
          </Select>
        </Stack>
      </Examples>
      <Examples title="Rounded">
        <Stack class="gap-5">
          <Select rounded="square">
            <option value="foo">foo</option>
            <option value="bar">bar</option>
            <option value="baz">baz</option>
          </Select>
          <Select rounded="sm">
            <option value="foo">foo</option>
            <option value="bar">bar</option>
            <option value="baz">baz</option>
          </Select>
          <Select rounded="lg">
            <option value="foo">foo</option>
            <option value="bar">bar</option>
            <option value="baz">baz</option>
          </Select>
          <Select rounded="full">
            <option value="foo">foo</option>
            <option value="bar">bar</option>
            <option value="baz">baz</option>
          </Select>
        </Stack>
      </Examples>
      <Examples title="Disabled">
        <Select disabled>
          <option value="foo">foo</option>
          <option value="bar">bar</option>
          <option value="baz">baz</option>
        </Select>
      </Examples>
      <Examples title="Readonly">
        <Select readonly>
          <option value="foo">foo</option>
          <option value="bar">bar</option>
          <option value="baz">baz</option>
        </Select>
      </Examples>
      <Examples title="Invalid">
        <Select invalid>
          <option value="foo">foo</option>
          <option value="bar">bar</option>
          <option value="baz">baz</option>
        </Select>
      </Examples>
    </Stack>
  );
};
