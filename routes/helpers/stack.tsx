import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { ComponentDocsPage } from "@/islands/demo/component-docs-page.tsx";

export default () => {
  const sections = [{
    title: "Basic",
    example: () => (
      <Stack class="gap-5">
        <div>top</div>
        <div>middle</div>
        <div>bottom</div>
      </Stack>
    ),
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="gap-5">
  <div>top</div>
  <div>middle</div>
  <div>bottom</div>
</Stack>`}
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
      componentName="Stack"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/helpers/stack.tsx"
      sections={sections}
      props={props}
    />
  );
};
