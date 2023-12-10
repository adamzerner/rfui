import { Link } from "@/components/atoms/link.tsx";
import { Container } from "@/components/helpers/container.tsx";
import { Stack } from "@/components/helpers/stack.tsx";

export default () => {
  return (
    <Stack class="gap-8">
      <div>
        <div class="text-2xl mb-3">Source code</div>
        <Link href="https://github.com/adamzerner/rfui/blob/master/routes/helpers/container.tsx">
          https://github.com/adamzerner/rfui/blob/master/routes/helpers/container.tsx
        </Link>
      </div>
      <div>
        <Container class="bg-neutral-100">
          <div>content</div>
        </Container>
      </div>
    </Stack>
  );
};
