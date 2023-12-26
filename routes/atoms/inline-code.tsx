import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
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
  }, {
    name: "...rest",
    required: false,
    type: "JSX.HTMLAttributes<HTMLElement>",
    default: null,
    notes: (
      <div>
        <div class="leading-relaxed">
          See the docs for{" "}
          <Link href="/rest-parameters">rest parameters</Link>. For{" "}
          <InlineCode>InlineCode</InlineCode>, you could pass anything you
          normally would pass to <InlineCode>{"<code>"}</InlineCode>{" "}
          because the return value{" "}
          <Link href="https://github.com/adamzerner/rfui/blob/master/components/atoms/inline-code.tsx">
            looks something like
          </Link>{" "}
          this:
        </div>
        <CodeBlock
          language="tsx"
          code={`<code
  class={className}
  {...restWithoutClass}
>
  {children}
</code>`}
        />
      </div>
    ),
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
