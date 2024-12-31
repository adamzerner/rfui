import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import {
  ComponentDocsPage,
  ExamplesSectionType,
} from "@/components/docs-site/component-docs-page/index.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { Stepper } from "@/islands/molecules/stepper.tsx";

export default () => {
  const overviewNotes = (
    <div>
      A stepper component like this lets users select the number they want in a
      few easy clicks. See{" "}
      <Link href="https://www.nngroup.com/articles/input-steppers/">
        Design Guidelines for Input Steppers
      </Link>{" "}
      from Nielsen Norman Group.
    </div>
  );
  const examplesSections: ExamplesSectionType[] = [{
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
    title: "Uncontrolled",
    description: (
      <div>
        Adding <InlineCode>name="number-of-items"</InlineCode> will lead to an
        {" "}
        <InlineCode>{`<input type="hidden" name="number-of-items"`}</InlineCode>
        {" "}
        being present with a <InlineCode>value</InlineCode>{" "}
        set to the value of the <InlineCode>Stepper</InlineCode>.
      </div>
    ),
    example: <Stepper name="number-of-items" />,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stepper name="number-of-items" />`}
      />
    ),
  }, {
    title: "Controlled",
    description: (
      <div>
        Use the <InlineCode>onChange</InlineCode> function. It has a type of
        {" "}
        <InlineCode>{`(newValue: number) => void`}</InlineCode>.
      </div>
    ),
    example: <Stepper />,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stepper onChange={onChange} />`}
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
        <InlineCode>"full"</InlineCode>. Defaults to the value of the CSS
        variable <InlineCode>--default-roundedness</InlineCode>. See{" "}
        <Link href="/default-roundedness">
          "Default roundedness"
        </Link>.
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
    description: (
      <div>
        Set <InlineCode>startingValue</InlineCode> to the number you want the
        {" "}
        <InlineCode>Stepper</InlineCode> to begin at.
      </div>
    ),
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
    description: (
      <div>
        In this example the <InlineCode>min</InlineCode> is 0 and the{" "}
        <InlineCode>max</InlineCode> is 5.
      </div>
    ),
    example: <Stepper min={0} max={5} />,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stepper min={0} max={5} />`}
      />
    ),
  }];
  const propsTables = [{
    title: null,
    props: [{
      name: "name",
      required: false,
      type: "string",
      default: null,
      notes: (
        <div>
          To be used for{" "}
          <InlineCode>
            {`<input type="hidden" name={name} value={value} />`}
          </InlineCode>. Without <InlineCode>name</InlineCode>, the{" "}
          <InlineCode>{`<input type="hidden" />`}</InlineCode> won't be present.
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
      name: "startingValue",
      required: false,
      type: "number",
      default: "0",
      notes: null,
    }, {
      name: "onChange",
      required: false,
      type: "(newValue: number) => void",
      default: null,
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
      type: 'Omit<ComponentProps<"div">, "size" | "min" | "max">',
      default: null,
      notes: (
        <div>
          <div class="leading-relaxed">
            See the docs for{" "}
            <Link href="/rest-parameters">rest parameters</Link>. For{" "}
            <InlineCode>Stepper</InlineCode>, you could pass anything you
            normally would pass to <InlineCode>{"<div>"}</InlineCode>{" "}
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
    }],
  }];

  return (
    <ComponentDocsPage
      componentName="Stepper"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/islands/molecules/stepper.tsx"
      overviewNotes={overviewNotes}
      examplesSections={examplesSections}
      propsTables={propsTables}
    />
  );
};
