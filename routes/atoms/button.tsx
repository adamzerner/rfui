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
            <Button kind="primary" size="sm">
              submit
            </Button>
            <Button kind="secondary" size="sm">submit</Button>
            <Button kind="tertiary" size="sm">submit</Button>
          </div>
          <div class="flex gap-3">
            <Button kind="primary" size="md">
              submit
            </Button>
            <Button kind="secondary" size="md">submit</Button>
            <Button kind="tertiary" size="md">submit</Button>
          </div>
          <div class="flex gap-3">
            <Button kind="primary" size="lg">
              submit
            </Button>
            <Button kind="secondary" size="lg">submit</Button>
            <Button kind="tertiary" size="lg">submit</Button>
          </div>
          <div class="w-full flex flex-col gap-3">
            <Button kind="primary" size="block">submit</Button>
            <Button kind="secondary" size="block">submit</Button>
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
        <Examples title="Icon">
          <div class="flex gap-3">
            <Button kind="primary" icon={<span>←</span>}>
              previous
            </Button>
            <Button kind="secondary" icon={<span>←</span>}>previous</Button>
          </div>
          <div class="flex gap-3">
            <Button kind="primary" _rightIcon={<span>→</span>}>
              next
            </Button>
            <Button kind="secondary" _rightIcon={<span>→</span>}>next</Button>
          </div>
        </Examples>
      </div>
    </>
  );
};
