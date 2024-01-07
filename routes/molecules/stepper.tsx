import { CodeBlock } from "@/islands/atoms/code-block.tsx";
import { H1 } from "@/islands/atoms/h1.tsx";
import { H2 } from "@/islands/atoms/h2.tsx";
import { InlineCode } from "@/islands/atoms/inline-code.tsx";
import { Link } from "@/islands/atoms/link.tsx";
import { Text } from "@/islands/atoms/text.tsx";
import { OnThisPage } from "@/islands/demo/component-docs-page/on-this-page.tsx";
import { Flex } from "@/islands/helpers/flex.tsx";
import { Stack } from "@/islands/helpers/stack.tsx";
import { Card } from "@/islands/molecules/card.tsx";
import { Stepper } from "@/islands/molecules/stepper.tsx";
import { LeftNav } from "@/routes/index.tsx";

// See "Islands in docs" in the README for why this file is so WET.

export default () => {
  const notes =
    "A stepper component like this lets users select the number they want in a few easy clicks.";
  const sections = [{
    title: "Basic",
    example: () => <Stepper />,
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stepper />`}
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
        <Stepper size="sm" />
        <Stepper size="md" />
        <Stepper size="lg" />
      </Stack>
    ),
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="gap-5">
  <Stepper size="sm" />
  <Stepper size="md" />
  <Stepper size="lg" />
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
    example: () => (
      <Stack class="gap-5">
        <Stepper rounded="square" />
        <Stepper rounded="sm" />
        <Stepper rounded="lg" />
        <Stepper rounded="full" />
      </Stack>
    ),
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="gap-5">
  <Stepper rounded="square" />
  <Stepper rounded="sm" />
  <Stepper rounded="lg" />
  <Stepper rounded="full" />
</Stack>`}
      />
    ),
  }, {
    title: "Starting value",
    example: () => <Stepper startingValue={100} />,
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stepper startingValue={100} />`}
      />
    ),
  }, {
    title: "Min and max",
    description: "In this example the min is 0 and the max is 5.",
    example: () => <Stepper min={0} max={5} />,
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stepper min={0} max={5} />`}
      />
    ),
  }];
  const props = [{
    name: "name",
    required: false,
    type: "string",
    default: null,
    notes: (
      <div>
        To be used for{" "}
        <InlineCode>
          {`<input type="hidden" name={name} value={value} />`}
        </InlineCode>.
      </div>
    ),
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
    name: "startingValue",
    required: false,
    type: "number",
    default: "0",
    notes: null,
  }, {
    name: "min",
    required: false,
    type: "number",
    default: null,
    notes: null,
  }, {
    name: "max",
    required: false,
    type: "number",
    default: null,
    notes: null,
  }, {
    name: "...rest",
    required: false,
    type: 'Omit<JSX.HTMLAttributes<HTMLDivElement>, "size" | "min" | "max">',
    default: null,
    notes: (
      <div>
        <div class="leading-relaxed">
          See the docs for{" "}
          <Link href="/rest-parameters">rest parameters</Link>. For{" "}
          <InlineCode>Stepper</InlineCode>, you could pass anything you normally
          would pass to <InlineCode>{"<div>"}</InlineCode>{" "}
          because the return value{" "}
          <Link href="https://github.com/adamzerner/rfui/blob/master/components/molecules/stepper.tsx">
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

  const componentName = "Stepper";
  const sourceCodeUrl =
    "https://github.com/adamzerner/rfui/blob/master/islands/molecules/stepper.tsx";
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
            <Card width="full" class="mb-4">{section.example()}</Card>
            {section.exampleCode()}
          </section>
        ))}
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
