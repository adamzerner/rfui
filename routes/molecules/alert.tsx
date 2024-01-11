import { CodeBlock } from "@/islands/atoms/code-block.tsx";
import { H2 } from "@/islands/atoms/h2.tsx";
import { InlineCode } from "@/islands/atoms/inline-code.tsx";
import { Link } from "@/islands/atoms/link.tsx";
import { Text } from "@/islands/atoms/text.tsx";
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
import { Alert, AlertBody, AlertHeader } from "@/islands/molecules/alert.tsx";
import { Card } from "@/islands/molecules/card.tsx";

export default () => {
  const notes = (
    <div>
      Don't overdo it. If you "cry wolf", users will become{" "}
      <Link href="https://ux.stackexchange.com/q/44609/39046">
        numb to alerts
      </Link>.
    </div>
  );
  const sections: SectionType[] = [{
    title: "Basic",
    example: <Alert>Your profile has been saved</Alert>,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Alert>Your profile has been saved</Alert>,`}
      />
    ),
  }, {
    title: "AlertHeader and AlertBody",
    example: (
      <Alert>
        <AlertHeader>Success</AlertHeader>
        <AlertBody>Your profile has been saved.</AlertBody>
      </Alert>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`import { Alert, AlertHeader, AlertBody } from "rfui";
        
<Alert>
  <AlertHeader>Success</AlertHeader>
  <AlertBody>Your profile has been saved.</AlertBody>
</Alert>`}
      />
    ),
  }, {
    title: "Variant",
    description: (
      <div>
        Set <InlineCode>variant</InlineCode> to{" "}
        <InlineCode>"success"</InlineCode>, <InlineCode>"info"</InlineCode>,
        {" "}
        <InlineCode>"warning"</InlineCode>,{" "}
        <InlineCode>"danger"</InlineCode>, or{" "}
        <InlineCode>"neutral"</InlineCode>.
      </div>
    ),
    example: (
      <Stack class="gap-5 w-full">
        <Alert variant="success">
          <AlertHeader>Success</AlertHeader>
          <AlertBody>Your profile has been saved.</AlertBody>
        </Alert>
        <Alert variant="info">
          <AlertHeader>Note</AlertHeader>
          <AlertBody>Your account has been updated.</AlertBody>
        </Alert>
        <Alert variant="warning">
          <AlertHeader>Warning</AlertHeader>
          <AlertBody>Your plan is set to expire.</AlertBody>
        </Alert>
        <Alert variant="danger">
          <AlertHeader>Danger</AlertHeader>
          <AlertBody>Your payment method is inactive.</AlertBody>
        </Alert>
        <Alert variant="neutral">
          <AlertHeader>Note</AlertHeader>
          <AlertBody>Your account has been updated.</AlertBody>
        </Alert>
      </Stack>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="gap-5 w-full">
  <Alert variant="success">
    <AlertHeader>Success</AlertHeader>
    <AlertBody>Your profile has been saved.</AlertBody>
  </Alert>
  <Alert variant="info">
    <AlertHeader>Note</AlertHeader>
    <AlertBody>Your account has been updated.</AlertBody>
  </Alert>
  <Alert variant="warning">
    <AlertHeader>Warning</AlertHeader>
    <AlertBody>Your plan is set to expire.</AlertBody>
  </Alert>
  <Alert variant="danger">
    <AlertHeader>Danger</AlertHeader>
    <AlertBody>Your payment method is inactive.</AlertBody>
  </Alert>
  <Alert variant="neutral">
    <AlertHeader>Note</AlertHeader>
    <AlertBody>Your account has been updated.</AlertBody>
  </Alert>
</Stack>`}
      />
    ),
  }, {
    title: "Not dismissable",
    description: (
      <div>
        Set <InlineCode>isDismissable</InlineCode> to{" "}
        <InlineCode>false</InlineCode>.
      </div>
    ),
    example: (
      <Stack class="gap-5 w-full">
        <Alert isDismissable={false} variant="success">
          <AlertHeader>Success</AlertHeader>
          <AlertBody>Your profile has been saved.</AlertBody>
        </Alert>
        <Alert isDismissable={false} variant="info">
          <AlertHeader>Note</AlertHeader>
          <AlertBody>Your account has been updated.</AlertBody>
        </Alert>
        <Alert isDismissable={false} variant="warning">
          <AlertHeader>Warning</AlertHeader>
          <AlertBody>Your plan is set to expire.</AlertBody>
        </Alert>
        <Alert isDismissable={false} variant="danger">
          <AlertHeader>Danger</AlertHeader>
          <AlertBody>Your payment method is inactive.</AlertBody>
        </Alert>
        <Alert isDismissable={false} variant="neutral">
          <AlertHeader>Note</AlertHeader>
          <AlertBody>Your account has been updated.</AlertBody>
        </Alert>
      </Stack>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="gap-5 w-full">
  <Alert isDismissable={false} variant="success">
    <AlertHeader>Success</AlertHeader>
    <AlertBody>Your profile has been saved.</AlertBody>
  </Alert>
  <Alert isDismissable={false} variant="info">
    <AlertHeader>Note</AlertHeader>
    <AlertBody>Your account has been updated.</AlertBody>
  </Alert>
  <Alert isDismissable={false} variant="warning">
    <AlertHeader>Warning</AlertHeader>
    <AlertBody>Your plan is set to expire.</AlertBody>
  </Alert>
  <Alert isDismissable={false} variant="danger">
    <AlertHeader>Danger</AlertHeader>
    <AlertBody>Your payment method is inactive.</AlertBody>
  </Alert>
  <Alert isDismissable={false} variant="neutral">
    <AlertHeader>Note</AlertHeader>
    <AlertBody>Your account has been updated.</AlertBody>
  </Alert>
</Stack>`}
      />
    ),
  }];
  const props = [{
    name: "variant",
    required: false,
    type: "'success' | 'info' | 'warning' | 'danger' | 'neutral'",
    default: '"neutral"',
    notes: null,
  }, {
    name: "isDismissable",
    required: false,
    type: "boolean",
    default: "true",
    notes: null,
  }, {
    name: "children",
    required: true,
    type: "ComponentChild",
    default: null,
    notes: null,
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
          <InlineCode>Alert</InlineCode>, you could pass anything you normally
          would pass to <InlineCode>{"<div>"}</InlineCode>{" "}
          because the return value{" "}
          <Link href="https://github.com/adamzerner/rfui/blob/master/islands/molecules/alert.tsx">
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
  }];

  return (
    <ComponentDocsPage
      sectionTitles={sections.map((s) => s.title)}
    >
      <Header
        componentName="Alert"
        sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/islands/molecules/alert.tsx"
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
