import { Checkbox } from "@/components/atoms/checkbox.tsx";
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
import { Props } from "@/components/docs-site/component-docs-page/props.tsx";
import { SectionType } from "@/components/docs-site/component-docs-page/section-type.ts";
import { Stack } from "@/components/helpers/stack.tsx";
import { Card } from "@/components/molecules/card.tsx";

export default () => {
  const notes = (
    <div>
      This component is basically just a wrapper for{" "}
      <InlineCode>{`<input type="checkbox" />`}</InlineCode>. You'll probably
      want to use it along with a{" "}
      <InlineCode>{`<label>`}</InlineCode>. You also might prefer to use RFUI's
      {" "}
      <Link href="/molecules/form-field">
        <InlineCode>{`FormField`}</InlineCode>
      </Link>{" "}
      component instead.
    </div>
  );
  const sections: SectionType[] = [{
    title: "Basic",
    example: <Checkbox />,
    exampleCode: (
      <CodeBlock class="mt-4" language="tsx" code={`<Checkbox />`} />
    ),
  }, {
    title: "Controlled",
    description: (
      <div>
        See{" "}
        <Link href="https://preactjs.com/guide/v10/forms#controlled--uncontrolled-components">
          Controlled & Uncontrolled Components
        </Link>{" "}
        and{" "}
        <Link href="https://preactjs.com/guide/v10/forms#checkbox-example">
          Checkbox Example
        </Link>. Passing <InlineCode>checked</InlineCode> and{" "}
        <InlineCode>onClick</InlineCode> work because of{" "}
        <Link href="/rest-parameters">
          <InlineCode>...rest</InlineCode>
        </Link>.
      </div>
    ),
    example: <Checkbox />,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Checkbox checked={checked} onClick={onClick} />`}
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
        <Checkbox size="sm" />
        <Checkbox size="md" />
        <Checkbox size="lg" />
      </Stack>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="gap-5">
  <Checkbox size="sm" />
  <Checkbox size="md" />
  <Checkbox size="lg" />
</Stack>`}
      />
    ),
  }, {
    title: "Disabled",
    description: (
      <div>
        Set <InlineCode>disabled</InlineCode> to either{" "}
        <InlineCode>true</InlineCode> or{" "}
        <InlineCode>false</InlineCode>. Defaults to{" "}
        <InlineCode>false</InlineCode>.
      </div>
    ),
    example: <Checkbox disabled />,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Checkbox disabled />`}
      />
    ),
  }, {
    title: "Invalid",
    description: (
      <div>
        Set <InlineCode>invalid</InlineCode> to either{" "}
        <InlineCode>true</InlineCode> or{" "}
        <InlineCode>false</InlineCode>. Defaults to{" "}
        <InlineCode>false</InlineCode>.
      </div>
    ),
    example: <Checkbox invalid />,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Checkbox invalid />`}
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
    type: 'Omit<ComponentProps<"input">, "size">',
    default: null,
    notes: (
      <div>
        <div class="leading-relaxed">
          See the docs for{" "}
          <Link href="/rest-parameters">rest parameters</Link>. For{" "}
          <InlineCode>Checkbox</InlineCode>, you could pass anything you
          normally would pass to{" "}
          <InlineCode>{'<input type="checkbox" />'}</InlineCode>{" "}
          because the return value{" "}
          <Link href="https://github.com/adamzerner/rfui/blob/master/islands/atoms/checkbox.tsx">
            looks something like
          </Link>{" "}
          this:
        </div>
        <CodeBlock
          language="tsx"
          code={`<input
  type="checkbox"
  class={className}
  {...rest}
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
        componentName="Checkbox"
        sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/atoms/checkbox.tsx"
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
      <Props props={props} />
    </ComponentDocsPage>
  );
};
