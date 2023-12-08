import { Button } from "@/components/atoms/button.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Flex } from "@/components/helpers/flex.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@/components/molecules/card.tsx";
import { FormField } from "@/components/molecules/form-field.tsx";
import { Examples } from "@/islands/demo/examples.tsx";

export default () => {
  return (
    <Stack class="gap-8">
      <div>
        <div class="text-2xl mb-3">Source code</div>
        <Link href="https://github.com/adamzerner/rfui/blob/master/routes/molecules/card.tsx">
          https://github.com/adamzerner/rfui/blob/master/routes/molecules/card.tsx
        </Link>
      </div>
      <Examples title="Default">
        <Card>Example</Card>
      </Examples>
      <Examples title="CardBody">
        <Card>
          <CardBody>Body</CardBody>
        </Card>
      </Examples>
      <Examples title="CardHeader and CardBody">
        <Card>
          <CardHeader>Header</CardHeader>
          <CardBody>Body</CardBody>
        </Card>
      </Examples>
      <Examples title="CardBody and CardFooter">
        <Card>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Examples>
      <Examples title="CardHeader, CardBody and CardFooter">
        <Card>
          <CardHeader>Header</CardHeader>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Examples>
      <Examples title="Rounded">
        <Stack class="gap-5">
          <Card rounded="square">
            <CardHeader>Header</CardHeader>
            <CardBody>Body</CardBody>
            <CardFooter>Footer</CardFooter>
          </Card>
          <Card rounded="sm">
            <CardHeader>Header</CardHeader>
            <CardBody>Body</CardBody>
            <CardFooter>Footer</CardFooter>
          </Card>
          <Card rounded="lg">
            <CardHeader>Header</CardHeader>
            <CardBody>Body</CardBody>
            <CardFooter>Footer</CardFooter>
          </Card>
        </Stack>
      </Examples>
      <Examples title="Width">
        <Stack class="gap-5 w-full">
          <Card width="sm">
            <CardHeader>Header</CardHeader>
            <CardBody>Body</CardBody>
            <CardFooter>Footer</CardFooter>
          </Card>
          <Card width="md">
            <CardHeader>Header</CardHeader>
            <CardBody>Body</CardBody>
            <CardFooter>Footer</CardFooter>
          </Card>
          <Card width="lg">
            <CardHeader>Header</CardHeader>
            <CardBody>Body</CardBody>
            <CardFooter>Footer</CardFooter>
          </Card>
          <Card width="full">
            <CardHeader>Header</CardHeader>
            <CardBody>Body</CardBody>
            <CardFooter>Footer</CardFooter>
          </Card>
        </Stack>
      </Examples>
      <Examples title="Shadow">
        <Stack class="gap-5">
          <Card shadow="sm">
            <CardHeader>Header</CardHeader>
            <CardBody>Body</CardBody>
            <CardFooter>Footer</CardFooter>
          </Card>
          <Card shadow="md">
            <CardHeader>Header</CardHeader>
            <CardBody>Body</CardBody>
            <CardFooter>Footer</CardFooter>
          </Card>
          <Card shadow="lg">
            <CardHeader>Header</CardHeader>
            <CardBody>Body</CardBody>
            <CardFooter>Footer</CardFooter>
          </Card>
        </Stack>
      </Examples>
      <Examples title="Realistic">
        <Card>
          <CardHeader>
            <h1 class="font-bold">Profile</h1>
          </CardHeader>
          <CardBody>
            <div class="text-neutral-500 mb-6">
              Please fill out the following information.
            </div>
            <Stack class="gap-3">
              <FormField label="Name" type="text" />
              <FormField label="Email" type="email" />
              <FormField label="Age" type="number" />
            </Stack>
          </CardBody>
          <CardFooter>
            <Flex class="gap-2">
              <Button variant="primary">Submit</Button>
              <Button>Cancel</Button>
            </Flex>
          </CardFooter>
        </Card>
      </Examples>
      <Examples title="Top accent">
        <Card topAccent rounded="square">
          <CardHeader>
            <h1 class="font-bold">Profile</h1>
          </CardHeader>
          <CardBody>
            <div class="text-neutral-500 mb-6">
              Please fill out the following information.
            </div>
            <Stack class="gap-3">
              <FormField label="Name" type="text" />
              <FormField label="Email" type="email" />
              <FormField label="Age" type="number" />
            </Stack>
          </CardBody>
          <CardFooter>
            <Flex class="gap-2">
              <Button variant="primary">Submit</Button>
              <Button>Cancel</Button>
            </Flex>
          </CardFooter>
        </Card>
      </Examples>
      <Examples title="Left accent">
        <Card leftAccent rounded="square">
          <CardHeader>
            <h1 class="font-bold">Profile</h1>
          </CardHeader>
          <CardBody>
            <div class="text-neutral-500 mb-6">
              Please fill out the following information.
            </div>
            <Stack class="gap-3">
              <FormField label="Name" type="text" />
              <FormField label="Email" type="email" />
              <FormField label="Age" type="number" />
            </Stack>
          </CardBody>
          <CardFooter>
            <Flex class="gap-2">
              <Button variant="primary">Submit</Button>
              <Button>Cancel</Button>
            </Flex>
          </CardFooter>
        </Card>
      </Examples>
    </Stack>
  );
};
