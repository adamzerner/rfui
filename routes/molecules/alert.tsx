import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { ComponentDocsPage } from "@/islands/demo/component-docs-page.tsx";
import { Alert, AlertBody, AlertHeader } from "@/islands/molecules/alert.tsx";

export default () => {
  const sections = [{
    title: "Basic",
    example: () => <Alert>Your profile has been saved</Alert>,
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Alert>Your profile has been saved</Alert>,`}
      />
    ),
  }, {
    title: "AlertHeader and AlertBody",
    example: () => (
      <Alert>
        <AlertHeader>Success</AlertHeader>
        <AlertBody>Your profile has been saved.</AlertBody>
      </Alert>
    ),
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Alert>
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
    example: () => (
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
    exampleCode: () => (
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
    example: () => (
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
    exampleCode: () => (
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
  }];

  return (
    <ComponentDocsPage
      componentName="Alert"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/atoms/alert.tsx"
      sections={sections}
      props={props}
    />
  );
};
