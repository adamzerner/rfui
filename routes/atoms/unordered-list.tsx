import { Link } from "@/components/atoms/link.tsx";
import { UnorderedList } from "@/components/atoms/unordered-list.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { Examples } from "@/islands/demo/examples.tsx";

export default () => {
  return (
    <Stack class="gap-8">
      <div>
        <div class="text-2xl mb-3">Source code</div>
        <Link href="https://github.com/adamzerner/rfui/blob/master/routes/atoms/unordered-list.tsx">
          https://github.com/adamzerner/rfui/blob/master/routes/atoms/unordered-list.tsx
        </Link>
      </div>
      <Examples title="Default">
        <UnorderedList>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </UnorderedList>
      </Examples>
      <Examples title="Outside">
        <UnorderedList bulletLocation="outside">
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </UnorderedList>
      </Examples>
      <Examples title="Bullet type">
        <Stack class="gap-5">
          <UnorderedList bulletType="bullet">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UnorderedList>
          <UnorderedList bulletType="check">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UnorderedList>
        </Stack>
      </Examples>
    </Stack>
  );
};
