import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { H2 } from "@/components/atoms/h2.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
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
import { Card } from "@/components/molecules/card.tsx";
import {
  RadioButtonGroup,
  RadioButtonGroupItem,
} from "@/islands/molecules/radio-button-group.tsx";

export default () => {
  const notes = null;
  const sections: SectionType[] = [{
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
  }];
  const props = [{
    name: "children",
    required: true,
    type: "ComponentChild",
    default: null,
    notes: null,
  }];
  const radioButtonGroupItemProps = [{
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
  }, {
    name: "...rest",
    required: false,
    type: 'ComponentProps<"label">',
    default: null,
    notes: null,
  }];

  return (
    <ComponentDocsPage
      sectionTitles={sections.map((s) => s.title)}
    >
      <Header
        componentName="RadioButtonGroup"
        sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/islands/molecules/radio-button-group.tsx"
        importStatement='import { RadioButtonGroup, RadioButtonGroupItem } from "rfui";'
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
      <Props subComponentTitle="RadioButtonGroupItem">
        {radioButtonGroupItemProps.map((prop) => {
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
