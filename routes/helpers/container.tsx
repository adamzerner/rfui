import { CodeBlock } from "@/islands/atoms/code-block.tsx";
import { InlineCode } from "@/islands/atoms/inline-code.tsx";
import { Link } from "@/islands/atoms/link.tsx";
import { ComponentDocsPage } from "@/islands/demo/component-docs-page.tsx";
import { Container } from "@/islands/helpers/container.tsx";

export default () => {
  const notes =
    "Wrap your site's content in a container to provide an app-wide width.";
  const sections = [{
    title: "Basic",
    example: () => <Container class="bg-neutral-50">Example</Container>,
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Container class="bg-neutral-50">Example</Container>`}
      />
    ),
  }];
  const props = [{
    name: "size",
    required: false,
    type: '"sm" | "md" | "lg" | "xl"',
    default: '"lg"',
    notes:
      "The screen size that you want the width of the inner content to be.",
  }, {
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
          <InlineCode>Container</InlineCode>, you could pass anything you
          normally would pass to <InlineCode>{"<div>"}</InlineCode>{" "}
          because the return value{" "}
          <Link href="https://github.com/adamzerner/rfui/blob/master/components/molecules/container.tsx">
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
      componentName="Container"
      notes={notes}
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/helpers/container.tsx"
      sections={sections}
      props={props}
    />
  );
};
