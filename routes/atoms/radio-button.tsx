import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { RadioButton } from "@/components/atoms/radio-button.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { ComponentDocsPage } from "@/islands/demo/component-docs-page.tsx";

export default () => {
  const notes = (
    <div>
      Radio buttons are{" "}
      <Link href="https://ux.stackexchange.com/q/456/39046">appropriate</Link>
      {" "}
      when you are allowing the user to choose between a few options. If there
      are many options to choose from, prefer the{" "}
      <Link href="/atoms/select">
        <InlineCode>Select</InlineCode>
      </Link>{" "}
      component.
    </div>
  );
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
  }, {
    name: "...rest",
    required: false,
    type: 'Omit<JSX.HTMLAttributes<HTMLInputElement>, "size">',
    default: null,
    notes: (
      <div>
        <div class="leading-relaxed">
          See the docs for{" "}
          <Link href="/rest-parameters">rest parameters</Link>. For{" "}
          <InlineCode>RadioButton</InlineCode>, you could pass anything you
          normally would pass to{" "}
          <InlineCode>{'<input type="radio">'}</InlineCode>{" "}
          because the return value{" "}
          <Link href="https://github.com/adamzerner/rfui/blob/master/components/atoms/radio-button.tsx">
            looks something like
          </Link>{" "}
          this:
        </div>
        <CodeBlock
          language="tsx"
          code={`<input
  type="radio"
  class={className}
  {...restWithoutClass}
/>`}
        />
      </div>
    ),
  }];

  return (
    <ComponentDocsPage
      notes={notes}
      componentName="RadioButton"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/atoms/radio-button.tsx"
      sections={sections}
      props={props}
    />
  );
};
