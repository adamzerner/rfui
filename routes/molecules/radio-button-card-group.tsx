import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { ExamplesSectionType } from "@/components/docs-site/component-docs-page/examples-section-type.ts";
import { ComponentDocsPage } from "@/components/docs-site/component-docs-page/index.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import {
  RadioButtonCardGroup,
  RadioButtonCardGroupItem,
} from "@/islands/molecules/radio-button-card-group.tsx";
import { useSignal } from "@preact/signals";

export default () => {
  const basicExampleSelectedItemName = useSignal<string | null>(null);
  const paddingSmExampleSelectedItemName = useSignal<string | null>(null);
  const paddingMdExampleSelectedItemName = useSignal<string | null>(null);
  const paddingLgExampleSelectedItemName = useSignal<string | null>(null);
  const roundedSquareExampleSelectedItemName = useSignal<string | null>(null);
  const roundedSmExampleSelectedItemName = useSignal<string | null>(null);
  const roundedLgExampleSelectedItemName = useSignal<string | null>(null);

  const overviewNotes = (
    <Stack class="gap-2">
      <div>
        Add some flair and professionalism to your radio buttons and associated
        content.
      </div>
      <div>
        Note: The example below doesn't work due to a quirk in the docs.
      </div>
    </Stack>
  );
  const examplesSections: ExamplesSectionType[] = [{
    title: "Basic",
    example: (
      <RadioButtonCardGroup>
        <RadioButtonCardGroupItem
          name="basic-one"
          selectedItemName={basicExampleSelectedItemName}
        >
          One
        </RadioButtonCardGroupItem>
        <RadioButtonCardGroupItem
          name="basic-two"
          selectedItemName={basicExampleSelectedItemName}
        >
          Two
        </RadioButtonCardGroupItem>
        <RadioButtonCardGroupItem
          name="basic-three"
          selectedItemName={basicExampleSelectedItemName}
        >
          Three
        </RadioButtonCardGroupItem>
      </RadioButtonCardGroup>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<RadioButtonCardGroup>
  <RadioButtonCardGroupItem
    name="basic-one"
    selectedItemName={basicExampleSelectedItemName}
  >
    One
  </RadioButtonCardGroupItem>
  <RadioButtonCardGroupItem
    name="basic-two"
    selectedItemName={basicExampleSelectedItemName}
  >
    Two
  </RadioButtonCardGroupItem>
  <RadioButtonCardGroupItem
    name="basic-three"
    selectedItemName={basicExampleSelectedItemName}
  >
    Three
  </RadioButtonCardGroupItem>
</RadioButtonCardGroup>`}
      />
    ),
  }, {
    title: "Padding",
    description: (
      <div>
        Set <InlineCode>padding</InlineCode> to <InlineCode>"sm"</InlineCode>,
        {" "}
        <InlineCode>"md"</InlineCode>, or{" "}
        <InlineCode>"lg"</InlineCode>. Defaults to{" "}
        <InlineCode>"md"</InlineCode>.
      </div>
    ),
    example: (
      <Stack class="gap-5">
        <RadioButtonCardGroup padding="sm">
          <RadioButtonCardGroupItem
            name="padding-sm-one"
            selectedItemName={paddingSmExampleSelectedItemName}
          >
            One
          </RadioButtonCardGroupItem>
          <RadioButtonCardGroupItem
            name="padding-sm-two"
            selectedItemName={paddingSmExampleSelectedItemName}
          >
            Two
          </RadioButtonCardGroupItem>
          <RadioButtonCardGroupItem
            name="padding-sm-three"
            selectedItemName={paddingSmExampleSelectedItemName}
          >
            Three
          </RadioButtonCardGroupItem>
        </RadioButtonCardGroup>
        <RadioButtonCardGroup padding="md">
          <RadioButtonCardGroupItem
            name="padding-md-one"
            selectedItemName={paddingMdExampleSelectedItemName}
          >
            One
          </RadioButtonCardGroupItem>
          <RadioButtonCardGroupItem
            name="padding-md-two"
            selectedItemName={paddingMdExampleSelectedItemName}
          >
            Two
          </RadioButtonCardGroupItem>
          <RadioButtonCardGroupItem
            name="padding-md-three"
            selectedItemName={paddingMdExampleSelectedItemName}
          >
            Three
          </RadioButtonCardGroupItem>
        </RadioButtonCardGroup>
        <RadioButtonCardGroup padding="lg">
          <RadioButtonCardGroupItem
            name="padding-lg-one"
            selectedItemName={paddingLgExampleSelectedItemName}
          >
            One
          </RadioButtonCardGroupItem>
          <RadioButtonCardGroupItem
            name="padding-lg-two"
            selectedItemName={paddingLgExampleSelectedItemName}
          >
            Two
          </RadioButtonCardGroupItem>
          <RadioButtonCardGroupItem
            name="padding-lg-three"
            selectedItemName={paddingLgExampleSelectedItemName}
          >
            Three
          </RadioButtonCardGroupItem>
        </RadioButtonCardGroup>
      </Stack>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="gap-5">
  <RadioButtonCardGroup padding="sm">
    <RadioButtonCardGroupItem
      name="padding-sm-one"
      selectedItemName={paddingSmExampleSelectedItemName}
    >
      One
    </RadioButtonCardGroupItem>
    <RadioButtonCardGroupItem
      name="padding-sm-two"
      selectedItemName={paddingSmExampleSelectedItemName}
    >
      Two
    </RadioButtonCardGroupItem>
    <RadioButtonCardGroupItem
      name="padding-sm-three"
      selectedItemName={paddingSmExampleSelectedItemName}
    >
      Three
    </RadioButtonCardGroupItem>
  </RadioButtonCardGroup>
  <RadioButtonCardGroup padding="md">
    <RadioButtonCardGroupItem
      name="padding-md-one"
      selectedItemName={paddingMdExampleSelectedItemName}
    >
      One
    </RadioButtonCardGroupItem>
    <RadioButtonCardGroupItem
      name="padding-md-two"
      selectedItemName={paddingMdExampleSelectedItemName}
    >
      Two
    </RadioButtonCardGroupItem>
    <RadioButtonCardGroupItem
      name="padding-md-three"
      selectedItemName={paddingMdExampleSelectedItemName}
    >
      Three
    </RadioButtonCardGroupItem>
  </RadioButtonCardGroup>
  <RadioButtonCardGroup padding="lg">
    <RadioButtonCardGroupItem
      name="padding-lg-one"
      selectedItemName={paddingLgExampleSelectedItemName}
    >
      One
    </RadioButtonCardGroupItem>
    <RadioButtonCardGroupItem
      name="padding-lg-two"
      selectedItemName={paddingLgExampleSelectedItemName}
    >
      Two
    </RadioButtonCardGroupItem>
    <RadioButtonCardGroupItem
      name="padding-lg-three"
      selectedItemName={paddingLgExampleSelectedItemName}
    >
      Three
    </RadioButtonCardGroupItem>
  </RadioButtonCardGroup>
</Stack>`}
      />
    ),
  }, {
    title: "Rounded",
    description: (
      <div>
        Set <InlineCode>rounded</InlineCode> to{" "}
        <InlineCode>"square"</InlineCode>, <InlineCode>"sm"</InlineCode>, or
        {" "}
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
        <RadioButtonCardGroup rounded="square">
          <RadioButtonCardGroupItem
            name="rounded-square-one"
            selectedItemName={roundedSquareExampleSelectedItemName}
          >
            One
          </RadioButtonCardGroupItem>
          <RadioButtonCardGroupItem
            name="rounded-square-two"
            selectedItemName={roundedSquareExampleSelectedItemName}
          >
            Two
          </RadioButtonCardGroupItem>
          <RadioButtonCardGroupItem
            name="rounded-square-three"
            selectedItemName={roundedSquareExampleSelectedItemName}
          >
            Three
          </RadioButtonCardGroupItem>
        </RadioButtonCardGroup>
        <RadioButtonCardGroup rounded="sm">
          <RadioButtonCardGroupItem
            name="rounded-sm-one"
            selectedItemName={roundedSmExampleSelectedItemName}
          >
            One
          </RadioButtonCardGroupItem>
          <RadioButtonCardGroupItem
            name="rounded-sm-two"
            selectedItemName={roundedSmExampleSelectedItemName}
          >
            Two
          </RadioButtonCardGroupItem>
          <RadioButtonCardGroupItem
            name="rounded-sm-three"
            selectedItemName={roundedSmExampleSelectedItemName}
          >
            Three
          </RadioButtonCardGroupItem>
        </RadioButtonCardGroup>
        <RadioButtonCardGroup rounded="lg">
          <RadioButtonCardGroupItem
            name="rounded-lg-one"
            selectedItemName={roundedLgExampleSelectedItemName}
          >
            One
          </RadioButtonCardGroupItem>
          <RadioButtonCardGroupItem
            name="rounded-lg-two"
            selectedItemName={roundedLgExampleSelectedItemName}
          >
            Two
          </RadioButtonCardGroupItem>
          <RadioButtonCardGroupItem
            name="rounded-lg-three"
            selectedItemName={roundedLgExampleSelectedItemName}
          >
            Three
          </RadioButtonCardGroupItem>
        </RadioButtonCardGroup>
      </Stack>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="gap-5">
  <RadioButtonCardGroup rounded="square">
    <RadioButtonCardGroupItem
      name="rounded-square-one"
      selectedItemName={roundedSquareExampleSelectedItemName}
    >
      One
    </RadioButtonCardGroupItem>
    <RadioButtonCardGroupItem
      name="rounded-square-two"
      selectedItemName={roundedSquareExampleSelectedItemName}
    >
      Two
    </RadioButtonCardGroupItem>
    <RadioButtonCardGroupItem
      name="rounded-square-three"
      selectedItemName={roundedSquareExampleSelectedItemName}
    >
      Three
    </RadioButtonCardGroupItem>
  </RadioButtonCardGroup>
  <RadioButtonCardGroup rounded="sm">
    <RadioButtonCardGroupItem
      name="rounded-sm-one"
      selectedItemName={roundedSmExampleSelectedItemName}
    >
      One
    </RadioButtonCardGroupItem>
    <RadioButtonCardGroupItem
      name="rounded-sm-two"
      selectedItemName={roundedSmExampleSelectedItemName}
    >
      Two
    </RadioButtonCardGroupItem>
    <RadioButtonCardGroupItem
      name="rounded-sm-three"
      selectedItemName={roundedSmExampleSelectedItemName}
    >
      Three
    </RadioButtonCardGroupItem>
  </RadioButtonCardGroup>
  <RadioButtonCardGroup rounded="lg">
    <RadioButtonCardGroupItem
      name="rounded-lg-one"
      selectedItemName={roundedLgExampleSelectedItemName}
    >
      One
    </RadioButtonCardGroupItem>
    <RadioButtonCardGroupItem
      name="rounded-lg-two"
      selectedItemName={roundedLgExampleSelectedItemName}
    >
      Two
    </RadioButtonCardGroupItem>
    <RadioButtonCardGroupItem
      name="rounded-lg-three"
      selectedItemName={roundedLgExampleSelectedItemName}
    >
      Three
    </RadioButtonCardGroupItem>
  </RadioButtonCardGroup>
</Stack>`}
      />
    ),
  }];
  const propsTables = [{
    title: null,
    props: [{
      name: "padding",
      required: false,
      type: '"sm" | "md" | "lg"',
      default: '"md"',
      notes: null,
    }, {
      name: "rounded",
      required: false,
      type: '"square" | "sm" | "lg"',
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
      name: "children",
      required: true,
      type: "ComponentChild",
      default: null,
      notes: null,
    }],
  }, {
    title: "RadioButtonCardGroupItem",
    props: [{
      name: "name",
      required: true,
      type: "string",
      default: null,
      notes: null,
    }, {
      name: "value",
      required: false,
      type: 'RadioButtonType["value"]',
      default: null,
      notes: null,
    }, {
      name: "selectedItemName",
      required: true,
      type: "Signal<string | null>",
      default: null,
      notes: (
        <div>
          See the Preact docs for{" "}
          <Link href="https://preactjs.com/guide/v10/signals">signals</Link>.
        </div>
      ),
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
    }],
  }];

  return (
    <ComponentDocsPage
      componentName="RadioButtonCardGroup"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/islands/molecules/radio-button-card-group.tsx"
      overviewNotes={overviewNotes}
      examplesSections={examplesSections}
      propsTables={propsTables}
    />
  );
};
