import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import {
  ComponentDocsPage,
  ExampleType,
} from "@/components/docs-site/component-docs-page/index.tsx";
import { Tabs, TabSection } from "@/islands/molecules/tabs.tsx";

export default () => {
  const overviewNotes = null;
  const examples: ExampleType[] = [{
    title: "Basic",
    demo: (
      <Tabs>
        <TabSection tabName="First">One</TabSection>
        <TabSection tabName="Second">Two</TabSection>
        <TabSection tabName="Third">Three</TabSection>
      </Tabs>
    ),
    code: (
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
    demo: (
      <Tabs fullWidth>
        <TabSection tabName="First">One</TabSection>
        <TabSection tabName="Second">Two</TabSection>
        <TabSection tabName="Third">Three</TabSection>
      </Tabs>
    ),
    code: (
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
    demo: (
      <Tabs initialActiveTab="Second">
        <TabSection tabName="First">One</TabSection>
        <TabSection tabName="Second">Two</TabSection>
        <TabSection tabName="Third">Three</TabSection>
      </Tabs>
    ),
    code: (
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
  const propsTables = [{
    title: null,
    props: [{
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
    }],
  }, {
    title: "TabSection",
    props: [{
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
    }],
  }];

  return (
    <ComponentDocsPage
      componentName="Tabs"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/islands/molecules/tabs.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
