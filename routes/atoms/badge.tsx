import { Badge } from "@/components/atoms/badge.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Flex } from "@/components/helpers/flex.tsx";
import { Examples } from "@/islands/demo/examples.tsx";

export default () => {
  return (
    <div class="flex flex-col gap-8">
      <div>
        <div class="text-2xl mb-3">Source code</div>
        <Link href="https://github.com/adamzerner/rfui/blob/master/routes/atoms/badge.tsx">
          https://github.com/adamzerner/rfui/blob/master/routes/atoms/badge.tsx
        </Link>
      </div>
      <Examples title="Type">
        <Flex gap="3">
          <Badge type="neutral">neutral</Badge>
          <Badge type="info">info</Badge>
          <Badge type="success">success</Badge>
          <Badge type="warning">warning</Badge>
          <Badge type="danger">danger</Badge>
        </Flex>
      </Examples>
      <Examples title="Size">
        <Flex gap="3">
          <Badge type="neutral" size="sm">neutral</Badge>
          <Badge type="info" size="sm">info</Badge>
          <Badge type="success" size="sm">success</Badge>
          <Badge type="warning" size="sm">warning</Badge>
          <Badge type="danger" size="sm">danger</Badge>
        </Flex>
        <Flex gap="3">
          <Badge type="neutral" size="md">neutral</Badge>
          <Badge type="info" size="md">info</Badge>
          <Badge type="success" size="md">success</Badge>
          <Badge type="warning" size="md">warning</Badge>
          <Badge type="danger" size="md">danger</Badge>
        </Flex>
        <Flex gap="3">
          <Badge type="neutral" size="lg">neutral</Badge>
          <Badge type="info" size="lg">info</Badge>
          <Badge type="success" size="lg">success</Badge>
          <Badge type="warning" size="lg">warning</Badge>
          <Badge type="danger" size="lg">danger</Badge>
        </Flex>
      </Examples>
      <Examples title="Rounded">
        <Flex gap="3">
          <Badge type="neutral" rounded="square">square</Badge>
          <Badge type="info" rounded="square">square</Badge>
          <Badge type="success" rounded="square">square</Badge>
          <Badge type="warning" rounded="square">square</Badge>
          <Badge type="danger" rounded="square">square</Badge>
        </Flex>
        <Flex gap="3">
          <Badge type="neutral" rounded="sm">sm</Badge>
          <Badge type="info" rounded="sm">sm</Badge>
          <Badge type="success" rounded="sm">sm</Badge>
          <Badge type="warning" rounded="sm">sm</Badge>
          <Badge type="danger" rounded="sm">sm</Badge>
        </Flex>
        <Flex gap="3">
          <Badge type="neutral" rounded="lg">lg</Badge>
          <Badge type="info" rounded="lg">lg</Badge>
          <Badge type="success" rounded="lg">lg</Badge>
          <Badge type="warning" rounded="lg">lg</Badge>
          <Badge type="danger" rounded="lg">lg</Badge>
        </Flex>
        <Flex gap="3">
          <Badge type="neutral" rounded="full">full</Badge>
          <Badge type="info" rounded="full">full</Badge>
          <Badge type="success" rounded="full">full</Badge>
          <Badge type="warning" rounded="full">full</Badge>
          <Badge type="danger" rounded="full">full</Badge>
        </Flex>
      </Examples>
    </div>
  );
};
