import { Link } from "@/components/atoms/link.tsx";
import { Stack } from "@/components/helpers/stack.tsx";

export default () => {
  return (
    <div class="flex flex-col gap-8">
      <div>
        <div class="text-2xl mb-3">Source code</div>
        <Link href="https://github.com/adamzerner/rfui/blob/master/routes/helpers/stack.tsx">
          https://github.com/adamzerner/rfui/blob/master/routes/helpers/stack.tsx
        </Link>
      </div>
      <div>
        <Stack gap="2">
          <div>top</div>
          <div>middle</div>
          <div>bottom</div>
        </Stack>
      </div>
    </div>
  );
};
