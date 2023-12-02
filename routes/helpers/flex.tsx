import { Link } from "@/components/atoms/link.tsx";
import { Flex } from "@/components/helpers/flex.tsx";
import { Stack } from "@/components/helpers/stack.tsx";

export default () => {
  return (
    <Stack class="gap-8">
      <div>
        <div class="text-2xl mb-3">Source code</div>
        <Link href="https://github.com/adamzerner/rfui/blob/master/routes/helpers/flex.tsx">
          https://github.com/adamzerner/rfui/blob/master/routes/helpers/flex.tsx
        </Link>
      </div>
      <div>
        <Flex class="gap-8">
          <div>left</div>
          <div>middle</div>
          <div>right</div>
        </Flex>
      </div>
    </Stack>
  );
};
