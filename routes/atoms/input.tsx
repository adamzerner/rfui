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
      <Examples title="Size">
        <div class="flex flex-col gap-5">
          <Input size="sm" />
          <Input size="md" />
          <Input size="lg" />
        </div>
      </Examples>
      <Examples title="Rounded">
        <div class="flex flex-col gap-5">
          <Input rounded="square" />
          <Input rounded="sm" />
          <Input rounded="lg" />
          <Input rounded="full" />
        </div>
      </Examples>
      <Examples title="Disabled">
        <Input disabled />
      </Examples>
      <Examples title="Readonly">
        <Input readonly value="example" />
      </Examples>
      <Examples title="Invalid">
        <Input invalid value="example" />
      </Examples>
      <Examples title="Type">
        <div class="flex flex-col gap-5">
          <Input type="text" placeholder="text" />
          <Input type="email" placeholder="email" />
          <Input type="number" />
          <Input type="password" value="foobar" />
          <Input type="date" />
          <Input type="datetime-local" />
          <Input type="time" />
          <Input type="file" />
          <Input type="range" />
          <Input type="color" />
        </div>
      </Examples>
    </div>
  );
};
