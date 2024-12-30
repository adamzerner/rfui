import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { RadioButton } from "@/components/atoms/radio-button.tsx";
import { ExamplesSectionType } from "@/components/docs-site/component-docs-page/examples-section-type.ts";
import { ComponentDocsPage } from "@/components/docs-site/component-docs-page/index.tsx";
import { Stack } from "@/components/helpers/stack.tsx";

export default () => {
  const overviewNotes = (
    <Stack class="gap-3">
      <div>
        This component is basically just a wrapper for{" "}
        <InlineCode>{`<input type="radio" />`}</InlineCode>. You'll probably
        want to use it along with a{" "}
        <InlineCode>{`<label>`}</InlineCode>. You also might prefer to use
        RFUI's{" "}
        <Link href="/molecules/form-field">
          <InlineCode>{`FormField`}</InlineCode>
        </Link>{" "}
        component instead.
      </div>
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
    </Stack>
  );
  const examplesSections: ExamplesSectionType[] = [{
    title: "Basic",
    example: <RadioButton />,
    exampleCode: (
      <CodeBlock class="mt-4" language="tsx" code={`<RadioButton />`} />
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
        <Link href="https://preactjs.com/guide/v10/forms#checkboxes--radio-buttons">
          Checkboxes & Radio Buttons
        </Link>. Passing <InlineCode>checked</InlineCode> and{" "}
        <InlineCode>onClick</InlineCode> work because of{" "}
        <Link href="/rest-parameters">
          <InlineCode>...rest</InlineCode>
        </Link>.
      </div>
    ),
    example: <RadioButton />,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<RadioButton checked={checked} onClick={onClick} />`}
      />
    ),
  }, {
    title: "Size",
    description: (
      <div>
        Set <InlineCode>size</InlineCode> to either{" "}
        <InlineCode>"sm"</InlineCode>, <InlineCode>"md"</InlineCode> or{" "}
        <InlineCode>"lg"</InlineCode>. Defaults to{" "}
        <InlineCode>"md"</InlineCode>.
      </div>
    ),
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
    description: (
      <div>
        Set <InlineCode>disabled</InlineCode> to either{" "}
        <InlineCode>true</InlineCode> or{" "}
        <InlineCode>false</InlineCode>. Defaults to{" "}
        <InlineCode>false</InlineCode>.
      </div>
    ),
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
    description: (
      <div>
        Set <InlineCode>invalid</InlineCode> to either{" "}
        <InlineCode>true</InlineCode> or{" "}
        <InlineCode>false</InlineCode>. Defaults to{" "}
        <InlineCode>false</InlineCode>.
      </div>
    ),
    example: <RadioButton invalid />,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<RadioButton invalid />`}
      />
    ),
  }];
  const propsTables = [{
    title: null,
    props: [{
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
    }],
  }];

  return (
    <ComponentDocsPage
      componentName="RadioButton"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/atoms/radio-button.tsx"
      overviewNotes={overviewNotes}
      examplesSections={examplesSections}
      propsTables={propsTables}
    />
  );
};
