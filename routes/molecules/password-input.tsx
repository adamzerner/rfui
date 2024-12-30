import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { H2 } from "@/components/atoms/h2.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { OL } from "@/components/atoms/ol.tsx";
import { Text } from "@/components/atoms/text.tsx";
import { UL } from "@/components/atoms/ul.tsx";
import {
  Example,
  Header,
  Notes,
} from "@/components/docs-site/component-docs-page/header.tsx";
import { ComponentDocsPage } from "@/components/docs-site/component-docs-page/index.tsx";
import { PropsTable } from "@/components/docs-site/component-docs-page/props-table.tsx";
import { SectionType } from "@/components/docs-site/component-docs-page/section-type.ts";
import { Stack } from "@/components/helpers/stack.tsx";
import { Card } from "@/components/molecules/card.tsx";
import { PasswordInput } from "@/islands/molecules/password-input.tsx";

export default () => {
  const notes = (
    <Stack class="gap-3">
      <div>
        The <InlineCode>PasswordInput</InlineCode>{" "}
        component provides a button that toggles whether the password is
        visible. The ability to see your password in plain text as you're typing
        {" "}
        <Link href="https://www.nngroup.com/articles/stop-password-masking">
          often
        </Link>{" "}
        <Link href="https://www.lukew.com/ff/entry.asp?1653">improves</Link>
        {" "}
        <Link href="https://ux.stackexchange.com/q/144503/39046">
          usability
        </Link>.
      </div>
      <div>
        Consider using RFUI's{" "}
        <Link href="/molecules/form-field#passwordinput">
          <InlineCode>FormField</InlineCode>
        </Link>{" "}
        component with <InlineCode>type="rfui-password-input"</InlineCode>{" "}
        instead. If not, you'll probably want to use{" "}
        <InlineCode>{`<label>`}</InlineCode> along with{" "}
        <InlineCode>{`PasswordInput`}</InlineCode>.
      </div>
    </Stack>
  );
  const sections: SectionType[] = [{
    title: "Basic",
    example: <PasswordInput />,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<PasswordInput />`}
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
    example: <PasswordInput />,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<PasswordInput value={value} onInput={onInput} />`}
      />
    ),
  }, {
    title: "Default visible",
    description: (
      <div>
        <div class="mb-3">
          Set <InlineCode>defaultVisibility</InlineCode> to{" "}
          <InlineCode>"shown"</InlineCode>. Defaults to{" "}
          <InlineCode>"hidden"</InlineCode>.
        </div>
        <div class="mb-2">Consider the factors at play here, including:</div>
        <OL>
          <li>
            Usability: Seeing * as you type instead of characters like "a" and
            "b" can hurt usability.
          </li>
          <li>
            Actual security: In public places, ***** can prevent malicious
            onlookers from stealing your password.
          </li>
          <li>
            Perceived security: Some users expect to see * as they type their
            password and might question how secure your website is if they see
            their password in plaintext by default instead.
          </li>
        </OL>
        <div class="mb-2 mt-4">
          Related reading:
        </div>
        <UL>
          <li>
            <Link href="https://www.nngroup.com/articles/stop-password-masking">
              Stop Password Masking
            </Link>
          </li>
          <li>
            <Link href="https://www.lukew.com/ff/entry.asp?1653">
              Mobile Design Details: Hide/Show Passwords
            </Link>
          </li>
          <li>
            <Link href="https://ux.stackexchange.com/q/144503/39046">
              Is password-unmasking worth the potential security downside?
            </Link>
          </li>
        </UL>
      </div>
    ),
    example: <PasswordInput defaultVisibility="shown" />,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<PasswordInput defaultVisibility="shown" />`}
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
        <PasswordInput size="sm" />
        <PasswordInput size="md" />
        <PasswordInput size="lg" />
      </Stack>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="gap-5">
  <PasswordInput size="sm" />
  <PasswordInput size="md" />
  <PasswordInput size="lg" />
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
        <PasswordInput rounded="square" />
        <PasswordInput rounded="sm" />
        <PasswordInput rounded="lg" />
        <PasswordInput rounded="full" />
      </Stack>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="gap-5">
  <PasswordInput rounded="square" />
  <PasswordInput rounded="sm" />
  <PasswordInput rounded="lg" />
  <PasswordInput rounded="full" />
</Stack>`}
      />
    ),
  }, {
    title: "Invalid",
    description: (
      <div>
        Set <InlineCode>invalid</InlineCode> to <InlineCode>true</InlineCode> or
        {" "}
        <InlineCode>false</InlineCode>. Defaults to{" "}
        <InlineCode>false</InlineCode>.
      </div>
    ),
    example: <PasswordInput invalid />,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<PasswordInput invalid />`}
      />
    ),
  }];
  const props = [{
    name: "defaultVisibility",
    required: false,
    type: '"hidden" | "shown"',
    default: '"hidden"',
    notes: (
      <div>
        <div class="mb-3">
          Whether the password is displayed with asterisks (like this: ******)
          or in plain text (like this: foobar).
        </div>
        <div class="mb-2">Consider the factors at play here, including:</div>
        <OL>
          <li>
            Usability: Seeing * as you type instead of characters like "a" and
            "b" can hurt usability.
          </li>
          <li>
            Actual security: In public places, ***** can prevent malicious
            onlookers from stealing your password.
          </li>
          <li>
            Perceived security: Some users expect to see * as they type their
            password and might question how secure your website is if they see
            their password in plaintext by default instead.
          </li>
        </OL>
        <div class="mb-2 mt-4">
          Related reading:
        </div>
        <UL>
          <li>
            <Link href="https://www.nngroup.com/articles/stop-password-masking">
              Stop Password Masking
            </Link>
          </li>
          <li>
            <Link href="https://www.lukew.com/ff/entry.asp?1653">
              Mobile Design Details: Hide/Show Passwords
            </Link>
          </li>
          <li>
            <Link href="https://ux.stackexchange.com/q/144503/39046">
              Is password-unmasking worth the potential security downside?
            </Link>
          </li>
        </UL>
      </div>
    ),
  }, {
    name: "containerProps",
    required: false,
    type: 'Omit<ComponentProps<"div">, "size">',
    default: null,
    notes: (
      <div>
        <div>
          The structure of <InlineCode>PasswordInput</InlineCode>{" "}
          is something like this:
        </div>
        <CodeBlock
          language="tsx"
          code={`<Flex>
  <Input />
  <button></button>
</Flex>`}
        />
        <div class="mb-3 mt-4">
          <InlineCode>containerProps</InlineCode> will get passed to{" "}
          <InlineCode>Flex</InlineCode> like this:
        </div>
        <CodeBlock language="tsx" code={`<Flex {...containerProps}>`} />
      </div>
    ),
  }, {
    name: "...rest",
    required: false,
    type: `{
  size?: "sm" | "md" | "lg";
  rounded?: "square" | "sm" | "lg" | "full";
  invalid?: boolean;
} & Omit<ComponentProps<"input">, "size">`,
    default: null,
    notes: (
      <div>
        <div>
          The structure of <InlineCode>PasswordInput</InlineCode>{" "}
          is something like this:
        </div>
        <CodeBlock
          language="tsx"
          code={`<Flex>
  <Input />
  <button></button>
</Flex>`}
        />
        <div class="mb-3 mt-4">
          <InlineCode>...rest</InlineCode> will get passed to{" "}
          <InlineCode>{"<Input />"}</InlineCode> like this:
        </div>
        <CodeBlock language="tsx" code={`<Input {...rest} />`} />
      </div>
    ),
  }];

  return (
    <ComponentDocsPage
      sectionTitles={sections.map((s) => s.title)}
    >
      <Header
        componentName="PasswordInput"
        sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/islands/molecules/password-input.tsx"
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
      <PropsTable props={props} />
    </ComponentDocsPage>
  );
};
