import { CodeBlock } from "@/islands/atoms/code-block.tsx";
import { H2 } from "@/islands/atoms/h2.tsx";
import { InlineCode } from "@/islands/atoms/inline-code.tsx";
import { Link } from "@/islands/atoms/link.tsx";
import { Text } from "@/islands/atoms/text.tsx";
import { Textarea } from "@/islands/atoms/textarea.tsx";
import {
  Example,
  Header,
  Notes,
} from "@/islands/demo/component-docs-page/header.tsx";
import { ComponentDocsPage } from "@/islands/demo/component-docs-page/index.tsx";
import { Prop } from "@/islands/demo/component-docs-page/prop.tsx";
import { Props } from "@/islands/demo/component-docs-page/props.tsx";
import { SectionType } from "@/islands/demo/component-docs-page/section-type.ts";
import { Stack } from "@/islands/helpers/stack.tsx";
import { Card } from "@/islands/molecules/card.tsx";

export default () => {
  const notes = null;
  const sections: SectionType[] = [{
    title: "Basic",
    example: <Textarea></Textarea>,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Textarea></Textarea>`}
      />
    ),
  }, {
    title: "Rounded",
    description: (
      <div>
        Set <InlineCode>rounded</InlineCode> to{" "}
        <InlineCode>"square"</InlineCode>, <InlineCode>"sm"</InlineCode> or{" "}
        <InlineCode>"lg"</InlineCode>. Defaults to{" "}
        <InlineCode>"sm"</InlineCode>.
      </div>
    ),
    example: (
      <Stack class="gap-5">
        <Textarea rounded="square"></Textarea>
        <Textarea rounded="sm"></Textarea>
        <Textarea rounded="lg"></Textarea>
      </Stack>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="gap-5">
  <Textarea rounded="square"></Textarea>
  <Textarea rounded="sm"></Textarea>
  <Textarea rounded="lg"></Textarea>
</Stack>`}
      />
    ),
  }, {
    title: "Disabled",
    description: (
      <div>
        Set <InlineCode>disabled</InlineCode> to <InlineCode>true</InlineCode>.
      </div>
    ),
    example: <Textarea disabled></Textarea>,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Textarea disabled></Textarea>`}
      />
    ),
  }, {
    title: "Readonly",
    description: (
      <div>
        Set <InlineCode>readonly</InlineCode> to <InlineCode>true</InlineCode>.
      </div>
    ),
    example: <Textarea readonly>Example</Textarea>,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Textarea readonly>Example</Textarea>`}
      />
    ),
  }, {
    title: "Invalid",
    description: (
      <div>
        Set <InlineCode>invalid</InlineCode> to <InlineCode>true</InlineCode>.
      </div>
    ),
    example: <Textarea invalid>Example</Textarea>,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Textarea invalid>Example</Textarea>`}
      />
    ),
  }];
  const props = [{
    name: "rounded",
    required: false,
    type: "'square' | 'sm' | 'lg'",
    default: '"sm"',
    notes: null,
  }, {
    name: "invalid",
    required: false,
    type: "boolean",
    default: "false",
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
    type: "JSX.HTMLAttributes<HTMLTextAreaElement>",
    default: null,
    notes: (
      <div>
        <div class="leading-relaxed">
          See the docs for{" "}
          <Link href="/rest-parameters">rest parameters</Link>. For{" "}
          <InlineCode>Textarea</InlineCode>, you could pass anything you
          normally would pass to <InlineCode>{"<textarea>"}</InlineCode>{" "}
          because the return value{" "}
          <Link href="https://github.com/adamzerner/rfui/blob/master/islands/atoms/textarea.tsx">
            looks something like
          </Link>{" "}
          this:
        </div>
        <CodeBlock
          language="tsx"
          code={`<textarea
  class={className}
  {...resstWithoutClass}
>
  {children}
</textarea>`}
        />
      </div>
    ),
  }];

  return (
    <ComponentDocsPage
      sectionTitles={sections.map((s) => s.title)}
    >
      <Header
        componentName="Textarea"
        sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/islands/atoms/textarea.tsx"
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
        {props.map((prop) => (
          <Prop prop={prop}>
            {prop.notes}
          </Prop>
        ))}
      </Props>
    </ComponentDocsPage>
  );
};
