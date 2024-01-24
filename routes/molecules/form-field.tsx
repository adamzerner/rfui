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
import { FormField } from "@/components/molecules/form-field.tsx";

export default () => {
  const notes = null;
  const sections: SectionType[] = [{
    title: "Basic",
    example: <FormField label="Name" />,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<FormField label="Name" />`}
      />
    ),
  }, {
    title: "Helper text",
    example: <FormField label="Name" helperText="Your first and last name" />,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<FormField label="Name" helperText="Your first and last name" />`}
      />
    ),
  }, {
    title: "Invalid",
    example: <FormField label="Name" invalid />,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<FormField label="Name" invalid />`}
      />
    ),
  }, {
    title: "Error text",
    example: <FormField label="Name" invalid errorText="Invalid name" />,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<FormField label="Name" invalid errorText="Invalid name" />`}
      />
    ),
  }, {
    title: "Helper and error text",
    example: (
      <FormField
        label="Name"
        helperText="Your first and last name"
        invalid
        errorText="Invalid name"
      />
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<FormField
  label="Name"
  helperText="Your first and last name"
  invalid
  errorText="Invalid name"
/>`}
      />
    ),
  }, {
    title: "Required",
    description: (
      <Stack class="gap-3">
        <div>
          Set <InlineCode>required</InlineCode> to <InlineCode>true</InlineCode>
          {" "}
          and <InlineCode>requiredIndicator</InlineCode> to either{" "}
          <InlineCode>"text"</InlineCode>,{" "}
          <InlineCode>"asterisk"</InlineCode>, or{" "}
          <InlineCode>"none"</InlineCode>.
        </div>
        <div>
          See{" "}
          <Link href="https://ux.stackexchange.com/q/840/39046">
            https://ux.stackexchange.com/q/840/39046
          </Link>{" "}
          for a discussion.
        </div>
      </Stack>
    ),
    example: (
      <Stack class="gap-5">
        <FormField
          label="Name"
          required
          requiredIndicator="text"
        />
        <FormField
          label="Name"
          required
          requiredIndicator="asterisk"
        />
      </Stack>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="gap-5">
  <FormField
    label="Name"
    required
    requiredIndicator="text"
  />
  <FormField
    label="Name"
    required
    requiredIndicator="asterisk"
  />
</Stack>`}
      />
    ),
  }, {
    title: "Optional",
    description: (
      <Stack class="gap-3">
        <div>
          Set <InlineCode>required</InlineCode> to{" "}
          <InlineCode>false</InlineCode> and{" "}
          <InlineCode>optionalIndicator</InlineCode> to either{" "}
          <InlineCode>"text"</InlineCode>,{" "}
          <InlineCode>"asterisk"</InlineCode>, or{" "}
          <InlineCode>"none"</InlineCode>.
        </div>
        <div>
          See{" "}
          <Link href="https://ux.stackexchange.com/q/840/39046">
            https://ux.stackexchange.com/q/840/39046
          </Link>{" "}
          for a discussion.
        </div>
      </Stack>
    ),
    example: (
      <Stack class="gap-5">
        <FormField
          label="Name"
          optionalIndicator="text"
        />
        <FormField
          label="Name"
          optionalIndicator="asterisk"
        />
      </Stack>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="gap-5">
  <FormField
    label="Name"
    optionalIndicator="text"
  />
  <FormField
    label="Name"
    optionalIndicator="asterisk"
  />
</Stack>`}
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
        <FormField
          label="Name"
          size="sm"
          required
          requiredIndicator="text"
          helperText="First and last name"
        />
        <FormField
          label="Name"
          size="md"
          required
          requiredIndicator="text"
          helperText="First and last name"
        />
        <FormField
          label="Name"
          size="lg"
          required
          requiredIndicator="text"
          helperText="First and last name"
        />
      </Stack>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="gap-5">
  <FormField
    label="Name"
    size="sm"
    required
    requiredIndicator="text"
    helperText="First and last name"
  />
  <FormField
    label="Name"
    size="md"
    required
    requiredIndicator="text"
    helperText="First and last name"
  />
  <FormField
    label="Name"
    size="lg"
    required
    requiredIndicator="text"
    helperText="First and last name"
  />
</Stack>`}
      />
    ),
  }, {
    title: "Width",
    example: (
      <Stack class="gap-5">
        <FormField
          label="Name on card"
          type="text"
          class="w-14 max-w-full"
        />
        <FormField
          label="Card number"
          type="text"
          class="w-14 max-w-full"
        />
        <FormField
          label="Expiry date"
          type="text"
          class="w-10"
        />
        <FormField
          label="CVC"
          type="text"
          class="w-10"
        />
      </Stack>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="gap-5">
  <FormField
    label="Name on card"
    type="text"
    class="w-14 max-w-full"
  />
  <FormField
    label="Card number"
    type="text"
    class="w-14 max-w-full"
  />
  <FormField
    label="Expiry date"
    type="text"
    class="w-10"
  />
  <FormField
    label="CVC"
    type="text"
    class="w-10"
  />
</Stack>`}
      />
    ),
  }, {
    title: "Type",
    example: (
      <Stack class="gap-5">
        <FormField label="Name" type="text" />
        <FormField label="Email" type="email" />
        <FormField label="Age" type="number" />
        <FormField label="Password" type="password" value="foobar" />
        <FormField label="Birthday" type="date" />
        <FormField label="Appointment" type="datetime-local" />
        <FormField label="Bed time" type="time" />
        <FormField label="Profile photo" type="file" />
        <FormField label="Mood" type="range" />
        <FormField label="Favorite color" type="color" />
      </Stack>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="gap-5">
  <FormField label="Name" type="text" />
  <FormField label="Email" type="email" />
  <FormField label="Age" type="number" />
  <FormField label="Password" type="password" value="foobar" />
  <FormField label="Birthday" type="date" />
  <FormField label="Appointment" type="datetime-local" />
  <FormField label="Bed time" type="time" />
  <FormField label="Profile photo" type="file" />
  <FormField label="Mood" type="range" />
  <FormField label="Favorite color" type="color" />
</Stack>`}
      />
    ),
  }];
  const props = [{
    name: "label",
    required: true,
    type: "string",
    default: null,
    notes: null,
  }, {
    name: "name",
    required: false,
    type: "string",
    default: null,
    notes: null,
  }, {
    name: "value",
    required: false,
    type: "string | number | string[]",
    default: null,
    notes: null,
  }, {
    name: "type",
    required: false,
    type: "string",
    default: null,
    notes: null,
  }, {
    name: "required",
    required: false,
    type: "boolean",
    default: "false",
    notes: null,
  }, {
    name: "requiredIndicator",
    required: false,
    type: '"text" | "asterisk" | "none"',
    default: '"none"',
    notes: (
      <div>
        See{" "}
        <Link href="https://ux.stackexchange.com/q/840/39046">
          https://ux.stackexchange.com/q/840/39046
        </Link>{" "}
        for a discussion.
      </div>
    ),
  }, {
    name: "optionalIndicator",
    required: false,
    type: '"text" | "asterisk" | "none"',
    default: '"none"',
    notes: (
      <div>
        See{" "}
        <Link href="https://ux.stackexchange.com/q/840/39046">
          https://ux.stackexchange.com/q/840/39046
        </Link>{" "}
        for a discussion.
      </div>
    ),
  }, {
    name: "helperText",
    required: false,
    type: "string",
    default: null,
    notes: null,
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
    default: '"sm"',
    notes: null,
  }, {
    name: "invalid",
    required: false,
    type: "boolean",
    default: "false",
    notes: null,
  }, {
    name: "errorText",
    required: false,
    type: "string",
    default: null,
    notes: null,
  }, {
    name: "inputRest",
    required: false,
    type: "JSX.HTMLAttributes<HTMLInputElement>",
    default: null,
    notes: (
      <div>
        <div>
          The structure of <InlineCode>FormField</InlineCode>{" "}
          is something like this:
        </div>
        <CodeBlock
          language="tsx"
          code={`<div>
  ...
  <Input />
</div>`}
        />
        <div class="mt-4 mb-3">
          <InlineCode>inputRest</InlineCode> gets passed like this:
        </div>
        <CodeBlock language="tsx" code={`<Input {...inputRest} />`} />
      </div>
    ),
  }, {
    name: "...rest",
    required: false,
    type: 'Omit<JSX.HTMLAttributes<HTMLDivElement>, "size">',
    default: null,
    notes: (
      <div>
        <div class="leading-relaxed">
          See the docs for{" "}
          <Link href="/rest-parameters">rest parameters</Link>. For{" "}
          <InlineCode>FormField</InlineCode>, you could pass anything you
          normally would pass to <InlineCode>{"<div>"}</InlineCode>{" "}
          because the return value{" "}
          <Link href="https://github.com/adamzerner/rfui/blob/master/islands/molecules/form-field.tsx">
            looks something like
          </Link>{" "}
          this:
        </div>
        <CodeBlock
          language="tsx"
          code={`<div {...rest}>
  ...
</div>`}
        />
      </div>
    ),
  }];

  return (
    <ComponentDocsPage
      sectionTitles={sections.map((s) => s.title)}
    >
      <Header
        componentName="FormField"
        sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/molecules/form-field.tsx"
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
    </ComponentDocsPage>
  );
};
