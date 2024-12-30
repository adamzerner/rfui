import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { H2 } from "@/components/atoms/h2.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Text } from "@/components/atoms/text.tsx";
import {
  Example,
  Header,
  Notes,
} from "@/components/docs-site/component-docs-page/header.tsx";
import { ComponentDocsPage } from "@/components/docs-site/component-docs-page/index.tsx";
import { PropsTable } from "@/components/docs-site/component-docs-page/props-table.tsx";
import { SectionType } from "@/components/docs-site/component-docs-page/section-type.ts";
import { Card } from "@/components/molecules/card.tsx";

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
  const sections: SectionType[] = [{
    title: "Basic",
    example: (
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
    exampleCode: (
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
    example: (
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
    exampleCode: (
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
    example: (
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
    exampleCode: (
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
        Set <InlineCode>size</InlineCode> to{" "}
        <InlineCode>"lg"</InlineCode>. Note: This comes across kinda strong so
        you might want to balance it out with a lighter font weight or lighter
        font color.
      </div>
    ),
    example: (
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
    exampleCode: (
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
  }, {
    title: "One paragraph",
    description: (
      <div>
        If you just have one paragraph with no other elements, you can simplify
        the code as demonstrated below.
      </div>
    ),
    example: (
      <Text>
        Illo quia quam perferendis ut consectetur rerum dolores dolores.
        Reiciendis est beatae magnam ut amet quis sequi. Eaque consequatur
        consectetur non amet nostrum quo animi.
      </Text>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Text>
  Illo quia quam perferendis ut consectetur rerum dolores dolores.
  Reiciendis est beatae magnam ut amet quis sequi. Eaque consequatur
  consectetur non amet nostrum quo animi.
</Text>`}
      />
    ),
  }, {
    title: "One paragraph with element",
    description: (
      <div>
        If your paragraph has some element, you'll need to wrap it in something
        like a <InlineCode>{`<p>`}</InlineCode> or{" "}
        <InlineCode>{`<div>`}</InlineCode> because <InlineCode>Text</InlineCode>
        {" "}
        has a container of{" "}
        <Link href="/helpers/stack">
          <InlineCode>Stack</InlineCode>
        </Link>.
      </div>
    ),
    example: (
      <Text>
        <p>
          Illo quia quam perferendis ut consectetur{" "}
          <Link href="https://example.com">rerum dolores</Link>{" "}
          dolores. Reiciendis est beatae magnam ut amet quis sequi. Eaque
          consequatur consectetur non amet nostrum quo animi.
        </p>
      </Text>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Text>
  <p>
    Illo quia quam perferendis ut consectetur{" "}
    <Link href="https://example.com">rerum dolores</Link>{" "}
    dolores. Reiciendis est beatae magnam ut amet quis sequi. Eaque
    consequatur consectetur non amet nostrum quo animi.
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
  }, {
    name: "...rest",
    required: false,
    type: '<Omit<ComponentProps<"div">, "size">',
    default: null,
    notes: (
      <div>
        <div class="leading-relaxed">
          See the docs for{" "}
          <Link href="/rest-parameters">rest parameters</Link>. For{" "}
          <InlineCode>Text</InlineCode>, you could pass anything you normally
          would pass to <InlineCode>{"<div>"}</InlineCode>{" "}
          because the return value{" "}
          <Link href="https://github.com/adamzerner/rfui/blob/master/islands/atoms/text.tsx">
            looks something like
          </Link>{" "}
          this:
        </div>
        <CodeBlock
          language="tsx"
          code={`<div class={classValue} {...restWithoutClass}>
  {children}
</div>`}
        />
      </div>
    ),
  }];

  return (
    <ComponentDocsPage
      examplesSectionTitles={sections.map((s) => s.title)}
    >
      <Header
        componentName="Text"
        sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/atoms/text.tsx"
      >
        <Example>{sections[0].example}</Example>
        <Notes>{notes}</Notes>
      </Header>
      {sections.map((section) => (
        <section>
          <H2 inPageLink={section.title.toLowerCase().split(/\s+/).join("-")}>
            {section.title}
          </H2>
          {section.description &&
            (
              <Text size="sm" class="mb-6">
                {section.description}
              </Text>
            )}
          <Card width="full" class="mb-4">{section.example}</Card>
          {section.exampleCode}
        </section>
      ))}
      <PropsTable props={props} />
    </ComponentDocsPage>
  );
};
