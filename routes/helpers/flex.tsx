import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { Flex } from "@/components/helpers/flex.tsx";
import { ComponentDocsPage } from "@/islands/demo/component-docs-page.tsx";

export default () => {
  const sections = [{
    title: "Basic",
    example: () => (
      <Flex class="gap-8">
        <div>left</div>
        <div>middle</div>
        <div>right</div>
      </Flex>
    ),
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Flex class="gap-8">
  <div>left</div>
  <div>middle</div>
  <div>right</div>
</Flex>`}
      />
    ),
  }];
  const props = [{
    name: "children",
    required: true,
    type: "ComponentChild",
    default: null,
    notes: null,
  }];

  return (
    <ComponentDocsPage
      componentName="Flex"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/helpers/flex.tsx"
      sections={sections}
      props={props}
    />
  );
};
