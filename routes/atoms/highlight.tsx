import { CodeBlock } from "@/islands/atoms/code-block.tsx";
import { Highlight } from "@/islands/atoms/highlight.tsx";
import { InlineCode } from "@/islands/atoms/inline-code.tsx";
import { Link } from "@/islands/atoms/link.tsx";
import { ComponentDocsPage } from "@/islands/demo/component-docs-page.tsx";

export default () => {
  const sections = [{
    title: "Basic",
    example: () => (
      <div>
        The <Highlight>pizza</Highlight> is very good.
      </div>
    ),
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<div>
  The <Highlight>pizza</Highlight> is very good.
</div>`}
      />
    ),
  }, {
    title: "Longer example",
    example: () => (
      <div>
        <h1 class="text-3xl mb-5">
          Lorem ipsum <Highlight>dolor</Highlight> sit amet, consectetur.
        </h1>
        <div>
          Lorem ipsum{" "}
          <Highlight>dolor sit amet</Highlight>, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat.{" "}
          <Highlight>Duis aute irure</Highlight>{" "}
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
          in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    ),
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<div>
  <h1 class="text-3xl mb-5">
    Lorem ipsum <Highlight>dolor</Highlight> sit amet, consectetur.
  </h1>
  <div>
    Lorem ipsum{" "}
    <Highlight>dolor sit amet</Highlight>, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
    ut aliquip ex ea commodo consequat.{" "}
    <Highlight>Duis aute irure</Highlight>{" "}
    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
    in culpa qui officia deserunt mollit anim id est laborum.
  </div>
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
    type: "JSX.HTMLAttributes<HTMLUnknownElement>",
    default: null,
    notes: (
      <div>
        <div class="leading-relaxed">
          See the docs for{" "}
          <Link href="/rest-parameters">rest parameters</Link>. For{" "}
          <InlineCode>Highlight</InlineCode>, you could pass anything you
          normally would pass to <InlineCode>{"<mark>"}</InlineCode>{" "}
          because the return value{" "}
          <Link href="https://github.com/adamzerner/rfui/blob/master/components/atoms/highlight.tsx">
            looks something like
          </Link>{" "}
          this:
        </div>
        <CodeBlock
          language="tsx"
          code={`<mark
  class={className}
  {...restWithoutClass}
>
  {children}
</mark>`}
        />
      </div>
    ),
  }];

  return (
    <ComponentDocsPage
      componentName="Highlight"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/atoms/highlight.tsx"
      sections={sections}
      props={props}
    />
  );
};
