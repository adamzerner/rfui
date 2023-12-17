import { Link } from "@/components/atoms/link.tsx";
import { UL } from "@/components/atoms/ul.tsx";
import { Flex } from "@/components/helpers/flex.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { Examples } from "@/islands/demo/examples.tsx";

export default () => {
  return (
    <Stack class="gap-8">
      <div>
        <div class="text-2xl mb-3">Source code</div>
        <Link href="https://github.com/adamzerner/rfui/blob/master/routes/atoms/ul.tsx">
          https://github.com/adamzerner/rfui/blob/master/routes/atoms/ul.tsx
        </Link>
      </div>
      <Examples title="Default">
        <UL>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </UL>
      </Examples>
      <Examples title="Outside">
        <Stack class="gap-5">
          <UL bulletLocation="outside" bulletType="bullet">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UL>
          <UL bulletLocation="outside" bulletType="check">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UL>
          <UL bulletLocation="outside" bulletType="arrow">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UL>
          <UL bulletLocation="outside" bulletType="triangle">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UL>
        </Stack>
      </Examples>
      <Examples title="Bullet type">
        <Stack class="gap-5">
          <UL bulletType="bullet">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UL>
          <UL bulletType="check">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UL>
          <UL bulletType="arrow">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UL>
          <UL bulletType="triangle">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UL>
        </Stack>
      </Examples>
      <Examples title="Bigger">
        <Stack class="gap-5">
          <UL bulletType="bullet" class="text-xl">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UL>
          <UL bulletType="check" class="text-xl">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UL>
          <UL bulletType="arrow" class="text-xl">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UL>
          <UL bulletType="triangle" class="text-xl">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UL>
        </Stack>
      </Examples>
      <Examples title="Color">
        <Stack class="gap-5">
          <UL bulletType="bullet" class="text-neutral-500">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UL>
          <UL bulletType="check" class="text-neutral-500">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UL>
          <UL bulletType="arrow" class="text-neutral-500">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UL>
          <UL bulletType="triangle" class="text-neutral-500">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </UL>
        </Stack>
      </Examples>
      <Examples title="Custom">
        <UL bulletType="none">
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
        </UL>
      </Examples>
    </Stack>
  );
};
