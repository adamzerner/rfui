import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Switch } from "@/components/atoms/switch.tsx";
import {
  ComponentDocsPage,
  ExampleType,
} from "@/components/docs-site/component-docs-page/index.tsx";
import { Stack } from "@/components/helpers/stack.tsx";

export default () => {
  const overviewNotes = (
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
  const examples: ExampleType[] = [{
    title: "Basic",
    demo: <Switch />,
    code: <CodeBlock class="mt-4" language="tsx" code={`<Switch />`} />,
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
    demo: <Switch />,
    code: (
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
    demo: <Switch disabled />,
    code: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Switch disabled />`}
      />
    ),
  }];
  const propsTables = [{
    title: null,
    props: [{
      name: "...rest",
      required: false,
      type: 'ComponentProps<"input">',
      default: null,
      notes: (
        <div>
          <div class="leading-relaxed">
            See the docs for{" "}
            <Link href="/rest-parameters">rest parameters</Link>. For{" "}
            <InlineCode>Switch</InlineCode>, you could pass anything you
            normally would pass to{" "}
            <InlineCode>{'<input type="checkbox" />'}</InlineCode>{" "}
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
    }],
  }];

  return (
    <ComponentDocsPage
      componentName="Switch"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/atoms/switch.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
