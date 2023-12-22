import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { Highlight } from "@/components/atoms/highlight.tsx";
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
