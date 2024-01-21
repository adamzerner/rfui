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
import { Prop } from "@/components/docs-site/component-docs-page/prop.tsx";
import { Props } from "@/components/docs-site/component-docs-page/props.tsx";
import { SectionType } from "@/components/docs-site/component-docs-page/section-type.ts";
import { Stack } from "@/components/helpers/stack.tsx";
import { Card } from "@/components/molecules/card.tsx";
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

  const notes =
    "Add some flair and professionalism to your radio buttons and associated content.";
  const sections: SectionType[] = [{
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
  const props = [{
    name: "padding",
    required: false,
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    notes: null,
  }, {
    name: "rounded",
    required: false,
    type: '"square" | "sm" | "lg"',
    default: '"sm"',
    notes: null,
  }, {
    name: "children",
    required: true,
    type: "ComponentChild",
    default: null,
    notes: null,
  }];
  const radioButtonCardGroupItemProps = [{
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
          This gets spread to the <InlineCode>RadioButton</InlineCode> like so:
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
  }];

  return (
    <ComponentDocsPage
      sectionTitles={sections.map((s) => s.title)}
    >
      <Header
        componentName="RadioButtonCardGroup"
        sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/islands/molecules/radio-button-card-group.tsx"
        importStatement='import { RadioButtonCardGroup, RadioButtonCardGroupItem } from "rfui";'
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
      <Props subComponentTitle="RadioButtonCardGroupItem">
        {radioButtonCardGroupItemProps.map((prop) => {
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
