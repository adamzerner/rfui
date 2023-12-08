import { Link } from "@/components/atoms/link.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { Card, CardBody, CardFooter, CardHeader } from "@/components/molecules/card.tsx";
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
    </Stack>
  );
};
