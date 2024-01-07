import { Checkbox } from "@/islands/atoms/checkbox.tsx";
import { CodeBlock } from "@/islands/atoms/code-block.tsx";
import { InlineCode } from "@/islands/atoms/inline-code.tsx";
import { Link } from "@/islands/atoms/link.tsx";
import { ComponentDocsPage } from "@/islands/demo/component-docs-page/index.tsx";
import { Stack } from "@/islands/helpers/stack.tsx";

export default () => {
  const sections = [{
    title: "Basic",
    example: () => <Checkbox />,
    exampleCode: () => (
      <CodeBlock class="mt-4" language="tsx" code={`<Checkbox />`} />
    ),
  }, {
    title: "Size",
    example: () => (
      <Stack class="gap-5">
        <Checkbox size="sm" />
        <Checkbox size="md" />
        <Checkbox size="lg" />
      </Stack>
    ),
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="gap-5">
  <Checkbox size="sm" />
  <Checkbox size="md" />
  <Checkbox size="lg" />
</Stack>`}
      />
    ),
  }, {
    title: "Disabled",
    example: () => <Checkbox disabled />,
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Checkbox disabled />`}
      />
    ),
  }, {
    title: "Invalid",
    example: () => <Checkbox invalid />,
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Checkbox invalid />`}
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
          <InlineCode>Checkbox</InlineCode>, you could pass anything you
          normally would pass to{" "}
          <InlineCode>{'<input type="checkbox" />'}</InlineCode>{" "}
          because the return value{" "}
          <Link href="https://github.com/adamzerner/rfui/blob/master/components/atoms/checkbox.tsx">
            looks something like
          </Link>{" "}
          this:
        </div>
        <CodeBlock
          language="tsx"
          code={`<input
  type="checkbox"
  class={className}
  {...rest}
/>`}
        />
      </div>
    ),
  }];

  return (
    <ComponentDocsPage
      componentName="Checkbox"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/atoms/checkbox.tsx"
      sections={sections}
      props={props}
    />
  );
};
