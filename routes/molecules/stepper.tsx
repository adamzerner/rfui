import { CodeBlock } from "@/islands/atoms/code-block.tsx";
import { H2 } from "@/islands/atoms/h2.tsx";
import { InlineCode } from "@/islands/atoms/inline-code.tsx";
import { Link } from "@/islands/atoms/link.tsx";
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
import { Stepper } from "@/islands/molecules/stepper.tsx";

export default () => {
  const notes = (
    <div>
      A stepper component like this lets users select the number they want in a
      few easy clicks. See{" "}
      <Link href="https://www.nngroup.com/articles/input-steppers/">
        Design Guidelines for Input Steppers
      </Link>{" "}
      from NNGroup.
    </div>
  );
  const sections: SectionType[] = [{
    title: "Basic",
    example: <Stepper />,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stepper />`}
      />
    ),
  }, {
    title: "Size",
    description: (
      <div>
        Set <InlineCode>size</InlineCode> to <InlineCode>"sm"</InlineCode>,{" "}
        <InlineCode>"md"</InlineCode>, or{" "}
        <InlineCode>"lg"</InlineCode>. Defaults to{" "}
        <InlineCode>"md"</InlineCode>.
      </div>
    ),
    example: (
      <Stack class="gap-5">
        <Stepper size="sm" />
        <Stepper size="md" />
        <Stepper size="lg" />
      </Stack>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="gap-5">
  <Stepper size="sm" />
  <Stepper size="md" />
  <Stepper size="lg" />
</Stack>`}
      />
    ),
  }, {
    title: "Rounded",
    description: (
      <div>
        Set <InlineCode>rounded</InlineCode> to{" "}
        <InlineCode>"square"</InlineCode>, <InlineCode>"sm"</InlineCode>,{" "}
        <InlineCode>"lg"</InlineCode>, or{" "}
        <InlineCode>"full"</InlineCode>. Defaults to{" "}
        <InlineCode>"sm"</InlineCode>.
      </div>
    ),
    example: (
      <Stack class="gap-5">
        <Stepper rounded="square" />
        <Stepper rounded="sm" />
        <Stepper rounded="lg" />
        <Stepper rounded="full" />
      </Stack>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="gap-5">
  <Stepper rounded="square" />
  <Stepper rounded="sm" />
  <Stepper rounded="lg" />
  <Stepper rounded="full" />
</Stack>`}
      />
    ),
  }, {
    title: "Starting value",
    example: <Stepper startingValue={100} />,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stepper startingValue={100} />`}
      />
    ),
  }, {
    title: "Min and max",
    description: "In this example the min is 0 and the max is 5.",
    example: <Stepper min={0} max={5} />,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stepper min={0} max={5} />`}
      />
    ),
  }];
  const props = [{
    name: "name",
    required: false,
    type: "string",
    default: null,
    notes: (
      <div>
        To be used for{" "}
        <InlineCode>
          {`<input type="hidden" name={name} value={value} />`}
        </InlineCode>.
      </div>
    ),
  }, {
    name: "size",
    required: false,
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    notes: null,
  }, {
    name: "rounded",
    required: false,
    type: '"square" | "sm" | "lg" | "full"',
    default: '"sm"',
    notes: null,
  }, {
    name: "startingValue",
    required: false,
    type: "number",
    default: "0",
    notes: null,
  }, {
    name: "min",
    required: false,
    type: "number",
    default: null,
    notes: null,
  }, {
    name: "max",
    required: false,
    type: "number",
    default: null,
    notes: null,
  }, {
    name: "...rest",
    required: false,
    type: 'Omit<JSX.HTMLAttributes<HTMLDivElement>, "size" | "min" | "max">',
    default: null,
    notes: (
      <div>
        <div class="leading-relaxed">
          See the docs for{" "}
          <Link href="/rest-parameters">rest parameters</Link>. For{" "}
          <InlineCode>Stepper</InlineCode>, you could pass anything you normally
          would pass to <InlineCode>{"<div>"}</InlineCode>{" "}
          because the return value{" "}
          <Link href="https://github.com/adamzerner/rfui/blob/master/islands/molecules/stepper.tsx">
            looks something like
          </Link>{" "}
          this:
        </div>
        <CodeBlock
          language="tsx"
          code={`<div class={containerClass} {...restWithoutClass}>
  {children}
</div>`}
        />
      </div>
    ),
  }];

  return (
    <ComponentDocsPage
      sectionTitles={sections.map((s) => s.title)}
    >
      <Header
        componentName="Stepper"
        sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/islands/molecules/stepper.tsx"
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
