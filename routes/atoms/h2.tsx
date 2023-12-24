import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { H2 } from "@/components/atoms/h2.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Text } from "@/components/atoms/text.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { ComponentDocsPage } from "@/islands/demo/component-docs-page.tsx";

export default () => {
  const sections = [{
    title: "Basic",
    example: () => <H2>Hello world</H2>,
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<H2>Hello world</H2>`}
      />
    ),
  }, {
    title: "Alongside paragraphs",
    example: () => (
      <div>
        <H2>Hello world</H2>
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
  <H2>Hello world</H2>
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
  }, {
    title: "Without default margins",
    description: (
      <Stack class="gap-3">
        <div>
          By default, there is a top and bottom margin applied to the heading.
          This is helpful a) by providing a sensible default and b) by helping
          you maintain consistent spacing throughout your app. However, you can
          override these default margins if you'd like as shown below.
        </div>
        <div>
          The example below uses{" "}
          <Link href="https://tailwindcss.com/docs/configuration#important-modifier">
            Tailwind's imporant modifier
          </Link>{" "}
          to make sure that the custom margins take precedence over the original
          margins. You may need or want to take a different approach.
        </div>
      </Stack>
    ),
    example: () => <H2 class="!my-2">Hello world</H2>,
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<H2 class="!my-2">Hello world</H2>`}
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
      componentName="H2"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/atoms/h2.tsx"
      sections={sections}
      props={props}
    />
  );
};
