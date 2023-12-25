import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Textarea } from "@/components/atoms/textarea.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { ComponentDocsPage } from "@/islands/demo/component-docs-page.tsx";

export default () => {
  const sections = [{
    title: "Basic",
    example: () => <Textarea></Textarea>,
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Textarea></Textarea>`}
      />
    ),
  }, {
    title: "Rounded",
    description: (
      <div>
        Set <InlineCode>rounded</InlineCode> to{" "}
        <InlineCode>"square"</InlineCode>, <InlineCode>"sm"</InlineCode> or{" "}
        <InlineCode>"lg"</InlineCode>. Defaults to{" "}
        <InlineCode>"sm"</InlineCode>.
      </div>
    ),
    example: () => (
      <Stack class="gap-5">
        <Textarea rounded="square"></Textarea>
        <Textarea rounded="sm"></Textarea>
        <Textarea rounded="lg"></Textarea>
      </Stack>
    ),
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="gap-5">
  <Textarea rounded="square"></Textarea>
  <Textarea rounded="sm"></Textarea>
  <Textarea rounded="lg"></Textarea>
</Stack>`}
      />
    ),
  }, {
    title: "Disabled",
    description: (
      <div>
        Set <InlineCode>disabled</InlineCode> to <InlineCode>true</InlineCode>.
      </div>
    ),
    example: () => <Textarea disabled></Textarea>,
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Textarea disabled></Textarea>`}
      />
    ),
  }, {
    title: "Readonly",
    description: (
      <div>
        Set <InlineCode>readonly</InlineCode> to <InlineCode>true</InlineCode>.
      </div>
    ),
    example: () => <Textarea readonly>Example</Textarea>,
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Textarea readonly>Example</Textarea>`}
      />
    ),
  }, {
    title: "Invalid",
    description: (
      <div>
        Set <InlineCode>invalid</InlineCode> to <InlineCode>true</InlineCode>.
      </div>
    ),
    example: () => <Textarea invalid>Example</Textarea>,
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Textarea invalid>Example</Textarea>`}
      />
    ),
  }];
  const props = [{
    name: "rounded",
    required: false,
    type: "'square' | 'sm' | 'lg'",
    default: '"sm"',
    notes: null,
  }, {
    name: "invalid",
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

  return (
    <ComponentDocsPage
      componentName="Textarea"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/atoms/textarea.tsx"
      sections={sections}
      props={props}
    />
  );
};
