import { Button } from "@/components/atoms/button.tsx";
import { Examples } from "@/islands/demo/examples.tsx";

export default () => {
  return (
    <>
      <div class="mb-8">
        <a
          href="https://github.com/adamzerner/rfui/blob/master/routes/atoms/button.tsx"
          class="underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          https://github.com/adamzerner/rfui/blob/master/routes/atoms/button.tsx
        </a>
      </div>
      <div class="flex flex-col gap-8">
        <Examples title="Kind">
          <div class="flex gap-3">
            <Button kind="primary">
              submit
            </Button>
            <Button kind="secondary">submit</Button>
            <Button kind="tertiary">submit</Button>
          </div>
        </Examples>
        <Examples title="Size">
          <div class="flex gap-3">
            <Button kind="primary" sz="sm">
              submit
            </Button>
            <Button kind="secondary" sz="sm">submit</Button>
            <Button kind="tertiary" sz="sm">submit</Button>
          </div>
          <div class="flex gap-3">
            <Button kind="primary" sz="md">
              submit
            </Button>
            <Button kind="secondary" sz="md">submit</Button>
            <Button kind="tertiary" sz="md">submit</Button>
          </div>
          <div class="flex gap-3">
            <Button kind="primary" sz="lg">
              submit
            </Button>
            <Button kind="secondary" sz="lg">submit</Button>
            <Button kind="tertiary" sz="lg">submit</Button>
          </div>
          <div class="w-full flex flex-col gap-3">
            <Button kind="primary" sz="block">submit</Button>
            <Button kind="secondary" sz="block">submit</Button>
            <Button kind="tertiary" sz="block">submit</Button>
          </div>
        </Examples>
        <Examples title="Rounded">
          <div class="flex gap-3">
            <Button kind="primary" rounded="square">
              submit
            </Button>
            <Button kind="secondary" rounded="square">submit</Button>
            <Button kind="tertiary" rounded="square">submit</Button>
          </div>
          <div class="flex gap-3">
            <Button kind="primary" rounded="sm">
              submit
            </Button>
            <Button kind="secondary" rounded="sm">submit</Button>
            <Button kind="tertiary" rounded="sm">submit</Button>
          </div>
          <div class="flex gap-3">
            <Button kind="primary" rounded="lg">
              submit
            </Button>
            <Button kind="secondary" rounded="lg">submit</Button>
            <Button kind="tertiary" rounded="lg">submit</Button>
          </div>
          <div class="flex gap-3">
            <Button kind="primary" rounded="full">
              submit
            </Button>
            <Button kind="secondary" rounded="full">submit</Button>
            <Button kind="tertiary" rounded="full">submit</Button>
          </div>
        </Examples>
      </div>
    </>
  );
};
