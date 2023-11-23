import { Button } from "@/components/atoms/button.tsx";
import { Examples } from "@/islands/demo/examples.tsx";

export default () => {
  return (
    <div class="flex flex-col gap-8">
      <div>
        <div class="text-2xl mb-3">Source code</div>
        <a
          href="https://github.com/adamzerner/rfui/blob/master/routes/atoms/link.tsx"
          class="underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          https://github.com/adamzerner/rfui/blob/master/routes/atoms/link.tsx
        </a>
      </div>
      <Examples title="Kind">
        <div class="flex gap-3">
          <Button kind="primary">
            Submit
          </Button>
          <Button kind="secondary">Submit</Button>
          <Button kind="tertiary">Submit</Button>
        </div>
      </Examples>
    </div>
  );
};
