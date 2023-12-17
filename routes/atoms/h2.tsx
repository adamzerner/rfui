import { H2 } from "@/components/atoms/h2.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Stack } from "@/components/helpers/stack.tsx";

export default () => {
  return (
    <Stack class="gap-8">
      <div>
        <div class="text-2xl mb-3">Source code</div>
        <Link href="https://github.com/adamzerner/rfui/blob/master/routes/atoms/h2.tsx">
          https://github.com/adamzerner/rfui/blob/master/routes/atoms/h2.tsx
        </Link>
      </div>
      <H2>Header</H2>
      <div>
        Quod enim vitae et. Impedit ut maxime fugit excepturi harum qui.
        Praesentium pariatur nisi ut rerum et dolores sed.
      </div>
    </Stack>
  );
};
