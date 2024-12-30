import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { H2 } from "@/components/atoms/h2.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Text } from "@/components/atoms/text.tsx";
import {
  Example,
  Header,
  Notes,
} from "@/components/docs-site/component-docs-page/header.tsx";
import { ComponentDocsPage } from "@/components/docs-site/component-docs-page/index.tsx";
import { PropsTable } from "@/components/docs-site/component-docs-page/props-table.tsx";
import { SectionType } from "@/components/docs-site/component-docs-page/section-type.ts";
import { Card } from "@/components/molecules/card.tsx";
import { Tabs, TabSection } from "@/islands/molecules/tabs.tsx";

export default () => {
  const notes = null;
  const headerExample = (
    <Tabs>
      <TabSection tabName="First">One</TabSection>
      <TabSection tabName="Second">Two</TabSection>
      <TabSection tabName="Third">Three</TabSection>
    </Tabs>
  );
  const sections: SectionType[] = [{
    title: "Basic",
    example: (
      <Tabs>
        <TabSection tabName="First">One</TabSection>
        <TabSection tabName="Second">Two</TabSection>
        <TabSection tabName="Third">Three</TabSection>
      </Tabs>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Tabs>
  <TabSection tabName="First">One</TabSection>
  <TabSection tabName="Second">Two</TabSection>
  <TabSection tabName="Third">Three</TabSection>
</Tabs>`}
      />
    ),
  }, {
    title: "Full width",
    description: (
      <div>
        Set <InlineCode>fullWidth</InlineCode> to{" "}
        <InlineCode>true</InlineCode>. Defaults to{" "}
        <InlineCode>false</InlineCode>.
      </div>
    ),
    example: (
      <Tabs fullWidth>
        <TabSection tabName="First">One</TabSection>
        <TabSection tabName="Second">Two</TabSection>
        <TabSection tabName="Third">Three</TabSection>
      </Tabs>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Tabs fullWidth>
  <TabSection tabName="First">One</TabSection>
  <TabSection tabName="Second">Two</TabSection>
  <TabSection tabName="Third">Three</TabSection>
</Tabs>`}
      />
    ),
  }, {
    title: "Initial active tab",
    description: (
      <div>
        Set <InlineCode>initialActiveTab</InlineCode> to the{" "}
        <InlineCode>tabName</InlineCode> of the{" "}
        <InlineCode>TabSection</InlineCode>{" "}
        that you want to display when the component loads.
      </div>
    ),
    example: (
      <Tabs initialActiveTab="Second">
        <TabSection tabName="First">One</TabSection>
        <TabSection tabName="Second">Two</TabSection>
        <TabSection tabName="Third">Three</TabSection>
      </Tabs>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Tabs initialActiveTab="Second">
  <TabSection tabName="First">One</TabSection>
  <TabSection tabName="Second">Two</TabSection>
  <TabSection tabName="Third">Three</TabSection>
</Tabs>`}
      />
    ),
  }];
  const props = [{
    name: "fullWidth",
    required: false,
    type: "boolean",
    default: "false",
    notes: null,
  }, {
    name: "initialActiveTab",
    required: false,
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
      examplesSectionTitles={sections.map((s) => s.title)}
    >
      <Header
        componentName="Tabs"
        sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/islands/molecules/tabs.tsx"
        importStatement='import { Tabs, TabSection } from "rfui";'
      >
        <Example>{headerExample}</Example>
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
      <PropsTable props={props} />
      <PropsTable props={tabSectionProps} subComponentTitle="TabSection" />
    </ComponentDocsPage>
  );
};
