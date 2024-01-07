import { CodeBlock } from "@/islands/atoms/code-block.tsx";
import { InlineCode } from "@/islands/atoms/inline-code.tsx";
import { Link } from "@/islands/atoms/link.tsx";
import { ComponentDocsPage } from "@/islands/demo/component-docs-page/index.tsx";
import { Flex } from "@/islands/helpers/flex.tsx";

export default () => {
  const sections = [{
    title: "Basic",
    example: () => (
      <Flex class="gap-8">
        <div>left</div>
        <div>middle</div>
        <div>right</div>
      </Flex>
    ),
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Flex class="gap-8">
  <div>left</div>
  <div>middle</div>
  <div>right</div>
</Flex>`}
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
    type: 'Omit<JSX.HTMLAttributes<HTMLDivElement>, "size">',
    default: null,
    notes: (
      <div>
        <div class="leading-relaxed">
          See the docs for{" "}
          <Link href="/rest-parameters">rest parameters</Link>. For{" "}
          <InlineCode>Flex</InlineCode>, you could pass anything you normally
          would pass to <InlineCode>{"<div>"}</InlineCode>{" "}
          because the return value{" "}
          <Link href="https://github.com/adamzerner/rfui/blob/master/components/molecules/flex.tsx">
            looks something like
          </Link>{" "}
          this:
        </div>
        <CodeBlock
          language="tsx"
          code={`<div class={containerClass} {...restWithoutClass}>
  {children}
</div>`}
        />
      </div>
    ),
  }];

  return (
    <ComponentDocsPage
      componentName="Flex"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/helpers/flex.tsx"
      sections={sections}
      props={props}
    />
  );
};
