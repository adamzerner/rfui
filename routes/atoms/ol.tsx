import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { OL } from "@/components/atoms/ol.tsx";
import { ComponentDocsPage } from "@/islands/demo/component-docs-page.tsx";

export default () => {
  const sections = [{
    title: "Basic",
    example: () => (
      <OL>
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
      </OL>
    ),
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<OL>
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</OL>`}
      />
    ),
  }, {
    title: "Outside",
    example: () => (
      <OL bulletLocation="outside">
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
      </OL>
    ),
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<OL bulletLocation="outside">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</OL>`}
      />
    ),
  }];
  const props = [{
    name: "bulletLocation",
    required: false,
    type: "'inside' | 'outside'",
    default: "'inside'",
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
      componentName="OL"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/atoms/ol.tsx"
      sections={sections}
      props={props}
    />
  );
};
