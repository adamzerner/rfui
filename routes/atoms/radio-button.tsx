import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { RadioButton } from "@/components/atoms/radio-button.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { ComponentDocsPage } from "@/islands/demo/component-docs-page.tsx";

export default () => {
  const sections = [{
    title: "Basic",
    example: () => <RadioButton />,
    exampleCode: () => (
      <CodeBlock class="mt-4" language="tsx" code={`<RadioButton />`} />
    ),
  }, {
    title: "Size",
    example: () => (
      <Stack class="gap-5">
        <RadioButton size="sm" />
        <RadioButton size="md" />
        <RadioButton size="lg" />
      </Stack>
    ),
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="gap-5">
  <RadioButton size="sm" />
  <RadioButton size="md" />
  <RadioButton size="lg" />
</Stack>`}
      />
    ),
  }, {
    title: "Disabled",
    example: () => <RadioButton disabled />,
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<RadioButton disabled />`}
      />
    ),
  }, {
    title: "Invalid",
    example: () => <RadioButton invalid />,
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<RadioButton invalid />`}
      />
    ),
  }];
  const props = [{
    name: "size",
    required: false,
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    notes: null,
  }, {
    name: "invalid",
    required: false,
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    notes: null,
  }];

  return (
    <ComponentDocsPage
      componentName="RadioButton"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/atoms/radio-button.tsx"
      sections={sections}
      props={props}
    />
  );
};
