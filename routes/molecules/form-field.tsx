import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { FormField } from "@/components/molecules/form-field.tsx";
import { ComponentDocsPage } from "@/islands/demo/component-docs-page.tsx";

export default () => {
  const sections = [{
    title: "Basic",
    example: () => <FormField label="Name" />,
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<FormField label="Name" />`}
      />
    ),
  }, {
    title: "Helper text",
    example: () => (
      <FormField label="Name" helperText="Your first and last name" />
    ),
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<FormField label="Name" helperText="Your first and last name" />`}
      />
    ),
  }, {
    title: "Invalid",
    example: () => <FormField label="Name" invalid />,
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<FormField label="Name" invalid />`}
      />
    ),
  }, {
    title: "Error text",
    example: () => <FormField label="Name" invalid errorText="Invalid name" />,
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<FormField label="Name" invalid errorText="Invalid name" />`}
      />
    ),
  }, {
    title: "Helper and error text",
    example: () => (
      <FormField
        label="Name"
        helperText="Your first and last name"
        invalid
        errorText="Invalid name"
      />
    ),
    exampleCode: () => (
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
    example: () => (
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
    exampleCode: () => (
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
    example: () => (
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
    exampleCode: () => (
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
    example: () => (
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
    exampleCode: () => (
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
    example: () => (
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
    exampleCode: () => (
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
    example: () => (
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
    exampleCode: () => (
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
  }];

  return (
    <ComponentDocsPage
      componentName="FormField"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/molecules/form-field.tsx"
      sections={sections}
      props={props}
    />
  );
};
