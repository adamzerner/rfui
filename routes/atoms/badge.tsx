import { Link } from "@/components/atoms/link.tsx";
import { Examples } from "@/islands/demo/examples.tsx";

export default () => {
  return (
    <div class="flex flex-col gap-8">
      <div>
        <div class="text-2xl mb-3">Source code</div>
        <Link href="https://github.com/adamzerner/rfui/blob/master/routes/atoms/badge.tsx">
          https://github.com/adamzerner/rfui/blob/master/routes/atoms/badge.tsx
        </Link>
      </div>
      <Examples title="Underline">
        <div class="flex gap-3">
          <Link underline="always" href="https://example.com">always</Link>
          <Link underline="hover" href="https://example.com">hover</Link>
          <Link underline="none" href="https://example.com">none</Link>
        </div>
      </Examples>
    </div>
  );
};
