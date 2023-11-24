import { Button } from "@/components/atoms/button.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Examples } from "@/islands/demo/examples.tsx";

export default () => {
  return (
    <div class="flex flex-col gap-8">
      <div>
        <div class="text-2xl mb-3">Source code</div>
        <Link href="https://github.com/adamzerner/rfui/blob/master/routes/atoms/button.tsx">
          https://github.com/adamzerner/rfui/blob/master/routes/atoms/button.tsx
        </Link>
      </div>
      <Examples title="Variant">
        <div class="flex gap-3">
          <Button variant="primary">
            Submit
          </Button>
          <Button variant="secondary">Submit</Button>
          <Button variant="tertiary">Submit</Button>
        </div>
      </Examples>
      <Examples title="Size">
        <div class="flex gap-3">
          <Button variant="primary" size="sm">
            Submit
          </Button>
          <Button variant="secondary" size="sm">Submit</Button>
          <Button variant="tertiary" size="sm">Submit</Button>
        </div>
        <div class="flex gap-3">
          <Button variant="primary" size="md">
            Submit
          </Button>
          <Button variant="secondary" size="md">Submit</Button>
          <Button variant="tertiary" size="md">Submit</Button>
        </div>
        <div class="flex gap-3">
          <Button variant="primary" size="lg">
            Submit
          </Button>
          <Button variant="secondary" size="lg">Submit</Button>
          <Button variant="tertiary" size="lg">Submit</Button>
        </div>
        <div class="w-full flex flex-col gap-3">
          <Button variant="primary" size="block">Submit</Button>
          <Button variant="secondary" size="block">Submit</Button>
        </div>
      </Examples>
      <Examples title="Rounded">
        <div class="flex gap-3">
          <Button variant="primary" rounded="square">
            Submit
          </Button>
          <Button variant="secondary" rounded="square">Submit</Button>
          <Button variant="tertiary" rounded="square">Submit</Button>
        </div>
        <div class="flex gap-3">
          <Button variant="primary" rounded="sm">
            Submit
          </Button>
          <Button variant="secondary" rounded="sm">Submit</Button>
          <Button variant="tertiary" rounded="sm">Submit</Button>
        </div>
        <div class="flex gap-3">
          <Button variant="primary" rounded="lg">
            Submit
          </Button>
          <Button variant="secondary" rounded="lg">Submit</Button>
          <Button variant="tertiary" rounded="lg">Submit</Button>
        </div>
        <div class="flex gap-3">
          <Button variant="primary" rounded="full">
            Submit
          </Button>
          <Button variant="secondary" rounded="full">Submit</Button>
          <Button variant="tertiary" rounded="full">Submit</Button>
        </div>
      </Examples>
      <Examples title="Icon">
        <div class="flex gap-3">
          <Button variant="primary" icon={<span>←</span>}>
            Previous
          </Button>
          <Button variant="secondary" icon={<span>←</span>}>Previous</Button>
        </div>
        <div class="flex gap-3">
          <Button variant="primary" _rightIcon={<span>→</span>}>
            Next
          </Button>
          <Button variant="secondary" _rightIcon={<span>→</span>}>Next</Button>
        </div>
      </Examples>
      <Examples title="Disabled">
        <div class="flex gap-3">
          <Button disabled={true} variant="primary">
            Submit
          </Button>
          <Button disabled={true} variant="secondary">Submit</Button>
          <Button disabled={true} variant="tertiary">Submit</Button>
        </div>
      </Examples>
      <Examples title="Loading">
        <div class="flex gap-3">
          <Button variant="primary" isLoading loadingContent="Submitting...">
            Submit
          </Button>
          <Button variant="secondary" isLoading loadingContent="Submitting...">
            Submit
          </Button>
          <Button variant="tertiary" isLoading loadingContent="Submitting...">
            Submit
          </Button>
        </div>
      </Examples>
    </div>
  );
};
