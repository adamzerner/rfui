import { Link } from "@/components/atoms/link.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { Card } from "@/components/molecules/card.tsx";
import { Examples } from "@/islands/demo/examples.tsx";

export default () => {
  return (
    <Stack class="gap-8">
      <div>
        <div class="text-2xl mb-3">Source code</div>
        <Link href="https://github.com/adamzerner/rfui/blob/master/routes/molecules/card.tsx">
          https://github.com/adamzerner/rfui/blob/master/routes/molecules/card.tsx
        </Link>
      </div>
      <Examples title="Default">
        <Card>Examle</Card>
      </Examples>
    </Stack>
  );
};
