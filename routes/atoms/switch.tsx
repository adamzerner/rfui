import { CodeBlock } from "@/islands/atoms/code-block.tsx";
import { InlineCode } from "@/islands/atoms/inline-code.tsx";
import { Link } from "@/islands/atoms/link.tsx";
import { Switch } from "@/islands/atoms/switch.tsx";
import { ComponentDocsPage } from "@/islands/demo/component-docs-page/index.tsx";

export default () => {
  const notes = (
    <div>
      Unlike checkboxes, switches should deliver immediate results instead of
      requiring the user to click "Save" to see the results. See{" "}
      <Link href="https://www.nngroup.com/articles/toggle-switch-guidelines/">
        Toggle-Switch Guidelines
      </Link>{" "}
      for more information.
    </div>
  );
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
      notes={notes}
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/atoms/switch.tsx"
      sections={sections}
      props={props}
    />
  );
};
