import { CodeBlock } from "@/islands/atoms/code-block.tsx";
import { H2 } from "@/islands/atoms/h2.tsx";
import { InlineCode } from "@/islands/atoms/inline-code.tsx";
import { Link } from "@/islands/atoms/link.tsx";
import { RadioButton } from "@/islands/atoms/radio-button.tsx";
import { Text } from "@/islands/atoms/text.tsx";
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
  const notes = (
    <div>
      Radio buttons are{" "}
      <Link href="https://ux.stackexchange.com/q/456/39046">appropriate</Link>
      {" "}
      when you are allowing the user to choose between a few options. If there
      are many options to choose from, prefer the{" "}
      <Link href="/atoms/select">
        <InlineCode>Select</InlineCode>
      </Link>{" "}
      component.
    </div>
  );
  const sections: SectionType[] = [{
    title: "Basic",
    example: <RadioButton />,
    exampleCode: (
      <CodeBlock class="mt-4" language="tsx" code={`<RadioButton />`} />
    ),
  }, {
    title: "Size",
    example: (
      <Stack class="gap-5">
        <RadioButton size="sm" />
        <RadioButton size="md" />
        <RadioButton size="lg" />
      </Stack>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="gap-5">
  <RadioButton size="sm" />
  <RadioButton size="md" />
  <RadioButton size="lg" />
</Stack>`}
      />
    ),
  }, {
    title: "Disabled",
    example: <RadioButton disabled />,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<RadioButton disabled />`}
      />
    ),
  }, {
    title: "Invalid",
    example: <RadioButton invalid />,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<RadioButton invalid />`}
      />
    ),
  }];
  const props = [{
    name: "size",
    required: false,
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    notes: null,
  }, {
    name: "invalid",
    required: false,
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    notes: null,
  }, {
    name: "...rest",
    required: false,
    type: 'Omit<JSX.HTMLAttributes<HTMLInputElement>, "size">',
    default: null,
    notes: (
      <div>
        <div class="leading-relaxed">
          See the docs for{" "}
          <Link href="/rest-parameters">rest parameters</Link>. For{" "}
          <InlineCode>RadioButton</InlineCode>, you could pass anything you
          normally would pass to{" "}
          <InlineCode>{'<input type="radio">'}</InlineCode>{" "}
          because the return value{" "}
          <Link href="https://github.com/adamzerner/rfui/blob/master/islands/atoms/radio-button.tsx">
            looks something like
          </Link>{" "}
          this:
        </div>
        <CodeBlock
          language="tsx"
          code={`<input
  type="radio"
  class={className}
  {...restWithoutClass}
/>`}
        />
      </div>
    ),
  }];

  return (
    <ComponentDocsPage
      sectionTitles={sections.map((s) => s.title)}
    >
      <Header
        componentName="RadioButton"
        sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/islands/atoms/radio-button.tsx"
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
