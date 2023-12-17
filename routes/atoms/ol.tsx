import { Link } from "@/components/atoms/link.tsx";
import { OL } from "@/components/atoms/ol.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { Examples } from "@/islands/demo/examples.tsx";

export default () => {
  return (
    <Stack class="gap-8">
      <div>
        <div class="text-2xl mb-3">Source code</div>
        <Link href="https://github.com/adamzerner/rfui/blob/master/routes/atoms/ol.tsx">
          https://github.com/adamzerner/rfui/blob/master/routes/atoms/ol.tsx
        </Link>
      </div>
      <Examples title="Default">
        <OL>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
        </OL>
      </Examples>
      <Examples title="Outside">
        <OL bulletLocation="outside">
          <li>First</li>
          <li>Two</li>
          <li>Three</li>
        </OL>
      </Examples>
    </Stack>
  );
};
