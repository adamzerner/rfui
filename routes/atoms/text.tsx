import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Text } from "@/components/atoms/text.tsx";
import { ComponentDocsPage } from "@/islands/demo/component-docs-page.tsx";

export default () => {
  const notes = (
    <div>
      To ensure that the line length is{" "}
      <Link href="https://practicaltypography.com/line-length.html">
        comfortable
      </Link>{" "}
      for people to read, this <InlineCode>Text</InlineCode>{" "}
      component utilizes Tailwind's{" "}
      <Link href="https://tailwindcss.com/docs/max-width#reading-width">
        <InlineCode>max-w-prose</InlineCode>
      </Link>{" "}
      class.
    </div>
  );
  const sections = [{
    title: "Basic",
    example: () => (
      <Text>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat
          odio facilisis mauris sit.
        </p>
        <p>
          Amet consectetur adipiscing elit duis tristique. Ac turpis egestas
          maecenas pharetra. Dui nunc mattis enim ut tellus. Egestas congue
          quisque egestas diam in.
        </p>
      </Text>
    ),
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Text>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat odio facilisis mauris sit.</p>
  <p>Amet consectetur adipiscing elit duis tristique. Ac turpis egestas maecenas pharetra. Dui nunc mattis enim ut tellus. Egestas congue quisque egestas diam in.</p>
</Text>`}
      />
    ),
  }, {
    title: "Small",
    description: (
      <div>
        Set <InlineCode>size</InlineCode> to <InlineCode>"sm"</InlineCode>.
      </div>
    ),
    example: () => (
      <Text size="sm">
        <p>
          Illo quia quam perferendis ut consectetur rerum dolores dolores.
          Reiciendis est beatae magnam ut amet quis sequi. Eaque consequatur
          consectetur non amet nostrum quo animi.
        </p>
        <p>
          Quod enim vitae et. Impedit ut maxime fugit excepturi harum qui.
          Praesentium pariatur nisi ut rerum et dolores sed.
        </p>
      </Text>
    ),
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Text size="sm">
  <p>
    Illo quia quam perferendis ut consectetur rerum dolores dolores.
    Reiciendis est beatae magnam ut amet quis sequi. Eaque consequatur
    consectetur non amet nostrum quo animi.
  </p>
  <p>
    Quod enim vitae et. Impedit ut maxime fugit excepturi harum
    qui. Praesentium pariatur nisi ut rerum et dolores sed.
  </p>
</Text>`}
      />
    ),
  }, {
    title: "Medium",
    description: (
      <div>
        Set <InlineCode>size</InlineCode> to <InlineCode>"md"</InlineCode>.
      </div>
    ),
    example: () => (
      <Text size="md">
        <p>
          Illo quia quam perferendis ut consectetur rerum dolores dolores.
          Reiciendis est beatae magnam ut amet quis sequi. Eaque consequatur
          consectetur non amet nostrum quo animi.
        </p>
        <p>
          Quod enim vitae et. Impedit ut maxime fugit excepturi harum qui.
          Praesentium pariatur nisi ut rerum et dolores sed.
        </p>
      </Text>
    ),
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Text size="md">
  <p>
    Illo quia quam perferendis ut consectetur rerum dolores dolores.
    Reiciendis est beatae magnam ut amet quis sequi. Eaque consequatur
    consectetur non amet nostrum quo animi.
  </p>
  <p>
    Quod enim vitae et. Impedit ut maxime fugit excepturi harum
    qui. Praesentium pariatur nisi ut rerum et dolores sed.
  </p>
</Text>`}
      />
    ),
  }, {
    title: "Large",
    description: (
      <div>
        Set <InlineCode>size</InlineCode> to <InlineCode>"lg"</InlineCode>.
      </div>
    ),
    example: () => (
      <Text size="lg">
        <p>
          Illo quia quam perferendis ut consectetur rerum dolores dolores.
          Reiciendis est beatae magnam ut amet quis sequi. Eaque consequatur
          consectetur non amet nostrum quo animi.
        </p>
        <p>
          Quod enim vitae et. Impedit ut maxime fugit excepturi harum qui.
          Praesentium pariatur nisi ut rerum et dolores sed.
        </p>
      </Text>
    ),
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Text size="lg">
  <p>
    Illo quia quam perferendis ut consectetur rerum dolores dolores.
    Reiciendis est beatae magnam ut amet quis sequi. Eaque consequatur
    consectetur non amet nostrum quo animi.
  </p>
  <p>
    Quod enim vitae et. Impedit ut maxime fugit excepturi harum
    qui. Praesentium pariatur nisi ut rerum et dolores sed.
  </p>
</Text>`}
      />
    ),
  }];
  const props = [{
    name: "size",
    required: false,
    type: "'sm' | 'md' | 'lg'",
    default: '"md"',
    notes: null,
  }, {
    name: "children",
    required: true,
    type: "ComponentChild",
    default: null,
    notes: null,
  }];

  return (
    <ComponentDocsPage
      componentName="Text"
      notes={notes}
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/atoms/text.tsx"
      sections={sections}
      props={props}
    />
  );
};
