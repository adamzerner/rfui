import { Input } from "@/components/atoms/input.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Examples } from "@/islands/demo/examples.tsx";

export default () => {
  return (
    <div class="flex flex-col gap-8">
      <div>
        <div class="text-2xl mb-3">Source code</div>
        <Link href="https://github.com/adamzerner/rfui/blob/master/routes/atoms/input.tsx">
          https://github.com/adamzerner/rfui/blob/master/routes/atoms/input.tsx
        </Link>
      </div>
      <Examples title="Rounded">
        <div class="flex flex-col gap-5">
          <Input rounded="square" />
          <Input rounded="sm" />
          <Input rounded="lg" />
          <Input rounded="full" />
        </div>
      </Examples>
    </div>
  );
};
