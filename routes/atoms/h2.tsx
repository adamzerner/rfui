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
import { Prop } from "@/components/docs-site/component-docs-page/prop.tsx";
import { Props } from "@/components/docs-site/component-docs-page/props.tsx";
import { SectionType } from "@/components/docs-site/component-docs-page/section-type.ts";
import { Stack } from "@/components/helpers/stack.tsx";
import { Card } from "@/components/molecules/card.tsx";

export default () => {
  const notes = null;
  const sections: SectionType[] = [{
    title: "Basic",
    example: <H2>Hello world</H2>,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<H2>Hello world</H2>`}
      />
    ),
  }, {
    title: "Alongside paragraphs",
    example: (
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
    exampleCode: (
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
    example: <H2 class="!my-2">Hello world</H2>,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<H2 class="!my-2">Hello world</H2>`}
      />
    ),
  }, {
    title: "In-page link",
    description: (
      <div>
        <div>
          Makes the header an{" "}
          <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#linking_to_an_element_on_the_same_page">
            in-page link
          </Link>.
        </div>
        <CodeBlock
          language="tsx"
          code={`<H2 inPageLink="hello-world">
  Hello world
</H2>`}
        />
        <div>Gets transformed into something like:</div>
        <CodeBlock
          language="tsx"
          code={`<h2 id="hello-world">
  <a href="#hello-world">Hello world</a>
</h2>`}
        />
      </div>
    ),
    example: <H2 inPageLink="hello-world">Hello world</H2>,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<H2 inPageLink="hello-world">Hello world</H2>`}
      />
    ),
  }];
  const props = [{
    name: "inPageLink",
    required: false,
    type: "string",
    default: null,
    notes: (
      <div>
        <div>Makes the header an in-page link by returning the following:</div>
        <CodeBlock
          language="tsx"
          code={`<h2 id={inPageLink} class={className} {...restWithoutClass}>
  <Link href={\`#\${inPageLink}\`} underline="hover">{children}</Link>
</h2>`}
        />
      </div>
    ),
  }, {
    name: "children",
    required: true,
    type: "ComponentChild",
    default: null,
    notes: null,
  }, {
    name: "...rest",
    required: false,
    type: "JSX.HTMLAttributes<HTMLHeadingElement>",
    default: null,
    notes: (
      <div>
        <div class="leading-relaxed">
          See the docs for{" "}
          <Link href="/rest-parameters">rest parameters</Link>. For{" "}
          <InlineCode>H2</InlineCode>, you could pass anything you normally
          would pass to <InlineCode>{"<h2>"}</InlineCode>{" "}
          because the return value{" "}
          <Link href="https://github.com/adamzerner/rfui/blob/master/islands/atoms/h2.tsx">
            looks something like
          </Link>{" "}
          this:
        </div>
        <CodeBlock
          language="tsx"
          code={`<h2
  class={className}
  {...restWithoutClass}
>
  ...
</h2>`}
        />
      </div>
    ),
  }];

  return (
    <ComponentDocsPage
      sectionTitles={sections.map((s) => s.title)}
    >
      <Header
        componentName="H2"
        sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/atoms/h2.tsx"
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
      <Props>
        {props.map((prop) => {
          const { notes, ...propWithoutNotes } = prop;

          return notes
            ? (
              <Prop prop={prop}>
                {notes}
              </Prop>
            )
            : <Prop prop={propWithoutNotes}></Prop>;
        })}
      </Props>
    </ComponentDocsPage>
  );
};
