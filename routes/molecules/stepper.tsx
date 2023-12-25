import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { ComponentDocsPage } from "@/islands/demo/component-docs-page.tsx";
import { Stepper } from "@/islands/molecules/stepper.tsx";

export default () => {
  const notes =
    "A stepper component like this provides users an easy way to select the number they want in a few easy clicks.";
  const sections = [{
    title: "Basic",
    example: () => <Stepper />,
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stepper />`}
      />
    ),
  }, {
    title: "Size",
    description: (
      <div>
        Set <InlineCode>size</InlineCode> to <InlineCode>"sm"</InlineCode>,{" "}
        <InlineCode>"md"</InlineCode>, or{" "}
        <InlineCode>"lg"</InlineCode>. Defaults to{" "}
        <InlineCode>"md"</InlineCode>.
      </div>
    ),
    example: () => (
      <Stack class="gap-5">
        <Stepper size="sm" />
        <Stepper size="md" />
        <Stepper size="lg" />
      </Stack>
    ),
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="gap-5">
  <Stepper size="sm" />
  <Stepper size="md" />
  <Stepper size="lg" />
</Stack>`}
      />
    ),
  }, {
    title: "Rounded",
    description: (
      <div>
        Set <InlineCode>rounded</InlineCode> to{" "}
        <InlineCode>"square"</InlineCode>, <InlineCode>"sm"</InlineCode>,{" "}
        <InlineCode>"lg"</InlineCode>, or{" "}
        <InlineCode>"full"</InlineCode>. Defaults to{" "}
        <InlineCode>"sm"</InlineCode>.
      </div>
    ),
    example: () => (
      <Stack class="gap-5">
        <Stepper rounded="square" />
        <Stepper rounded="sm" />
        <Stepper rounded="lg" />
        <Stepper rounded="full" />
      </Stack>
    ),
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="gap-5">
  <Stepper rounded="square" />
  <Stepper rounded="sm" />
  <Stepper rounded="lg" />
  <Stepper rounded="full" />
</Stack>`}
      />
    ),
  }, {
    title: "Min and max",
    description: "In this example the min is 0 and the max is 5.",
    example: () => <Stepper min={0} max={5} />,
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stepper min={0} max={5} />`}
      />
    ),
  }];
  const props = [{
    name: "name",
    required: false,
    type: "string",
    default: null,
    notes: (
      <div>
        To be used for{" "}
        <InlineCode>
          {`<input type="hidden" name={name} value={value} />`}
        </InlineCode>.
      </div>
    ),
  }, {
    name: "size",
    required: false,
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    notes: null,
  }, {
    name: "rounded",
    required: false,
    type: '"square" | "sm" | "lg" | "full"',
    default: '"sm"',
    notes: null,
  }, {
    name: "startingValue",
    required: false,
    type: "number",
    default: "0",
    notes: null,
  }, {
    name: "min",
    required: false,
    type: "number",
    default: null,
    notes: null,
  }, {
    name: "max",
    required: false,
    type: "number",
    default: null,
    notes: null,
  }];

  return (
    <ComponentDocsPage
      componentName="Stepper"
      notes={notes}
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/molecules/stepper.tsx"
      sections={sections}
      props={props}
    />
  );
};
