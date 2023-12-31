import { CodeBlock } from "@/islands/atoms/code-block.tsx";
import { H2 } from "@/islands/atoms/h2.tsx";
import { InlineCode } from "@/islands/atoms/inline-code.tsx";
import { Link } from "@/islands/atoms/link.tsx";
import { OL } from "@/islands/atoms/ol.tsx";
import { Text } from "@/islands/atoms/text.tsx";
import { UL } from "@/islands/atoms/ul.tsx";
import {
  Example,
  Header,
  Notes,
} from "@/islands/demo/component-docs-page/header.tsx";
import { ComponentDocsPage } from "@/islands/demo/component-docs-page/index.tsx";
import { Prop } from "@/islands/demo/component-docs-page/prop.tsx";
import { Props } from "@/islands/demo/component-docs-page/props.tsx";
import { SectionType } from "@/islands/demo/component-docs-page/section-type.ts";
import { Stack } from "@/islands/helpers/stack.tsx";
import { Card } from "@/islands/molecules/card.tsx";
import { PasswordInput } from "@/islands/molecules/password-input.tsx";

export default () => {
  const notes = (
    <div>
      The ability to see your password in plain text as you're typing{" "}
      <Link href="https://www.nngroup.com/articles/stop-password-masking">
        often
      </Link>{" "}
      <Link href="https://www.lukew.com/ff/entry.asp?1653">improves</Link>{" "}
      <Link href="https://ux.stackexchange.com/q/144503/39046">usability</Link>.
    </div>
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
    title: "Default visible",
    description: (
      <div>
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
        <div class="mt-4 mb-2">
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
        <InlineCode>"full"</InlineCode>. Defaults to{" "}
        <InlineCode>"sm"</InlineCode>.
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
        <div class="mt-4 mb-2">
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
    type: 'Omit<JSX.HTMLAttributes<HTMLDivElement>, "size">',
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
        <div class="mt-4 mb-3">
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
} & Omit<JSX.HTMLAttributes<HTMLInputElement>, "size">`,
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
        <div class="mt-4 mb-3">
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
      <Props>
        {props.map((prop) => (
          <Prop prop={prop}>
            {prop.notes}
          </Prop>
        ))}
      </Props>
    </ComponentDocsPage>
  );
};
