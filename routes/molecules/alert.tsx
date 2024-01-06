import { CodeBlock } from "@/islands/atoms/code-block.tsx";
import { H1 } from "@/islands/atoms/h1.tsx";
import { H2 } from "@/islands/atoms/h2.tsx";
import { InlineCode } from "@/islands/atoms/inline-code.tsx";
import { Link } from "@/islands/atoms/link.tsx";
import { Text } from "@/islands/atoms/text.tsx";
import { OnThisPage } from "@/islands/demo/component-docs-page.tsx";
import { Flex } from "@/islands/helpers/flex.tsx";
import { Stack } from "@/islands/helpers/stack.tsx";
import { Alert, AlertBody, AlertHeader } from "@/islands/molecules/alert.tsx";
import { Card } from "@/islands/molecules/card.tsx";
import { LeftNav } from "@/routes/index.tsx";

// See "Islands in docs" in the README for why this file is so WET.

export default () => {
  const notes = (
    <div>
      Don't overdo it. If you "cry wolf", users will become{" "}
      <Link href="https://ux.stackexchange.com/q/44609/39046">
        numb to alerts
      </Link>.
    </div>
  );
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
          <Link href="https://github.com/adamzerner/rfui/blob/master/components/molecules/alert.tsx">
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

  const componentName = "Alert";
  const sourceCodeUrl =
    "https://github.com/adamzerner/rfui/blob/master/islands/molecules/alert.tsx";
  const basicExample = sections[0].example;

  return (
    <Flex class="mt-9 gap-11 max-w-full">
      <Stack class="gap-8 hidden lg:flex">
        <OnThisPage sectionTitles={sections.map((s) => s.title)} />
        <LeftNav />
      </Stack>
      <main class="flex-1 max-w-full">
        <nav class="mb-10">
          <H1 class="!mt-0">{componentName}</H1>
          <Stack class="gap-5">
            <Text>
              {notes && (
                <div class="text-base leading-relaxed text-neutral-700">
                  {notes}
                </div>
              )}
              <Link
                href={sourceCodeUrl}
                _includeNewTabIcon
                _newTab
                class="inline w-fit"
              >
                Source code
              </Link>
            </Text>
            <Card width="full" padding="lg">
              {basicExample()}
            </Card>
            <CodeBlock
              language="ts"
              code={`import { ${componentName} } from "rfui";`}
            />
          </Stack>
        </nav>
        <>
          {sections.map((section) => (
            <section>
              <H2
                inPageLink={section.title.toLowerCase().split(/\s+/).join("-")}
              >
                {section.title}
              </H2>
              {section.description &&
                (
                  <Text size="sm" class="mb-6">
                    {section.description}
                  </Text>
                )}
              <Card width="full" class="mb-4">{section.example()}</Card>
              {section.exampleCode()}
            </section>
          ))}
        </>
        <section class="mt-10">
          <H1 id="props">
            <Link href="#props" underline="hover">Props</Link>
          </H1>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-y-5 sm:gap-y-10 justify-items-start place-items-start">
            {props.map((prop) => (
              <>
                <div class="first-of-type:mt-0 mt-8 sm:mt-0">
                  <InlineCode class="text-2xl">
                    {prop.name}
                  </InlineCode>
                  {prop.required &&
                    <sup class="text-supporting-red-500 text-2xl ml-1">*</sup>}
                </div>
                <Stack class="gap-5 col-span-2 text-sm">
                  <div class="self-start">
                    <div class="mb-3">Required</div>
                    <CodeBlock language="ts" code={prop.required.toString()} />
                  </div>
                  <div class="self-start">
                    <div class="mb-3">Type</div>
                    <CodeBlock language="ts" code={prop.type} />
                  </div>
                  <div class="self-start">
                    <div class="mb-3">Default</div>
                    {prop.default
                      ? (
                        <CodeBlock
                          language="ts"
                          code={prop.default}
                        />
                      )
                      : <div class="text-xs">none</div>}
                  </div>
                  {prop.notes &&
                    (
                      <div>
                        <div class="mb-3">Notes</div>
                        <div>{prop.notes}</div>
                      </div>
                    )}
                </Stack>
              </>
            ))}
          </div>
        </section>
      </main>
    </Flex>
  );
};
