import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { H2 } from "@/components/atoms/h2.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Switch } from "@/components/atoms/switch.tsx";
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
    <Stack class="gap-3">
      <div>
        Unlike checkboxes, switches should deliver immediate results instead of
        requiring the user to click "Save" to see the results. See{" "}
        <Link href="https://www.nngroup.com/articles/toggle-switch-guidelines/">
          Toggle-Switch Guidelines
        </Link>{" "}
        for more information.
      </div>
      <div>
        Consider using RFUI's{" "}
        <Link href="/molecules/form-field#switch">
          <InlineCode>FormField</InlineCode>
        </Link>{" "}
        component with <InlineCode>type="switch"</InlineCode>{" "}
        instead. If not, you'll probably want to use{" "}
        <InlineCode>{`<label>`}</InlineCode> along with{" "}
        <InlineCode>{`Switch`}</InlineCode>.
      </div>
    </Stack>
  );
  const sections: SectionType[] = [{
    title: "Basic",
    example: <Switch />,
    exampleCode: <CodeBlock class="mt-4" language="tsx" code={`<Switch />`} />,
  }, {
    title: "Switch",
    description: (
      <div>
        See{" "}
        <Link href="https://preactjs.com/guide/v10/forms#controlled--uncontrolled-components">
          Controlled & Uncontrolled Components
        </Link>{" "}
        and{" "}
        <Link href="https://preactjs.com/guide/v10/forms#checkbox-example">
          Checkbox Example
        </Link>{" "}
        (since <InlineCode>Switch</InlineCode> uses{" "}
        <InlineCode>{`<input type="checkbox" />`}</InlineCode>). Passing{" "}
        <InlineCode>checked</InlineCode> and <InlineCode>onClick</InlineCode>
        {" "}
        work because of{" "}
        <Link href="/rest-parameters">
          <InlineCode>...rest</InlineCode>
        </Link>.
      </div>
    ),
    example: <Switch />,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Switch checked={checked} onClick={onClick} />`}
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
    example: <Switch disabled />,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Switch disabled />`}
      />
    ),
  }];
  const props = [{
    name: "...rest",
    required: false,
    type: 'ComponentProps<"input">',
    default: null,
    notes: (
      <div>
        <div class="leading-relaxed">
          See the docs for{" "}
          <Link href="/rest-parameters">rest parameters</Link>. For{" "}
          <InlineCode>Switch</InlineCode>, you could pass anything you normally
          would pass to <InlineCode>{'<input type="checkbox" />'}</InlineCode>
          {" "}
          because the return value{" "}
          <Link href="https://github.com/adamzerner/rfui/blob/master/islands/atoms/switch.tsx">
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
        componentName="Switch"
        sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/atoms/switch.tsx"
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
