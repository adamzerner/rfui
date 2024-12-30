import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Textarea } from "@/components/atoms/textarea.tsx";
import { ExamplesSectionType } from "@/components/docs-site/component-docs-page/examples-section-type.ts";
import { ComponentDocsPage } from "@/components/docs-site/component-docs-page/index.tsx";
import { Stack } from "@/components/helpers/stack.tsx";

export default () => {
  const overviewNotes = null;
  const examplesSections: ExamplesSectionType[] = [{
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
    example: <Textarea></Textarea>,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Textarea value={value} onInput={onInput}></Textarea>`}
      />
    ),
  }, {
    title: "Rounded",
    description: (
      <div>
        Set <InlineCode>rounded</InlineCode> to{" "}
        <InlineCode>"square"</InlineCode>, <InlineCode>"sm"</InlineCode> or{" "}
        <InlineCode>"lg"</InlineCode>. Defaults to the value of the CSS variable
        {" "}
        <InlineCode>--default-roundedness</InlineCode>. See{" "}
        <Link href="/default-roundedness">
          "Default roundedness"
        </Link>.
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
        Set <InlineCode>disabled</InlineCode> to either{" "}
        <InlineCode>true</InlineCode> or{" "}
        <InlineCode>false</InlineCode>. Defaults to{" "}
        <InlineCode>false</InlineCode>.
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
        Set <InlineCode>readonly</InlineCode> to either{" "}
        <InlineCode>true</InlineCode> or{" "}
        <InlineCode>false</InlineCode>. Defaults to{" "}
        <InlineCode>false</InlineCode>.
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
        Set <InlineCode>invalid</InlineCode> to either{" "}
        <InlineCode>true</InlineCode> or{" "}
        <InlineCode>false</InlineCode>. Defaults to{" "}
        <InlineCode>false</InlineCode>.
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
  const propsTables = [{
    title: null,
    props: [{
      name: "rounded",
      required: false,
      type: "'square' | 'sm' | 'lg'",
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
      name: "children",
      required: true,
      type: "ComponentChild",
      default: null,
      notes: null,
    }, {
      name: "...rest",
      required: false,
      type: 'ComponentProps<"textarea">',
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
    }],
  }];

  return (
    <ComponentDocsPage
      componentName="Textarea"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/atoms/textarea.tsx"
      overviewNotes={overviewNotes}
      examplesSections={examplesSections}
      propsTables={propsTables}
    />
  );
};
