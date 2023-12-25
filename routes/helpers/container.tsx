import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { Container } from "@/components/helpers/container.tsx";
import { ComponentDocsPage } from "@/islands/demo/component-docs-page.tsx";

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
