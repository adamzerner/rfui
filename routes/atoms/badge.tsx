import { Badge } from "@/components/atoms/badge.tsx";
import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { H2 } from "@/components/atoms/h2.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Text } from "@/components/atoms/text.tsx";
import {
  Example,
  Header,
  Notes,
} from "@/components/docs-site/component-docs-page/header.tsx";
import { ComponentDocsPage } from "@/components/docs-site/component-docs-page/index.tsx";
import { Prop } from "@/components/docs-site/component-docs-page/prop.tsx";
import { Props } from "@/components/docs-site/component-docs-page/props.tsx";
import { SectionType } from "@/components/docs-site/component-docs-page/section-type.ts";
import { Flex } from "@/components/helpers/flex.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { Card } from "@/components/molecules/card.tsx";

export default () => {
  const notes = null;
  const sections: SectionType[] = [{
    title: "Basic",
    example: <Badge>Basic</Badge>,
    exampleCode: (
      <CodeBlock class="mt-4" language="tsx" code={`<Badge>Basic</Badge>`} />
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
    example: (
      <Flex class="gap-3 flex-wrap">
        <Badge type="neutral">neutral</Badge>
        <Badge type="info">info</Badge>
        <Badge type="success">success</Badge>
        <Badge type="warning">warning</Badge>
        <Badge type="danger">danger</Badge>
      </Flex>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Flex class="gap-3 flex-wrap">
  <Badge type="neutral">neutral</Badge>
  <Badge type="info">info</Badge>
  <Badge type="success">success</Badge>
  <Badge type="warning">warning</Badge>
  <Badge type="danger">danger</Badge>
</Flex>
`}
      />
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
    example: (
      <Stack class="gap-5">
        <Flex class="gap-3 flex-wrap">
          <Badge type="neutral" size="sm">neutral</Badge>
          <Badge type="info" size="sm">info</Badge>
          <Badge type="success" size="sm">success</Badge>
          <Badge type="warning" size="sm">warning</Badge>
          <Badge type="danger" size="sm">danger</Badge>
        </Flex>
        <Flex class="gap-3 flex-wrap">
          <Badge type="neutral" size="md">neutral</Badge>
          <Badge type="info" size="md">info</Badge>
          <Badge type="success" size="md">success</Badge>
          <Badge type="warning" size="md">warning</Badge>
          <Badge type="danger" size="md">danger</Badge>
        </Flex>
        <Flex class="gap-3 flex-wrap">
          <Badge type="neutral" size="lg">neutral</Badge>
          <Badge type="info" size="lg">info</Badge>
          <Badge type="success" size="lg">success</Badge>
          <Badge type="warning" size="lg">warning</Badge>
          <Badge type="danger" size="lg">danger</Badge>
        </Flex>
      </Stack>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="gap-5">
  <Flex class="gap-3 flex-wrap">
    <Badge type="neutral" size="sm">neutral</Badge>
    <Badge type="info" size="sm">info</Badge>
    <Badge type="success" size="sm">success</Badge>
    <Badge type="warning" size="sm">warning</Badge>
    <Badge type="danger" size="sm">danger</Badge>
  </Flex>
  <Flex class="gap-3 flex-wrap">
    <Badge type="neutral" size="md">neutral</Badge>
    <Badge type="info" size="md">info</Badge>
    <Badge type="success" size="md">success</Badge>
    <Badge type="warning" size="md">warning</Badge>
    <Badge type="danger" size="md">danger</Badge>
  </Flex>
  <Flex class="gap-3 flex-wrap">
    <Badge type="neutral" size="lg">neutral</Badge>
    <Badge type="info" size="lg">info</Badge>
    <Badge type="success" size="lg">success</Badge>
    <Badge type="warning" size="lg">warning</Badge>
    <Badge type="danger" size="lg">danger</Badge>
  </Flex>
</Stack>
`}
      />
    ),
  }, {
    title: "Rounded",
    description: (
      <p>
        Set <InlineCode>rounded</InlineCode> to either{" "}
        <InlineCode>"square"</InlineCode>, <InlineCode>"sm"</InlineCode>,{" "}
        <InlineCode>"lg"</InlineCode>, or{" "}
        <InlineCode>"full"</InlineCode>. Defaults to the value of the CSS
        variable <InlineCode>--default-roundedness</InlineCode>. See{" "}
        <Link href="/default-roundedness">
          "Default roundedness"
        </Link>.
      </p>
    ),
    example: (
      <Stack class="gap-5">
        <Flex class="gap-3 flex-wrap">
          <Badge type="neutral" rounded="square">neutral</Badge>
          <Badge type="info" rounded="square">info</Badge>
          <Badge type="success" rounded="square">success</Badge>
          <Badge type="warning" rounded="square">warning</Badge>
          <Badge type="danger" rounded="square">danger</Badge>
        </Flex>
        <Flex class="gap-3 flex-wrap">
          <Badge type="neutral" rounded="sm">neutral</Badge>
          <Badge type="info" rounded="sm">info</Badge>
          <Badge type="success" rounded="sm">success</Badge>
          <Badge type="warning" rounded="sm">warning</Badge>
          <Badge type="danger" rounded="sm">danger</Badge>
        </Flex>
        <Flex class="gap-3 flex-wrap">
          <Badge type="neutral" rounded="lg">neutral</Badge>
          <Badge type="info" rounded="lg">info</Badge>
          <Badge type="success" rounded="lg">success</Badge>
          <Badge type="warning" rounded="lg">warning</Badge>
          <Badge type="danger" rounded="lg">danger</Badge>
        </Flex>
        <Flex class="gap-3 flex-wrap">
          <Badge type="neutral" rounded="full">neutral</Badge>
          <Badge type="info" rounded="full">info</Badge>
          <Badge type="success" rounded="full">success</Badge>
          <Badge type="warning" rounded="full">warning</Badge>
          <Badge type="danger" rounded="full">danger</Badge>
        </Flex>
      </Stack>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="gap-5">
  <Flex class="gap-3 flex-wrap">
    <Badge type="neutral" rounded="square">neutral</Badge>
    <Badge type="info" rounded="square">info</Badge>
    <Badge type="success" rounded="square">success</Badge>
    <Badge type="warning" rounded="square">warning</Badge>
    <Badge type="danger" rounded="square">danger</Badge>
  </Flex>
  <Flex class="gap-3 flex-wrap">
    <Badge type="neutral" rounded="sm">neutral</Badge>
    <Badge type="info" rounded="sm">info</Badge>
    <Badge type="success" rounded="sm">success</Badge>
    <Badge type="warning" rounded="sm">warning</Badge>
    <Badge type="danger" rounded="sm">danger</Badge>
  </Flex>
  <Flex class="gap-3 flex-wrap">
    <Badge type="neutral" rounded="lg">neutral</Badge>
    <Badge type="info" rounded="lg">info</Badge>
    <Badge type="success" rounded="lg">success</Badge>
    <Badge type="warning" rounded="lg">warning</Badge>
    <Badge type="danger" rounded="lg">danger</Badge>
  </Flex>
  <Flex class="gap-3 flex-wrap">
    <Badge type="neutral" rounded="full">neutral</Badge>
    <Badge type="info" rounded="full">info</Badge>
    <Badge type="success" rounded="full">success</Badge>
    <Badge type="warning" rounded="full">warning</Badge>
    <Badge type="danger" rounded="full">danger</Badge>
  </Flex>
</Stack>
`}
      />
    ),
  }];
  const props = [{
    name: "type",
    required: false,
    type: '"neutral" | "info" | "success" | "warning" | "danger"',
    default: '"neutral"',
    notes: null,
  }, {
    name: "size",
    required: false,
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    notes: null,
  }, {
    name: "rounded",
    required: false,
    type: '"square" | "sm" | "lg" | "full"',
    default: null,
    notes: (
      <div>
        Defaults to the value of the CSS variable{" "}
        <InlineCode>--default-roundedness</InlineCode>. See{" "}
        <Link href="/default-roundedness">
          "Default roundedness"
        </Link>.
      </div>
    ),
  }, {
    name: "children",
    required: true,
    type: "ComponentChild",
    default: null,
    notes: null,
  }, {
    name: "...rest",
    required: false,
    type: 'Omit<JSX.HTMLAttributes<HTMLDivElement>, "size">',
    default: null,
    notes: (
      <div>
        <div class="leading-relaxed">
          See the docs for{" "}
          <Link href="/rest-parameters">rest parameters</Link>. For{" "}
          <InlineCode>Badge</InlineCode>, you could pass anything you normally
          would pass to <InlineCode>{"<div>"}</InlineCode> because the container
          {" "}
          <Link href="https://github.com/adamzerner/rfui/blob/master/islands/atoms/badge.tsx">
            looks something like
          </Link>{" "}
          this:
        </div>
        <CodeBlock
          language="tsx"
          code={`<div class={className} {...restWithoutClass}>
  {children}
</div>`}
        />
      </div>
    ),
  }];

  return (
    <ComponentDocsPage
      sectionTitles={sections.map((s) => s.title)}
    >
      <Header
        componentName="Badge"
        sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/atoms/badge.tsx"
      >
        <Example>{sections[0].example}</Example>
        <Notes>{notes}</Notes>
      </Header>
      {sections.map((section) => (
        <section>
          <H2 inPageLink={section.title.toLowerCase().split(/\s+/).join("-")}>
            {section.title}
          </H2>
          {section.description &&
            (
              <Text size="sm" class="mb-6">
                {section.description}
              </Text>
            )}
          <Card width="full" class="mb-4">{section.example}</Card>
          {section.exampleCode}
        </section>
      ))}
      <Props>
        {props.map((prop) => {
          const { notes, ...propWithoutNotes } = prop;

          return notes
            ? (
              <Prop prop={prop}>
                {notes}
              </Prop>
            )
            : <Prop prop={propWithoutNotes}></Prop>;
        })}
      </Props>
    </ComponentDocsPage>
  );
};
