import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import {
  ComponentDocsPage,
  ExampleType,
} from "@/components/docs-site/component-docs-page/index.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { Alert, AlertBody, AlertHeader } from "@/islands/molecules/alert.tsx";

export default () => {
  const overviewNotes = (
    <div>
      Don't overdo it. If you "cry wolf", users will become{" "}
      <Link href="https://ux.stackexchange.com/q/44609/39046">
        numb to alerts
      </Link>.
    </div>
  );
  const examples: ExampleType[] = [{
    title: "Basic",
    demo: <Alert>Your profile has been saved</Alert>,
    code: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Alert>Your profile has been saved</Alert>,`}
      />
    ),
  }, {
    title: "AlertHeader and AlertBody",
    demo: (
      <Alert>
        <AlertHeader>Success</AlertHeader>
        <AlertBody>Your profile has been saved.</AlertBody>
      </Alert>
    ),
    code: (
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
    demo: (
      <Stack class="w-full gap-5">
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
    code: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="w-full gap-5">
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
    demo: (
      <Stack class="w-full gap-5">
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
    code: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="w-full gap-5">
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
  const propsTables = [{
    title: null,
    props: [{
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
      type: 'Omit<ComponentProps<"div">, "size">',
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
    }],
  }, {
    title: "AlertHeader",
    props: [{
      name: "children",
      required: true,
      type: "ComponentChild",
      default: null,
      notes: null,
    }, {
      name: "...rest",
      required: false,
      type: 'ComponentProps<"div">',
      default: null,
      notes: null,
    }],
  }, {
    title: "AlertBody",
    props: [{
      name: "children",
      required: true,
      type: "ComponentChild",
      default: null,
      notes: null,
    }, {
      name: "...rest",
      required: false,
      type: 'ComponentProps<"div">',
      default: null,
      notes: null,
    }],
  }];

  return (
    <ComponentDocsPage
      componentName="Alert"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/islands/molecules/alert.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
