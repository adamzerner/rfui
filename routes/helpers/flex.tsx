import { Link } from "@/components/atoms/link.tsx";
import { Flex } from "@/components/helpers/flex.tsx";

export default () => {
  return (
    <div class="flex flex-col gap-8">
      <div>
        <div class="text-2xl mb-3">Source code</div>
        <Link href="https://github.com/adamzerner/rfui/blob/master/routes/helpers/flex.tsx">
          https://github.com/adamzerner/rfui/blob/master/routes/helpers/flex.tsx
        </Link>
      </div>
      <div>
        <Flex gap="2">
          <div>left</div>
          <div>middle</div>
          <div>right</div>
        </Flex>
      </div>
    </div>
  );
};
