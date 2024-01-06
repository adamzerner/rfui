import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Switch } from "@/components/atoms/switch.tsx";
import { ComponentDocsPage } from "@/islands/demo/component-docs-page.tsx";

export default () => {
  const sections = [{
    title: "Basic",
    example: () => <Switch />,
    exampleCode: () => (
      <CodeBlock class="mt-4" language="tsx" code={`<Switch />`} />
    ),
  }, {
    title: "Disabled",
    example: () => <Switch disabled />,
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Switch disabled />`}
      />
    ),
  }];
  const props = [{
    name: "...rest",
    required: false,
    type: "JSX.HTMLAttributes<HTMLInputElement>",
    default: null,
    notes: (
      <div>
        <div class="leading-relaxed">
          See the docs for{" "}
          <Link href="/rest-parameters">rest parameters</Link>. For{" "}
          <InlineCode>Switch</InlineCode>, you could pass anything you normally
          would pass to <InlineCode>{'<input type="checkbox" />'}</InlineCode>
          {" "}
          because the return value{" "}
          <Link href="https://github.com/adamzerner/rfui/blob/master/components/atoms/switch.tsx">
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
      componentName="Switch"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/atoms/switch.tsx"
      sections={sections}
      props={props}
    />
  );
};
