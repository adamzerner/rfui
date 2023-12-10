import { Link } from "@/components/atoms/link.tsx";
import { Stack } from "@/components/helpers/stack.tsx";

export default () => {
  return (
    <Stack class="gap-8">
      <div>
        <div class="text-2xl mb-3">Source code</div>
        <Link href="https://github.com/adamzerner/rfui/blob/master/routes/molecules/footer.tsx">
          https://github.com/adamzerner/rfui/blob/master/routes/molecules/footer.tsx
        </Link>
      </div>
    </Stack>
  );
};
