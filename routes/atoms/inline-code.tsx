import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { ComponentDocsPage } from "@/islands/demo/component-docs-page.tsx";

export default () => {
  const sections = [{
    title: "Basic",
    example: () => (
      <div>
        When I wrote <InlineCode>sayHello("John")</InlineCode> it didn't work.
      </div>
    ),
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<div>
  When I wrote <InlineCode>sayHello("John")</InlineCode> it didn't work.
</div>`}
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
      componentName="InlineCode"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/atoms/inline-code.tsx"
      sections={sections}
      props={props}
    />
  );
};
