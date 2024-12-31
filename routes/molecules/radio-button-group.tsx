import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import {
  ComponentDocsPage,
  ExamplesSectionType,
} from "@/components/docs-site/component-docs-page/index.tsx";
import {
  RadioButtonGroup,
  RadioButtonGroupItem,
} from "@/islands/molecules/radio-button-group.tsx";

export default () => {
  const overviewNotes =
    "Note: The example below won't work due to a quirk in the docs.";
  const examplesSections: ExamplesSectionType[] = [{
    title: "Basic",
    example: (
      <RadioButtonGroup name="plan">
        <RadioButtonGroupItem value="free">
          Free
        </RadioButtonGroupItem>
        <RadioButtonGroupItem value="basic">
          Basic
        </RadioButtonGroupItem>
        <RadioButtonGroupItem value="premium">
          Premium
        </RadioButtonGroupItem>
      </RadioButtonGroup>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<RadioButtonGroup name="plan">
  <RadioButtonGroupItem value="free">
    Free
  </RadioButtonGroupItem>
  <RadioButtonGroupItem value="basic">
    Basic
  </RadioButtonGroupItem>
  <RadioButtonGroupItem value="premium">
    Premium
  </RadioButtonGroupItem>
</RadioButtonGroup>`}
      />
    ),
  }, {
    title: "Controlled",
    example: (
      <RadioButtonGroup name="plan">
        <RadioButtonGroupItem value="free">
          Free
        </RadioButtonGroupItem>
        <RadioButtonGroupItem value="basic">
          Basic
        </RadioButtonGroupItem>
        <RadioButtonGroupItem value="premium">
          Premium
        </RadioButtonGroupItem>
      </RadioButtonGroup>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<RadioButtonGroup
  name="plan"
  selectedValue={selectedValue}
  onChange={(newSelectedValue) => {
    setSelectedValue(newSelectedValue);
  }}
>
  <RadioButtonGroupItem value="free">
    Free
  </RadioButtonGroupItem>
  <RadioButtonGroupItem value="basic">
    Basic
  </RadioButtonGroupItem>
  <RadioButtonGroupItem value="premium">
    Premium
  </RadioButtonGroupItem>
</RadioButtonGroup>`}
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
          This will be passed to the{" "}
          <InlineCode>{`<input type="radio" />`}</InlineCode> in{" "}
          <InlineCode>{`RadioButtonGroupItem`}</InlineCode>.
        </div>
      ),
    }, {
      name: "selectedValue",
      required: false,
      type: 'RadioButtonType["value"]',
      default: null,
      notes: null,
    }, {
      name: "onChange",
      required: false,
      type: '(newSelectedVal: RadioButtonType["value"]) => void',
      default: null,
      notes: null,
    }, {
      name: "children",
      required: true,
      type: "ComponentChild",
      default: null,
      notes: null,
    }],
  }, {
    title: "RadioButtonGroupItem",
    props: [{
      name: "value",
      required: false,
      type: 'RadioButtonType["value"]',
      default: null,
      notes: null,
    }, {
      name: "radioButtonRest",
      required: false,
      type: 'Omit<RadioButtonType, "size">',
      default: null,
      notes: (
        <div>
          <div class="leading-relaxed">
            This gets spread to the <InlineCode>RadioButton</InlineCode>{" "}
            like so:
          </div>
          <CodeBlock
            language="tsx"
            code={`<div>
  ...
  <RadioButton {...radioButtonRest} />
</div>`}
          />
        </div>
      ),
    }, {
      name: "children",
      required: true,
      type: "ComponentChild",
      default: null,
      notes: null,
    }, {
      name: "...rest",
      required: false,
      type: 'ComponentProps<"label">',
      default: null,
      notes: null,
    }],
  }];

  return (
    <ComponentDocsPage
      componentName="RadioButtonGroup"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/islands/molecules/radio-button-group.tsx"
      overviewNotes={overviewNotes}
      examplesSections={examplesSections}
      propsTables={propsTables}
    />
  );
};
