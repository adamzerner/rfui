import { Link } from "@/components/atoms/link.tsx";
import { UnorderedList } from "@/components/atoms/unordered-list.tsx";
import { Flex } from "@/components/helpers/flex.tsx";
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
          <UnorderedList bulletType="arrow">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UnorderedList>
          <UnorderedList bulletType="triangle">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UnorderedList>
        </Stack>
      </Examples>
      <Examples title="Bigger">
        <Stack class="gap-5">
          <UnorderedList bulletType="bullet" class="text-xl">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UnorderedList>
          <UnorderedList bulletType="check" class="text-xl">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UnorderedList>
          <UnorderedList bulletType="arrow" class="text-xl">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UnorderedList>
          <UnorderedList bulletType="triangle" class="text-xl">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UnorderedList>
        </Stack>
      </Examples>
      <Examples title="Color">
        <Stack class="gap-5">
          <UnorderedList bulletType="bullet" class="text-neutral-500">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UnorderedList>
          <UnorderedList bulletType="check" class="text-neutral-500">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UnorderedList>
          <UnorderedList bulletType="arrow" class="text-neutral-500">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UnorderedList>
          <UnorderedList bulletType="triangle" class="text-neutral-500">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UnorderedList>
        </Stack>
      </Examples>
      <Examples title="Custom">
        <UnorderedList class="list-none">
          <li>
            <Flex class="gap-2">
              <span>😎</span>
              One
            </Flex>
          </li>
          <li>
            <Flex class="gap-2">
              <span>😎</span>
              Two
            </Flex>
          </li>
          <li>
            <Flex class="gap-2">
              <span>😎</span>
              Three
            </Flex>
          </li>
        </UnorderedList>
      </Examples>
    </Stack>
  );
};
