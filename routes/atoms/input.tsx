import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Input } from "@/components/atoms/input.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { ExamplesSectionType } from "@/components/docs-site/component-docs-page/examples-section-type.ts";
import { ComponentDocsPage } from "@/components/docs-site/component-docs-page/index.tsx";
import { Stack } from "@/components/helpers/stack.tsx";

export default () => {
  const overviewNotes = (
    <div>
      This component is basically just a wrapper for{" "}
      <InlineCode>{`<input />`}</InlineCode>. You'll probably want to use it
      along with a{" "}
      <InlineCode>{`<label>`}</InlineCode>. You also might prefer to use RFUI's
      {" "}
      <Link href="/molecules/form-field">
        <InlineCode>{`FormField`}</InlineCode>
      </Link>{" "}
      component instead.
    </div>
  );
  const examplesSections: ExamplesSectionType[] = [{
    title: "Basic",
    example: <Input />,
    exampleCode: <CodeBlock class="mt-4" language="tsx" code={`<Input />`} />,
  }, {
    title: "Controlled",
    description: (
      <div>
        See{" "}
        <Link href="https://preactjs.com/guide/v10/forms#controlled--uncontrolled-components">
          Controlled & Uncontrolled Components
        </Link>. Passing <InlineCode>value</InlineCode> and{" "}
        <InlineCode>onInput</InlineCode> work because of{" "}
        <Link href="/rest-parameters">
          <InlineCode>...rest</InlineCode>
        </Link>.
      </div>
    ),
    example: <Input />,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Input value={value} onInput={onInput} />`}
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
      <Stack class="w-fit gap-5">
        <Input size="sm" />
        <Input size="md" />
        <Input size="lg" />
      </Stack>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="w-fit gap-5">
  <Input size="sm" />
  <Input size="md" />
  <Input size="lg" />
</Stack>`}
      />
    ),
  }, {
    title: "Rounded",
    description: (
      <div>
        Set <InlineCode>rounded</InlineCode> to either{" "}
        <InlineCode>"square"</InlineCode>, <InlineCode>"sm"</InlineCode>,{" "}
        <InlineCode>"lg"</InlineCode> or{" "}
        <InlineCode>"full"</InlineCode>. Defaults to the value of the CSS
        variable <InlineCode>--default-roundedness</InlineCode>. See{" "}
        <Link href="/default-roundedness">
          "Default roundedness"
        </Link>.
      </div>
    ),
    example: (
      <Stack class="w-fit gap-5">
        <Input rounded="square" />
        <Input rounded="sm" />
        <Input rounded="lg" />
        <Input rounded="full" />
      </Stack>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="w-fit gap-5">
  <Input rounded="square" />
  <Input rounded="sm" />
  <Input rounded="lg" />
  <Input rounded="full" />
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
    example: <Input disabled />,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Input disabled />`}
      />
    ),
  }, {
    title: "Readonly",
    description: (
      <div>
        Set <InlineCode>readonly</InlineCode> to either{" "}
        <InlineCode>true</InlineCode> or{" "}
        <InlineCode>false</InlineCode>. Defaults to{" "}
        <InlineCode>false</InlineCode>.
      </div>
    ),
    example: <Input readonly value="example" />,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Input readonly value="example" />`}
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
    example: <Input invalid value="example" />,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Input invalid value="example" />`}
      />
    ),
  }, {
    title: "Type",
    description: (
      <div>
        RFUI's <InlineCode>Input</InlineCode> component wraps the native HTML
        {" "}
        <InlineCode>input</InlineCode> and passes <InlineCode>type</InlineCode>
        {" "}
        to{" "}
        <InlineCode>input</InlineCode>, and so you could find the possible
        values documented{" "}
        <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#input_types">
          here on MDN
        </Link>. If you are thinking of using{" "}
        <InlineCode>number</InlineCode>, consider taking{" "}
        <Link href="https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/">
          this approach
        </Link>{" "}
        instead.
      </div>
    ),
    example: (
      <Stack class="gap-5">
        <Input type="text" placeholder="text" />
        <Input type="email" placeholder="email" />
        <Input type="text" inputmode="numeric" pattern="[0-9]*" />
        <Input type="number" />
        <Input type="password" value="foobar" />
        <Input type="date" />
        <Input type="datetime-local" />
        <Input type="time" />
        <Input type="file" />
        <Input type="range" />
        <Input type="color" />
      </Stack>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="gap-5">
  <Input type="text" placeholder="text" />
  <Input type="email" placeholder="email" />
  <Input type="text" inputmode="numeric" pattern="[0-9]*" />
  <Input type="number" />
  <Input type="password" value="foobar" />
  <Input type="date" />
  <Input type="datetime-local" />
  <Input type="time" />
  <Input type="file" />
  <Input type="range" />
  <Input type="color" />
</Stack>`}
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
      name: "rounded",
      required: false,
      type: '"square" | "sm" | "lg" | "full"',
      default: null,
      notes: (
        <div>
          Defaults to the value of the CSS variable{" "}
          <InlineCode>--default-roundedness</InlineCode>. See{" "}
          <Link href="/default-roundedness">
            "Default roundedness"
          </Link>.
        </div>
      ),
    }, {
      name: "invalid",
      required: false,
      type: "boolean",
      default: "false",
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
            <InlineCode>Input</InlineCode>, you could pass anything you normally
            would pass to <InlineCode>{"<input />"}</InlineCode>{" "}
            because the return value{" "}
            <Link href="https://github.com/adamzerner/rfui/blob/master/islands/atoms/input.tsx">
              looks something like
            </Link>{" "}
            this:
          </div>
          <CodeBlock
            language="tsx"
            code={`<input
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
      componentName="Input"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/atoms/input.tsx"
      overviewNotes={overviewNotes}
      examplesSections={examplesSections}
      propsTables={propsTables}
    />
  );
};
