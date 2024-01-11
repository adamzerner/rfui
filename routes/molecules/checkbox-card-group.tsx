import { CodeBlock } from "@/islands/atoms/code-block.tsx";
import { H2 } from "@/islands/atoms/h2.tsx";
import { InlineCode } from "@/islands/atoms/inline-code.tsx";
import { Link } from "@/islands/atoms/link.tsx";
import { Text } from "@/islands/atoms/text.tsx";
import {
  Example,
  Header,
  Notes,
} from "@/islands/demo/component-docs-page/header.tsx";
import { ComponentDocsPage } from "@/islands/demo/component-docs-page/index.tsx";
import { Prop } from "@/islands/demo/component-docs-page/prop.tsx";
import { Props } from "@/islands/demo/component-docs-page/props.tsx";
import { SectionType } from "@/islands/demo/component-docs-page/section-type.ts";
import { Stack } from "@/islands/helpers/stack.tsx";
import { Card } from "@/islands/molecules/card.tsx";
import {
  CheckboxCardGroup,
  CheckboxCardGroupItem,
} from "@/islands/molecules/checkbox-card-group.tsx";

export default () => {
  const notes =
    "Add some flair and professionalism to your checkboxes and associated content.";
  const sections: SectionType[] = [{
    title: "Basic",
    example: (
      <CheckboxCardGroup>
        <CheckboxCardGroupItem>One</CheckboxCardGroupItem>
        <CheckboxCardGroupItem>Two</CheckboxCardGroupItem>
        <CheckboxCardGroupItem>Three</CheckboxCardGroupItem>
      </CheckboxCardGroup>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`import { CheckboxCardGroup, CheckboxCardGroupItem } from "rfui";

<CheckboxCardGroup>
  <CheckboxCardGroupItem>One</CheckboxCardGroupItem>
  <CheckboxCardGroupItem>Two</CheckboxCardGroupItem>
  <CheckboxCardGroupItem>Three</CheckboxCardGroupItem>
</CheckboxCardGroup>`}
      />
    ),
  }, {
    title: "Padding",
    example: (
      <Stack class="gap-5">
        <CheckboxCardGroup padding="sm">
          <CheckboxCardGroupItem>One</CheckboxCardGroupItem>
          <CheckboxCardGroupItem>Two</CheckboxCardGroupItem>
          <CheckboxCardGroupItem>Three</CheckboxCardGroupItem>
        </CheckboxCardGroup>
        <CheckboxCardGroup padding="md">
          <CheckboxCardGroupItem>One</CheckboxCardGroupItem>
          <CheckboxCardGroupItem>Two</CheckboxCardGroupItem>
          <CheckboxCardGroupItem>Three</CheckboxCardGroupItem>
        </CheckboxCardGroup>
        <CheckboxCardGroup padding="lg">
          <CheckboxCardGroupItem>One</CheckboxCardGroupItem>
          <CheckboxCardGroupItem>Two</CheckboxCardGroupItem>
          <CheckboxCardGroupItem>Three</CheckboxCardGroupItem>
        </CheckboxCardGroup>
      </Stack>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`import { CheckboxCardGroup, CheckboxCardGroupItem } from "rfui";

<Stack class="gap-5">
  <CheckboxCardGroup padding="sm">
    <CheckboxCardGroupItem>One</CheckboxCardGroupItem>
    <CheckboxCardGroupItem>Two</CheckboxCardGroupItem>
    <CheckboxCardGroupItem>Three</CheckboxCardGroupItem>
  </CheckboxCardGroup>
  <CheckboxCardGroup padding="md">
    <CheckboxCardGroupItem>One</CheckboxCardGroupItem>
    <CheckboxCardGroupItem>Two</CheckboxCardGroupItem>
    <CheckboxCardGroupItem>Three</CheckboxCardGroupItem>
  </CheckboxCardGroup>
  <CheckboxCardGroup padding="lg">
    <CheckboxCardGroupItem>One</CheckboxCardGroupItem>
    <CheckboxCardGroupItem>Two</CheckboxCardGroupItem>
    <CheckboxCardGroupItem>Three</CheckboxCardGroupItem>
  </CheckboxCardGroup>
</Stack>`}
      />
    ),
  }, {
    title: "Rounded",
    example: (
      <Stack class="gap-5">
        <CheckboxCardGroup rounded="square">
          <CheckboxCardGroupItem>One</CheckboxCardGroupItem>
          <CheckboxCardGroupItem>Two</CheckboxCardGroupItem>
          <CheckboxCardGroupItem>Three</CheckboxCardGroupItem>
        </CheckboxCardGroup>
        <CheckboxCardGroup rounded="sm">
          <CheckboxCardGroupItem>One</CheckboxCardGroupItem>
          <CheckboxCardGroupItem>Two</CheckboxCardGroupItem>
          <CheckboxCardGroupItem>Three</CheckboxCardGroupItem>
        </CheckboxCardGroup>
        <CheckboxCardGroup rounded="lg">
          <CheckboxCardGroupItem>One</CheckboxCardGroupItem>
          <CheckboxCardGroupItem>Two</CheckboxCardGroupItem>
          <CheckboxCardGroupItem>Three</CheckboxCardGroupItem>
        </CheckboxCardGroup>
      </Stack>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`import { CheckboxCardGroup, CheckboxCardGroupItem } from "rfui";

<Stack class="gap-5">
  <CheckboxCardGroup rounded="square">
    <CheckboxCardGroupItem>One</CheckboxCardGroupItem>
    <CheckboxCardGroupItem>Two</CheckboxCardGroupItem>
    <CheckboxCardGroupItem>Three</CheckboxCardGroupItem>
  </CheckboxCardGroup>
  <CheckboxCardGroup rounded="sm">
    <CheckboxCardGroupItem>One</CheckboxCardGroupItem>
    <CheckboxCardGroupItem>Two</CheckboxCardGroupItem>
    <CheckboxCardGroupItem>Three</CheckboxCardGroupItem>
  </CheckboxCardGroup>
  <CheckboxCardGroup rounded="lg">
    <CheckboxCardGroupItem>One</CheckboxCardGroupItem>
    <CheckboxCardGroupItem>Two</CheckboxCardGroupItem>
    <CheckboxCardGroupItem>Three</CheckboxCardGroupItem>
  </CheckboxCardGroup>
</Stack>`}
      />
    ),
  }];
  const props = [{
    name: "padding",
    required: false,
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    notes: null,
  }, {
    name: "rounded",
    required: false,
    type: '"square" | "sm" | "lg"',
    default: '"sm"',
    notes: null,
  }, {
    name: "checkboxRest",
    required: false,
    type: 'Omit<CheckboxType, "size">',
    default: null,
    notes: (
      <div>
        <div class="leading-relaxed">
          This gets spread to the <InlineCode>Checkbox</InlineCode> like so:
        </div>
        <CodeBlock
          language="tsx"
          code={`<div>
  ...
  <Checkbox {...checkboxRest} />
</div>`}
        />
      </div>
    ),
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
          <InlineCode>Card</InlineCode>, you could pass anything you normally
          would pass to <InlineCode>{"<div>"}</InlineCode>{" "}
          because the return value{" "}
          <Link href="https://github.com/adamzerner/rfui/blob/master/islands/molecules/checkbox-card-group.tsx">
            looks something like
          </Link>{" "}
          this:
        </div>
        <CodeBlock
          language="tsx"
          code={`<div class={containerClass} {...restWithoutClass}>
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
        componentName="CheckboxCardGroup"
        sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/islands/molecules/checkbox-card-group.tsx"
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
        {props.map((prop) => (
          <Prop prop={prop}>
            {prop.notes}
          </Prop>
        ))}
      </Props>
    </ComponentDocsPage>
  );
};
