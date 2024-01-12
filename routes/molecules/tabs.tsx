import { CodeBlock } from "@/islands/atoms/code-block.tsx";
import { H2 } from "@/islands/atoms/h2.tsx";
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
import { Card } from "@/islands/molecules/card.tsx";
import { Tabs, TabSection } from "@/islands/molecules/tabs.tsx";

export default () => {
  const notes = null;
  const sections: SectionType[] = [{
    title: "Basic",
    example: (
      <Tabs tabNames={["First", "Second", "Third"]}>
        <TabSection tabName="First">One</TabSection>
        <TabSection tabName="Second">Two</TabSection>
        <TabSection tabName="Third">Three</TabSection>
      </Tabs>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Tabs tabNames={["First", "Second", "Third"]}>
  <TabSection tabName="First">One</TabSection>
  <TabSection tabName="Second">Two</TabSection>
  <TabSection tabName="Third">Three</TabSection>
</Tabs>`}
      />
    ),
  }, {
    title: "Full width",
    example: (
      <Tabs fullWidth tabNames={["First", "Second", "Third"]}>
        <TabSection tabName="First">One</TabSection>
        <TabSection tabName="Second">Two</TabSection>
        <TabSection tabName="Third">Three</TabSection>
      </Tabs>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Tabs fullWidth tabNames={["First", "Second", "Third"]}>
  <TabSection tabName="First">One</TabSection>
  <TabSection tabName="Second">Two</TabSection>
  <TabSection tabName="Third">Three</TabSection>
</Tabs>`}
      />
    ),
  }];
  const props = [{
    name: "tabNames",
    required: true,
    type: "string[]",
    default: null,
    notes: null,
  }, {
    name: "fullWidth",
    required: false,
    type: "boolean",
    default: "false",
    notes: null,
  }, {
    name: "children",
    required: true,
    type: "ComponentChild",
    default: null,
    notes: null,
  }];
  const tabSectionProps = [{
    name: "tabName",
    required: true,
    type: "string",
    default: null,
    notes: null,
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
        componentName="Tabs"
        sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/islands/molecules/tabs.tsx"
        importStatement='import { Tabs, TabSection } from "rfui";'
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
      <Props subComponentTitle="TabSection">
        {tabSectionProps.map((prop) => {
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
