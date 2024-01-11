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
  RadioButtonCardGroup,
  RadioButtonCardGroupItem,
} from "@/islands/molecules/radio-button-card-group.tsx";

export default () => {
  const notes =
    "Add some flair and professionalism to your radio buttons and associated content.";
  const sections: SectionType[] = [{
    title: "Basic",
    example: (
      <RadioButtonCardGroup>
        <RadioButtonCardGroupItem>One</RadioButtonCardGroupItem>
        <RadioButtonCardGroupItem>Two</RadioButtonCardGroupItem>
        <RadioButtonCardGroupItem>Three</RadioButtonCardGroupItem>
      </RadioButtonCardGroup>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`import { RadioButtonCardGroup, RadioButtonCardGroupItem } from "rfui";

<RadioButtonCardGroup>
  <RadioButtonCardGroupItem>One</RadioButtonCardGroupItem>
  <RadioButtonCardGroupItem>Two</RadioButtonCardGroupItem>
  <RadioButtonCardGroupItem>Three</RadioButtonCardGroupItem>
</RadioButtonCardGroup>`}
      />
    ),
  }, {
    title: "Padding",
    example: (
      <Stack class="gap-5">
        <RadioButtonCardGroup padding="sm">
          <RadioButtonCardGroupItem>One</RadioButtonCardGroupItem>
          <RadioButtonCardGroupItem>Two</RadioButtonCardGroupItem>
          <RadioButtonCardGroupItem>Three</RadioButtonCardGroupItem>
        </RadioButtonCardGroup>
        <RadioButtonCardGroup padding="md">
          <RadioButtonCardGroupItem>One</RadioButtonCardGroupItem>
          <RadioButtonCardGroupItem>Two</RadioButtonCardGroupItem>
          <RadioButtonCardGroupItem>Three</RadioButtonCardGroupItem>
        </RadioButtonCardGroup>
        <RadioButtonCardGroup padding="lg">
          <RadioButtonCardGroupItem>One</RadioButtonCardGroupItem>
          <RadioButtonCardGroupItem>Two</RadioButtonCardGroupItem>
          <RadioButtonCardGroupItem>Three</RadioButtonCardGroupItem>
        </RadioButtonCardGroup>
      </Stack>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`import { RadioButtonCardGroup, RadioButtonCardGroupItem } from "rfui";

<Stack class="gap-5">
  <RadioButtonCardGroup padding="sm">
    <RadioButtonCardGroupItem>One</RadioButtonCardGroupItem>
    <RadioButtonCardGroupItem>Two</RadioButtonCardGroupItem>
    <RadioButtonCardGroupItem>Three</RadioButtonCardGroupItem>
  </RadioButtonCardGroup>
  <RadioButtonCardGroup padding="md">
    <RadioButtonCardGroupItem>One</RadioButtonCardGroupItem>
    <RadioButtonCardGroupItem>Two</RadioButtonCardGroupItem>
    <RadioButtonCardGroupItem>Three</RadioButtonCardGroupItem>
  </RadioButtonCardGroup>
  <RadioButtonCardGroup padding="lg">
    <RadioButtonCardGroupItem>One</RadioButtonCardGroupItem>
    <RadioButtonCardGroupItem>Two</RadioButtonCardGroupItem>
    <RadioButtonCardGroupItem>Three</RadioButtonCardGroupItem>
  </RadioButtonCardGroup>
</Stack>`}
      />
    ),
  }, {
    title: "Rounded",
    example: (
      <Stack class="gap-5">
        <RadioButtonCardGroup rounded="square">
          <RadioButtonCardGroupItem>One</RadioButtonCardGroupItem>
          <RadioButtonCardGroupItem>Two</RadioButtonCardGroupItem>
          <RadioButtonCardGroupItem>Three</RadioButtonCardGroupItem>
        </RadioButtonCardGroup>
        <RadioButtonCardGroup rounded="sm">
          <RadioButtonCardGroupItem>One</RadioButtonCardGroupItem>
          <RadioButtonCardGroupItem>Two</RadioButtonCardGroupItem>
          <RadioButtonCardGroupItem>Three</RadioButtonCardGroupItem>
        </RadioButtonCardGroup>
        <RadioButtonCardGroup rounded="lg">
          <RadioButtonCardGroupItem>One</RadioButtonCardGroupItem>
          <RadioButtonCardGroupItem>Two</RadioButtonCardGroupItem>
          <RadioButtonCardGroupItem>Three</RadioButtonCardGroupItem>
        </RadioButtonCardGroup>
      </Stack>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`import { RadioButtonCardGroup, RadioButtonCardGroupItem } from "rfui";

<Stack class="gap-5">
  <RadioButtonCardGroup rounded="square">
    <RadioButtonCardGroupItem>One</RadioButtonCardGroupItem>
    <RadioButtonCardGroupItem>Two</RadioButtonCardGroupItem>
    <RadioButtonCardGroupItem>Three</RadioButtonCardGroupItem>
  </RadioButtonCardGroup>
  <RadioButtonCardGroup rounded="sm">
    <RadioButtonCardGroupItem>One</RadioButtonCardGroupItem>
    <RadioButtonCardGroupItem>Two</RadioButtonCardGroupItem>
    <RadioButtonCardGroupItem>Three</RadioButtonCardGroupItem>
  </RadioButtonCardGroup>
  <RadioButtonCardGroup rounded="lg">
    <RadioButtonCardGroupItem>One</RadioButtonCardGroupItem>
    <RadioButtonCardGroupItem>Two</RadioButtonCardGroupItem>
    <RadioButtonCardGroupItem>Three</RadioButtonCardGroupItem>
  </RadioButtonCardGroup>
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
    name: "children",
    required: true,
    type: "ComponentChild",
    default: null,
    notes: null,
  }];
  const radioButtonCardGroupItemProps = [{
    name: "isSelected",
    required: false,
    type: "Signal<boolean>",
    default: null,
    notes: (
      <div>
        See the Preact docs for{" "}
        <Link href="https://preactjs.com/guide/v10/signals">signals</Link>.
      </div>
    ),
  }, {
    name: "radioButtonRest",
    required: false,
    type: 'Omit<RadioButtonType, "size">',
    default: null,
    notes: (
      <div>
        <div class="leading-relaxed">
          This gets spread to the <InlineCode>RadioButton</InlineCode> like so:
        </div>
        <CodeBlock
          language="tsx"
          code={`<div>
  ...
  <RadioButton {...radioButtonRest} />
</div>`}
        />
      </div>
    ),
  }, {
    name: "children",
    required: true,
    type: "ComponentChild",
    default: null,
    notes: null,
  }];

  return (
    <ComponentDocsPage
      sectionTitles={sections.map((s) => s.title)}
    >
      <Header
        componentName="RadioButtonCardGroup"
        sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/islands/molecules/radio-button-card-group.tsx"
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
      <Props subComponentTitle="RadioButtonCardGroupItem">
        {radioButtonCardGroupItemProps.map((prop) => (
          <Prop prop={prop}>
            {prop.notes}
          </Prop>
        ))}
      </Props>
    </ComponentDocsPage>
  );
};
