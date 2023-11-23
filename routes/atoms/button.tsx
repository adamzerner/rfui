import { Button } from "@/components/atoms/button.tsx";
import { Examples } from "@/islands/demo/examples.tsx";

export default () => {
  return (
    <div class="flex flex-col gap-8">
      <Examples title="Source code">
        <a
          href="https://github.com/adamzerner/rfui/blob/master/routes/atoms/button.tsx"
          class="underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          https://github.com/adamzerner/rfui/blob/master/routes/atoms/button.tsx
        </a>
      </Examples>
      <Examples title="Kind">
        <div class="flex gap-3">
          <Button kind="primary">
            Submit
          </Button>
          <Button kind="secondary">Submit</Button>
          <Button kind="tertiary">Submit</Button>
        </div>
      </Examples>
      <Examples title="Size">
        <div class="flex gap-3">
          <Button kind="primary" size="sm">
            Submit
          </Button>
          <Button kind="secondary" size="sm">Submit</Button>
          <Button kind="tertiary" size="sm">Submit</Button>
        </div>
        <div class="flex gap-3">
          <Button kind="primary" size="md">
            Submit
          </Button>
          <Button kind="secondary" size="md">Submit</Button>
          <Button kind="tertiary" size="md">Submit</Button>
        </div>
        <div class="flex gap-3">
          <Button kind="primary" size="lg">
            Submit
          </Button>
          <Button kind="secondary" size="lg">Submit</Button>
          <Button kind="tertiary" size="lg">Submit</Button>
        </div>
        <div class="w-full flex flex-col gap-3">
          <Button kind="primary" size="block">Submit</Button>
          <Button kind="secondary" size="block">Submit</Button>
        </div>
      </Examples>
      <Examples title="Rounded">
        <div class="flex gap-3">
          <Button kind="primary" rounded="square">
            Submit
          </Button>
          <Button kind="secondary" rounded="square">Submit</Button>
          <Button kind="tertiary" rounded="square">Submit</Button>
        </div>
        <div class="flex gap-3">
          <Button kind="primary" rounded="sm">
            Submit
          </Button>
          <Button kind="secondary" rounded="sm">Submit</Button>
          <Button kind="tertiary" rounded="sm">Submit</Button>
        </div>
        <div class="flex gap-3">
          <Button kind="primary" rounded="lg">
            Submit
          </Button>
          <Button kind="secondary" rounded="lg">Submit</Button>
          <Button kind="tertiary" rounded="lg">Submit</Button>
        </div>
        <div class="flex gap-3">
          <Button kind="primary" rounded="full">
            Submit
          </Button>
          <Button kind="secondary" rounded="full">Submit</Button>
          <Button kind="tertiary" rounded="full">Submit</Button>
        </div>
      </Examples>
      <Examples title="Icon">
        <div class="flex gap-3">
          <Button kind="primary" icon={<span>←</span>}>
            Previous
          </Button>
          <Button kind="secondary" icon={<span>←</span>}>Previous</Button>
        </div>
        <div class="flex gap-3">
          <Button kind="primary" _rightIcon={<span>→</span>}>
            Next
          </Button>
          <Button kind="secondary" _rightIcon={<span>→</span>}>Next</Button>
        </div>
      </Examples>
      <Examples title="Disabled">
        <div class="flex gap-3">
          <Button disabled={true} kind="primary">
            Submit
          </Button>
          <Button disabled={true} kind="secondary">Submit</Button>
          <Button disabled={true} kind="tertiary">Submit</Button>
        </div>
      </Examples>
      <Examples title="Loading">
        <div class="flex gap-3">
          <Button kind="primary" isLoading loadingContent="Submitting...">
            Submit
          </Button>
          <Button kind="secondary" isLoading loadingContent="Submitting...">
            Submit
          </Button>
          <Button kind="tertiary" isLoading loadingContent="Submitting...">
            Submit
          </Button>
        </div>
      </Examples>
    </div>
  );
};
