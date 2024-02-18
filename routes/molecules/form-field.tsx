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
    title: "Controlled",
    description: (
      <div>
        See{" "}
        <Link href="https://preactjs.com/guide/v10/forms#controlled--uncontrolled-components">
          Controlled & Uncontrolled Components
        </Link>.
      </div>
    ),
    example: <FormField label="Name" />,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<FormField label="Name" value={value} inputRest={{ onInput: onInput }} />`}
      />
    ),
  }, {
    title: "Helper text",
    description: (
      <div>
        Set <InlineCode>helperText</InlineCode>{" "}
        to a string to render helper text above the form field.
      </div>
    ),
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
    description: (
      <div>
        Set <InlineCode>invalid</InlineCode> to either{" "}
        <InlineCode>true</InlineCode> or{" "}
        <InlineCode>false</InlineCode>. Defaults to{" "}
        <InlineCode>false</InlineCode>.
      </div>
    ),
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
    description: (
      <div>
        When <InlineCode>invalid</InlineCode> is{" "}
        <InlineCode>true</InlineCode>, set <InlineCode>errorText</InlineCode>
        {" "}
        to a string to render error text above the form field.
      </div>
    ),
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
    description: "You can include both helper and error text.",
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
    description: (
      <div>
        These examples use <InlineCode>class="w-14 max-w-full"</InlineCode> and
        {" "}
        <InlineCode>class="w-10"</InlineCode>{" "}
        to set the width of the form field.
      </div>
    ),
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
    description: (
      <Stack class="gap-3">
        <div>
          <InlineCode>type</InlineCode> gets passed to{" "}
          <Link href="/atoms/input">
            <InlineCode>Input</InlineCode>
          </Link>. However, there are two minor exceptions:{" "}
          <Link href="#checkbox">
            <InlineCode>"checkbox"</InlineCode>
          </Link>{" "}
          and{" "}
          <Link href="#passwordinput">
            <InlineCode>"rfui-password-input"</InlineCode>
          </Link>.
        </div>
        <div>
          RFUI's <InlineCode>Input</InlineCode> component wraps the native HTML
          {" "}
          <InlineCode>input</InlineCode> and passes{" "}
          <InlineCode>type</InlineCode> to{" "}
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
      </Stack>
    ),
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
  }, {
    title: "Checkbox",
    description: (
      <div>
        If you pass <InlineCode>type="checkbox"</InlineCode> it will use RFUI's
        {" "}
        <Link href="/atoms/checkbox">
          <InlineCode>Checkbox</InlineCode>
        </Link>{" "}
        component instead of doing{" "}
        <InlineCode>{`<Input type="checkbox" />`}</InlineCode>.
      </div>
    ),
    example: <FormField label="Agreed" type="checkbox" />,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<FormField label="Agreed" type="checkbox" />`}
      />
    ),
  }, {
    title: "Switch",
    description: (
      <div>
        If you pass <InlineCode>type="switch"</InlineCode> it will use RFUI's
        {" "}
        <Link href="/atoms/switch">
          <InlineCode>Switch</InlineCode>
        </Link>.
      </div>
    ),
    example: <FormField label="Agreed" type="switch" />,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<FormField label="Agreed" type="switch" />`}
      />
    ),
  }, {
    title: "PasswordInput",
    description: (
      <div>
        To use{" "}
        <Link href="/molecules/password-input">
          <InlineCode>PasswordInput</InlineCode>
        </Link>{" "}
        with <InlineCode>FormField</InlineCode> set{" "}
        <InlineCode>type</InlineCode> to{" "}
        <InlineCode>"rfui-password-input"</InlineCode>.
      </div>
    ),
    example: (
      <FormField label="Password" type="rfui-password-input" value="foobar" />
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<FormField label="Password" type="rfui-password-input" value="foobar" />`}
      />
    ),
  }, {
    title: "Textarea",
    description: (
      <div>
        To use{" "}
        <Link href="/molecules/textarea">
          <InlineCode>Textarea</InlineCode>
        </Link>{" "}
        with <InlineCode>FormField</InlineCode> set{" "}
        <InlineCode>type</InlineCode> to <InlineCode>"textarea"</InlineCode>.
      </div>
    ),
    example: <FormField label="Notes" type="textarea" />,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<FormField label="Notes" type="textarea" />`}
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
    type: 'ComponentProps<"input">["name"]',
    default: null,
    notes: null,
  }, {
    name: "value",
    required: false,
    type: 'ComponentProps<"input">["value"]',
    default: null,
    notes: null,
  }, {
    name: "type",
    required: false,
    type: 'ComponentProps<"input">["type"] | "rfui-password-input"',
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
    name: "errorText",
    required: false,
    type: "string",
    default: null,
    notes: null,
  }, {
    name: "inputRest",
    required: false,
    type:
      'Omit<ComponentProps<"input">, "name" | "value" | "type" | "required" | "size" | "rounded" | "invalid">',
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
    name: "textareaRest",
    required: false,
    type:
      'Omit<ComponentProps<"textarea">, "id" | "name" | "value" | "required" | "invalid">',
    default: null,
    notes: (
      <div>
        <div>
          The structure of <InlineCode>FormField</InlineCode> when used with
          {" "}
          <InlineCode>type="textarea"</InlineCode> is something like this:
        </div>
        <CodeBlock
          language="tsx"
          code={`<div>
  ...
  <Textarea></Textarea>
</div>`}
        />
        <div class="mt-4 mb-3">
          <InlineCode>textareaRest</InlineCode> gets passed like this:
        </div>
        <CodeBlock
          language="tsx"
          code={`<Textarea {...textareaRest}></Textarea>`}
        />
      </div>
    ),
  }, {
    name: "...rest",
    required: false,
    type: 'Omit<ComponentProps<"div">, "size">',
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
