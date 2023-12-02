import { Button } from "@/components/atoms/button.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Flex } from "@/components/helpers/flex.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { Examples } from "@/islands/demo/examples.tsx";

export default () => {
  return (
    <Stack class="gap-8">
      <div>
        <div class="text-2xl mb-3">Source code</div>
        <Link href="https://github.com/adamzerner/rfui/blob/master/routes/atoms/button.tsx">
          https://github.com/adamzerner/rfui/blob/master/routes/atoms/button.tsx
        </Link>
      </div>
      <Examples title="Variant">
        <Flex class="gap-3">
          <Button variant="primary">
            Submit
          </Button>
          <Button variant="secondary">Submit</Button>
          <Button variant="tertiary">Submit</Button>
        </Flex>
      </Examples>
      <Examples title="Danger variants">
        <Flex class="gap-3">
          <Button variant="danger-primary">
            Submit
          </Button>
          <Button variant="danger-secondary">
            Submit
          </Button>
          <Button variant="danger-tertiary">
            Submit
          </Button>
        </Flex>
      </Examples>
      <Examples title="Size">
        <Flex class="gap-3">
          <Button variant="primary" size="sm">
            Submit
          </Button>
          <Button variant="secondary" size="sm">Submit</Button>
          <Button variant="tertiary" size="sm">Submit</Button>
        </Flex>
        <Flex class="gap-3">
          <Button variant="primary" size="md">
            Submit
          </Button>
          <Button variant="secondary" size="md">Submit</Button>
          <Button variant="tertiary" size="md">Submit</Button>
        </Flex>
        <Flex class="gap-3">
          <Button variant="primary" size="lg">
            Submit
          </Button>
          <Button variant="secondary" size="lg">Submit</Button>
          <Button variant="tertiary" size="lg">Submit</Button>
        </Flex>
        <Stack class="gap-3 w-full">
          <Button variant="primary" size="block">Submit</Button>
          <Button variant="secondary" size="block">Submit</Button>
        </Stack>
      </Examples>
      <Examples title="Rounded">
        <Flex class="gap-3">
          <Button variant="primary" rounded="square">
            Submit
          </Button>
          <Button variant="secondary" rounded="square">Submit</Button>
          <Button variant="tertiary" rounded="square">Submit</Button>
        </Flex>
        <Flex class="gap-3">
          <Button variant="primary" rounded="sm">
            Submit
          </Button>
          <Button variant="secondary" rounded="sm">Submit</Button>
          <Button variant="tertiary" rounded="sm">Submit</Button>
        </Flex>
        <Flex class="gap-3">
          <Button variant="primary" rounded="lg">
            Submit
          </Button>
          <Button variant="secondary" rounded="lg">Submit</Button>
          <Button variant="tertiary" rounded="lg">Submit</Button>
        </Flex>
        <Flex class="gap-3">
          <Button variant="primary" rounded="full">
            Submit
          </Button>
          <Button variant="secondary" rounded="full">Submit</Button>
          <Button variant="tertiary" rounded="full">Submit</Button>
        </Flex>
      </Examples>
      <Examples title="Icon">
        <Flex class="gap-3">
          <Button variant="primary" icon={<span>←</span>}>
            Previous
          </Button>
          <Button variant="secondary" icon={<span>←</span>}>Previous</Button>
        </Flex>
        <Flex class="gap-3">
          <Button variant="primary" _rightIcon={<span>→</span>}>
            Next
          </Button>
          <Button variant="secondary" _rightIcon={<span>→</span>}>Next</Button>
        </Flex>
      </Examples>
      <Examples title="Disabled">
        <Flex class="gap-3">
          <Button disabled={true} variant="primary">
            Submit
          </Button>
          <Button disabled={true} variant="secondary">Submit</Button>
          <Button disabled={true} variant="tertiary">Submit</Button>
        </Flex>
      </Examples>
      <Examples title="Loading">
        <Flex class="gap-3">
          <Button variant="primary" isLoading loadingContent="Submitting...">
            Submit
          </Button>
          <Button variant="secondary" isLoading loadingContent="Submitting...">
            Submit
          </Button>
          <Button variant="tertiary" isLoading loadingContent="Submitting...">
            Submit
          </Button>
        </Flex>
      </Examples>
    </Stack>
  );
};
