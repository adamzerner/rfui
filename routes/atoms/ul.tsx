import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { UL } from "@/components/atoms/ul.tsx";
import { Flex } from "@/components/helpers/flex.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { ComponentDocsPage } from "@/islands/demo/component-docs-page.tsx";

export default () => {
  const sections = [{
    title: "Basic",
    example: () => (
      <UL>
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
      </UL>
    ),
    exampleCode: () => (
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
    example: () => (
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
    exampleCode: () => (
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
    example: () => (
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
    exampleCode: () => (
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
    example: () => (
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
    exampleCode: () => (
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
    example: () => (
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
    exampleCode: () => (
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
    example: () => (
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
    exampleCode: () => (
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
      componentName="UL"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/atoms/ul.tsx"
      sections={sections}
      props={props}
    />
  );
};
