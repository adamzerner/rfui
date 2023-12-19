import { Badge } from "@/components/atoms/badge.tsx";
import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Flex } from "@/components/helpers/flex.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { ComponentDocsPage } from "@/islands/demo/component-docs-page.tsx";

export default () => {
  const sections = [{
    title: "Basic",
    example: () => <Badge>Basic</Badge>,
    exampleCode: () => (
      <CodeBlock class="mt-4">
        {`<Badge>Basic</Badge>`}
      </CodeBlock>
    ),
  }, {
    title: "Type",
    description: (
      <p>
        Set <InlineCode>type</InlineCode> to either{" "}
        <InlineCode>"neutral"</InlineCode>, <InlineCode>"info"</InlineCode>,
        {" "}
        <InlineCode>"success"</InlineCode>,{" "}
        <InlineCode>"warning"</InlineCode>, or{" "}
        <InlineCode>"danger"</InlineCode>. Defaults to{" "}
        <InlineCode>"neutral"</InlineCode>.
      </p>
    ),
    example: () => (
      <Flex class="gap-3">
        <Badge type="neutral">neutral</Badge>
        <Badge type="info">info</Badge>
        <Badge type="success">success</Badge>
        <Badge type="warning">warning</Badge>
        <Badge type="danger">danger</Badge>
      </Flex>
    ),
    exampleCode: () => (
      <CodeBlock class="mt-4">
        {`<Flex class="gap-3">
  <Badge type="neutral">neutral</Badge>
  <Badge type="info">info</Badge>
  <Badge type="success">success</Badge>
  <Badge type="warning">warning</Badge>
  <Badge type="danger">danger</Badge>
</Flex>
`}
      </CodeBlock>
    ),
  }, {
    title: "Size",
    description: (
      <p>
        Set <InlineCode>size</InlineCode> to either{" "}
        <InlineCode>"sm"</InlineCode>, <InlineCode>"md"</InlineCode>, or{" "}
        <InlineCode>"lg"</InlineCode>. Defaults to{" "}
        <InlineCode>"md"</InlineCode>.
      </p>
    ),
    example: () => (
      <Stack class="gap-5">
        <Flex class="gap-3">
          <Badge type="neutral" size="sm">neutral</Badge>
          <Badge type="info" size="sm">info</Badge>
          <Badge type="success" size="sm">success</Badge>
          <Badge type="warning" size="sm">warning</Badge>
          <Badge type="danger" size="sm">danger</Badge>
        </Flex>
        <Flex class="gap-3">
          <Badge type="neutral" size="md">neutral</Badge>
          <Badge type="info" size="md">info</Badge>
          <Badge type="success" size="md">success</Badge>
          <Badge type="warning" size="md">warning</Badge>
          <Badge type="danger" size="md">danger</Badge>
        </Flex>
        <Flex class="gap-3">
          <Badge type="neutral" size="lg">neutral</Badge>
          <Badge type="info" size="lg">info</Badge>
          <Badge type="success" size="lg">success</Badge>
          <Badge type="warning" size="lg">warning</Badge>
          <Badge type="danger" size="lg">danger</Badge>
        </Flex>
      </Stack>
    ),
    exampleCode: () => (
      <CodeBlock class="mt-4">
        {`<Stack class="gap-5">
  <Flex class="gap-3">
    <Badge type="neutral" size="sm">neutral</Badge>
    <Badge type="info" size="sm">info</Badge>
    <Badge type="success" size="sm">success</Badge>
    <Badge type="warning" size="sm">warning</Badge>
    <Badge type="danger" size="sm">danger</Badge>
  </Flex>
  <Flex class="gap-3">
    <Badge type="neutral" size="md">neutral</Badge>
    <Badge type="info" size="md">info</Badge>
    <Badge type="success" size="md">success</Badge>
    <Badge type="warning" size="md">warning</Badge>
    <Badge type="danger" size="md">danger</Badge>
  </Flex>
  <Flex class="gap-3">
    <Badge type="neutral" size="lg">neutral</Badge>
    <Badge type="info" size="lg">info</Badge>
    <Badge type="success" size="lg">success</Badge>
    <Badge type="warning" size="lg">warning</Badge>
    <Badge type="danger" size="lg">danger</Badge>
  </Flex>
</Stack>
`}
      </CodeBlock>
    ),
  }, {
    title: "Rounded",
    description: (
      <p>
        Set <InlineCode>rounded</InlineCode> to either{" "}
        <InlineCode>"square"</InlineCode>, <InlineCode>"sm"</InlineCode>,{" "}
        <InlineCode>"lg"</InlineCode>, or{" "}
        <InlineCode>"full"</InlineCode>. Defaults to{" "}
        <InlineCode>"sm"</InlineCode>.
      </p>
    ),
    example: () => (
      <Stack class="gap-5">
        <Flex class="gap-3">
          <Badge type="neutral" rounded="square">neutral</Badge>
          <Badge type="info" rounded="square">info</Badge>
          <Badge type="success" rounded="square">success</Badge>
          <Badge type="warning" rounded="square">warning</Badge>
          <Badge type="danger" rounded="square">danger</Badge>
        </Flex>
        <Flex class="gap-3">
          <Badge type="neutral" rounded="sm">neutral</Badge>
          <Badge type="info" rounded="sm">info</Badge>
          <Badge type="success" rounded="sm">success</Badge>
          <Badge type="warning" rounded="sm">warning</Badge>
          <Badge type="danger" rounded="sm">danger</Badge>
        </Flex>
        <Flex class="gap-3">
          <Badge type="neutral" rounded="lg">neutral</Badge>
          <Badge type="info" rounded="lg">info</Badge>
          <Badge type="success" rounded="lg">success</Badge>
          <Badge type="warning" rounded="lg">warning</Badge>
          <Badge type="danger" rounded="lg">danger</Badge>
        </Flex>
        <Flex class="gap-3">
          <Badge type="neutral" rounded="full">neutral</Badge>
          <Badge type="info" rounded="full">info</Badge>
          <Badge type="success" rounded="full">success</Badge>
          <Badge type="warning" rounded="full">warning</Badge>
          <Badge type="danger" rounded="full">danger</Badge>
        </Flex>
      </Stack>
    ),
    exampleCode: () => (
      <CodeBlock class="mt-4">
        {`<Stack class="gap-5">
  <Flex class="gap-3">
    <Badge type="neutral" rounded="square">neutral</Badge>
    <Badge type="info" rounded="square">info</Badge>
    <Badge type="success" rounded="square">success</Badge>
    <Badge type="warning" rounded="square">warning</Badge>
    <Badge type="danger" rounded="square">danger</Badge>
  </Flex>
  <Flex class="gap-3">
    <Badge type="neutral" rounded="sm">neutral</Badge>
    <Badge type="info" rounded="sm">info</Badge>
    <Badge type="success" rounded="sm">success</Badge>
    <Badge type="warning" rounded="sm">warning</Badge>
    <Badge type="danger" rounded="sm">danger</Badge>
  </Flex>
  <Flex class="gap-3">
    <Badge type="neutral" rounded="lg">neutral</Badge>
    <Badge type="info" rounded="lg">info</Badge>
    <Badge type="success" rounded="lg">success</Badge>
    <Badge type="warning" rounded="lg">warning</Badge>
    <Badge type="danger" rounded="lg">danger</Badge>
  </Flex>
  <Flex class="gap-3">
    <Badge type="neutral" rounded="full">neutral</Badge>
    <Badge type="info" rounded="full">info</Badge>
    <Badge type="success" rounded="full">success</Badge>
    <Badge type="warning" rounded="full">warning</Badge>
    <Badge type="danger" rounded="full">danger</Badge>
  </Flex>
</Stack>
`}
      </CodeBlock>
    ),
  }];
  const props = [{
    name: "type",
    type: '"neutral" | "info" | "success" | "warning" | "danger"',
    default: '"neutral"',
    notes: "-",
  }, {
    name: "size",
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    notes: "-",
  }, {
    name: "rounded",
    type: '"square" | "sm" | "lg" | "full"',
    default: '"sm"',
    notes: "-",
  }, {
    name: "children",
    type: "ComponentChild",
    default: "-",
    notes: "-",
  }];

  return (
    <ComponentDocsPage
      componentName="Badge"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/atoms/badge.tsx"
      sections={sections}
      props={props}
    />
  );
};
