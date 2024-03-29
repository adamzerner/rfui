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
import { Stack } from "@/components/helpers/stack.tsx";
import { Card } from "@/components/molecules/card.tsx";
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
        code={`<CheckboxCardGroup>
  <CheckboxCardGroupItem>One</CheckboxCardGroupItem>
  <CheckboxCardGroupItem>Two</CheckboxCardGroupItem>
  <CheckboxCardGroupItem>Three</CheckboxCardGroupItem>
</CheckboxCardGroup>`}
      />
    ),
  }, {
    title: "Uncontrolled",
    description: (
      <div>
        The approach below leads to <InlineCode>name</InlineCode>{" "}
        being passed to <InlineCode>{`<input type="checkbox" />`}</InlineCode>.
      </div>
    ),
    example: (
      <CheckboxCardGroup>
        <CheckboxCardGroupItem checkboxRest={{ name: "one" }}>
          One
        </CheckboxCardGroupItem>
        <CheckboxCardGroupItem checkboxRest={{ name: "two" }}>
          Two
        </CheckboxCardGroupItem>
        <CheckboxCardGroupItem checkboxRest={{ name: "three" }}>
          Three
        </CheckboxCardGroupItem>
      </CheckboxCardGroup>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<CheckboxCardGroup>
  <CheckboxCardGroupItem checkboxRest={{ name: "one" }}>
    One
  </CheckboxCardGroupItem>
  <CheckboxCardGroupItem checkboxRest={{ name: "two" }}>
    Two
  </CheckboxCardGroupItem>
  <CheckboxCardGroupItem checkboxRest={{ name: "three" }}>
    Three
  </CheckboxCardGroupItem>
</CheckboxCardGroup>`}
      />
    ),
  }, {
    title: "Controlled",
    description: (
      <div>
        Pass <InlineCode>onChange</InlineCode> to{" "}
        <InlineCode>CheckboxCardGroupItem</InlineCode>. It has a type of{" "}
        <InlineCode>{`(newValue: boolean) => void`}</InlineCode>.
      </div>
    ),
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
        code={`<CheckboxCardGroup>
  <CheckboxCardGroupItem onChange={() => {...}}>One</CheckboxCardGroupItem>
  <CheckboxCardGroupItem onChange={() => {...}}>Two</CheckboxCardGroupItem>
  <CheckboxCardGroupItem onChange={() => {...}}>Three</CheckboxCardGroupItem>
</CheckboxCardGroup>`}
      />
    ),
  }, {
    title: "Padding",
    description: (
      <div>
        Set <InlineCode>padding</InlineCode> to <InlineCode>"sm"</InlineCode>,
        {" "}
        <InlineCode>"md"</InlineCode>, or{" "}
        <InlineCode>"lg"</InlineCode>. Defaults to{" "}
        <InlineCode>"md"</InlineCode>.
      </div>
    ),
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
        code={`<Stack class="gap-5">
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
    description: (
      <div>
        Set <InlineCode>rounded</InlineCode> to{" "}
        <InlineCode>"square"</InlineCode>, <InlineCode>"sm"</InlineCode>, or
        {" "}
        <InlineCode>"lg"</InlineCode>. Defaults to the value of the CSS variable
        {" "}
        <InlineCode>--default-roundedness</InlineCode>. See{" "}
        <Link href="/default-roundedness">
          "Default roundedness"
        </Link>.
      </div>
    ),
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
        code={`<Stack class="gap-5">
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
  }];
  const checkboxCardGroupItemProps = [{
    name: "defaultIsChecked",
    required: false,
    type: "boolean",
    default: "false",
    notes: null,
  }, {
    name: "onChange",
    required: false,
    type: "(newValue: boolean) => void",
    default: null,
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
        componentName="CheckboxCardGroup"
        sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/islands/molecules/checkbox-card-group.tsx"
        importStatement='import { CheckboxCardGroup, CheckboxCardGroupItem } from "rfui";'
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
      <Props subComponentTitle="CheckboxCardGroupItem">
        {checkboxCardGroupItemProps.map((prop) => {
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
