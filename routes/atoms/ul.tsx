import { CodeBlock } from "@/islands/atoms/code-block.tsx";
import { H2 } from "@/islands/atoms/h2.tsx";
import { InlineCode } from "@/islands/atoms/inline-code.tsx";
import { Link } from "@/islands/atoms/link.tsx";
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
import { Flex } from "@/islands/helpers/flex.tsx";
import { Stack } from "@/islands/helpers/stack.tsx";
import { Card } from "@/islands/molecules/card.tsx";

export default () => {
  const notes = null;
  const sections: SectionType[] = [{
    title: "Basic",
    example: (
      <UL>
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
      </UL>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<UL>
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</UL>`}
      />
    ),
  }, {
    title: "Bullet type",
    description: (
      <div>
        Set <InlineCode>bulletType</InlineCode> to either{" "}
        <InlineCode>"bullet"</InlineCode>, <InlineCode>"check"</InlineCode>,
        {" "}
        <InlineCode>"arrow"</InlineCode>, <InlineCode>"triangle"</InlineCode> or
        {" "}
        <InlineCode>"none"</InlineCode>. Defaults to{" "}
        <InlineCode>"bullet"</InlineCode>.
      </div>
    ),
    example: (
      <Stack class="gap-5">
        <UL bulletType="bullet">
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </UL>
        <UL bulletType="check">
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </UL>
        <UL bulletType="arrow">
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </UL>
        <UL bulletType="triangle">
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </UL>
        <UL bulletType="none">
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </UL>
      </Stack>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="gap-5">
  <UL bulletType="bullet">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </UL>
  <UL bulletType="check">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </UL>
  <UL bulletType="arrow">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </UL>
  <UL bulletType="triangle">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </UL>
  <UL bulletType="none">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </UL>
</Stack>`}
      />
    ),
  }, {
    title: "Outside",
    example: (
      <Stack class="gap-5">
        <UL bulletLocation="outside" bulletType="bullet">
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </UL>
        <UL bulletLocation="outside" bulletType="check">
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </UL>
        <UL bulletLocation="outside" bulletType="arrow">
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </UL>
        <UL bulletLocation="outside" bulletType="triangle">
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </UL>
      </Stack>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="gap-5">
  <UL bulletLocation="outside" bulletType="bullet">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </UL>
  <UL bulletLocation="outside" bulletType="check">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </UL>
  <UL bulletLocation="outside" bulletType="arrow">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </UL>
  <UL bulletLocation="outside" bulletType="triangle">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </UL>
</Stack>`}
      />
    ),
  }, {
    title: "Bigger",
    example: (
      <Stack class="gap-5">
        <UL bulletType="bullet" class="text-xl">
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </UL>
        <UL bulletType="check" class="text-xl">
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </UL>
        <UL bulletType="arrow" class="text-xl">
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </UL>
        <UL bulletType="triangle" class="text-xl">
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </UL>
      </Stack>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="gap-5">
  <UL bulletType="bullet" class="text-xl">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </UL>
  <UL bulletType="check" class="text-xl">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </UL>
  <UL bulletType="arrow" class="text-xl">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </UL>
  <UL bulletType="triangle" class="text-xl">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </UL>
</Stack>`}
      />
    ),
  }, {
    title: "Color",
    example: (
      <Stack class="gap-5">
        <UL bulletType="bullet" class="text-neutral-500">
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </UL>
        <UL bulletType="check" class="text-neutral-500">
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </UL>
        <UL bulletType="arrow" class="text-neutral-500">
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </UL>
        <UL bulletType="triangle" class="text-neutral-500">
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </UL>
      </Stack>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="gap-5">
  <UL bulletType="bullet" class="text-neutral-500">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </UL>
  <UL bulletType="check" class="text-neutral-500">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </UL>
  <UL bulletType="arrow" class="text-neutral-500">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </UL>
  <UL bulletType="triangle" class="text-neutral-500">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </UL>
</Stack>`}
      />
    ),
  }, {
    title: "Custom",
    description:
      "You'll have to do a little more work yourself for custom bullet types.",
    example: (
      <UL bulletType="none">
        <li>
          <Flex class="gap-2">
            <span>😎</span>
            One
          </Flex>
        </li>
        <li>
          <Flex class="gap-2">
            <span>😎</span>
            Two
          </Flex>
        </li>
        <li>
          <Flex class="gap-2">
            <span>😎</span>
            Three
          </Flex>
        </li>
      </UL>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<UL bulletType="none">
  <li>
    <Flex class="gap-2">
      <span>😎</span>
      One
    </Flex>
  </li>
  <li>
    <Flex class="gap-2">
      <span>😎</span>
      Two
    </Flex>
  </li>
  <li>
    <Flex class="gap-2">
      <span>😎</span>
      Three
    </Flex>
  </li>
</UL>`}
      />
    ),
  }];
  const props = [{
    name: "bulletLocation",
    required: false,
    type: "'inside' | 'outside'",
    default: "'inside'",
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
    type: "JSX.HTMLAttributes<HTMLUListElement>",
    default: null,
    notes: (
      <div>
        <div class="leading-relaxed">
          See the docs for{" "}
          <Link href="/rest-parameters">rest parameters</Link>. For{" "}
          <InlineCode>UL</InlineCode>, you could pass anything you normally
          would pass to <InlineCode>{"<ul>"}</InlineCode>{" "}
          because the return value{" "}
          <Link href="https://github.com/adamzerner/rfui/blob/master/components/atoms/ul.tsx">
            looks something like
          </Link>{" "}
          this:
        </div>
        <CodeBlock
          language="tsx"
          code={`<ul
  class={className}
  {...restWithoutClass}
>
  {children}
</ul>`}
        />
      </div>
    ),
  }];

  return (
    <ComponentDocsPage
      sectionTitles={sections.map((s) => s.title)}
    >
      <Header
        componentName="UL"
        sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/atoms/ul.tsx"
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
