import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { H1 } from "@/components/atoms/h1.tsx";
import { Text } from "@/components/atoms/text.tsx";
import { ComponentDocsPage } from "@/islands/demo/component-docs-page.tsx";

export default () => {
  const sections = [{
    title: "Basic",
    example: () => <H1>Hello world</H1>,
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<H1>Hello world</H1>`}
      />
    ),
  }, {
    title: "Alongside paragraphs",
    example: () => (
      <div>
        <H1>Hello world</H1>
        <Text>
          <p>
            Illo quia quam perferendis ut consectetur rerum dolores dolores.
            Reiciendis est beatae magnam ut amet quis sequi. Eaque consequatur
            consectetur non amet nostrum quo animi.
          </p>
          <p>
            Quod enim vitae et. Impedit ut maxime fugit excepturi harum
            qui.Praesentium pariatur nisi ut rerum et dolores sed.
          </p>
        </Text>
      </div>
    ),
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<div>
  <H1>Hello world</H1>
  <Text>
    <p>
      Illo quia quam perferendis ut consectetur rerum dolores dolores.
      Reiciendis est beatae magnam ut amet quis sequi. Eaque consequatur
      consectetur non amet nostrum quo animi.
    </p>
    <p>
      Quod enim vitae et. Impedit ut maxime fugit excepturi harum
      qui.Praesentium pariatur nisi ut rerum et dolores sed.
    </p>
  </Text>
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
      componentName="H1"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/atoms/h1.tsx"
      sections={sections}
      props={props}
    />
  );
};
