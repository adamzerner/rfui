import { Link } from "@/components/atoms/link.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { CloseIcon } from "@/components/icons/close-icon.tsx";

export default () => {
  return (
    <Stack class="gap-8">
      <div>
        <div class="text-2xl mb-3">Source code</div>
        <Link href="https://github.com/adamzerner/rfui/blob/master/routes/icons/close-icon.tsx">
          https://github.com/adamzerner/rfui/blob/master/routes/icons/close-icon.tsx
        </Link>
      </div>
      <div>
        <CloseIcon />
      </div>
    </Stack>
  );
};
