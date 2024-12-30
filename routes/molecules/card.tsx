import { Button } from "@/components/atoms/button.tsx";
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
import { PropsTable } from "@/components/docs-site/component-docs-page/props-table.tsx";
import { SectionType } from "@/components/docs-site/component-docs-page/section-type.ts";
import { Flex } from "@/components/helpers/flex.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@/components/molecules/card.tsx";
import { FormField } from "@/components/molecules/form-field.tsx";

export default () => {
  const notes = null;
  const sections: SectionType[] = [{
    title: "Basic",
    example: <Card>A summary of your account.</Card>,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Card>A summary of your account.</Card>`}
      />
    ),
  }, {
    title: "CardBody",
    example: (
      <Card>
        <CardBody>A summary of your account.</CardBody>
      </Card>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Card>
  <CardBody>A summary of your account.</CardBody>
</Card>`}
      />
    ),
  }, {
    title: "CardHeader and CardBody",
    example: (
      <Card>
        <CardHeader>Summary</CardHeader>
        <CardBody>A summary of your account.</CardBody>
      </Card>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Card>
  <CardHeader>Summary</CardHeader>
  <CardBody>A summary of your account.</CardBody>
</Card>`}
      />
    ),
  }, {
    title: "CardBody and CardFooter",
    example: (
      <Card>
        <CardBody>A summary of your account.</CardBody>
        <CardFooter>
          <Button>Close</Button>
        </CardFooter>
      </Card>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Card>
  <CardBody>A summary of your account.</CardBody>
  <CardFooter>
    <Button>Close</Button>
  </CardFooter>
</Card>`}
      />
    ),
  }, {
    title: "CardHeader, CardBody and CardFooter",
    example: (
      <Card>
        <CardHeader>Summary</CardHeader>
        <CardBody>A summary of your account.</CardBody>
        <CardFooter>
          <Button>Close</Button>
        </CardFooter>
      </Card>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Card>
  <CardHeader>Summary</CardHeader>
  <CardBody>A summary of your account.</CardBody>
  <CardFooter>
    <Button>Close</Button>
  </CardFooter>
</Card>`}
      />
    ),
  }, {
    title: "Rounded",
    description: (
      <div>
        Set <InlineCode>rounded</InlineCode> to{" "}
        <InlineCode>"square"</InlineCode>, <InlineCode>"sm"</InlineCode>, or
        {" "}
        <InlineCode>"lg"</InlineCode>. Defaults to the value of the CSS variable
        {" "}
        <InlineCode>--default-roundedness</InlineCode>. See{" "}
        <Link href="/default-roundedness">
          "Default roundedness"
        </Link>.
      </div>
    ),
    example: (
      <Stack class="gap-5">
        <Card rounded="square">
          <CardHeader>Summary</CardHeader>
          <CardBody>A summary of your account.</CardBody>
          <CardFooter>
            <Button>Close</Button>
          </CardFooter>
        </Card>
        <Card rounded="sm">
          <CardHeader>Summary</CardHeader>
          <CardBody>A summary of your account.</CardBody>
          <CardFooter>
            <Button>Close</Button>
          </CardFooter>
        </Card>
        <Card rounded="lg">
          <CardHeader>Summary</CardHeader>
          <CardBody>A summary of your account.</CardBody>
          <CardFooter>
            <Button>Close</Button>
          </CardFooter>
        </Card>
      </Stack>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="gap-5">
  <Card rounded="square">
    <CardHeader>Summary</CardHeader>
    <CardBody>A summary of your account.</CardBody>
    <CardFooter>
      <Button>Close</Button>
    </CardFooter>
  </Card>
  <Card rounded="sm">
    <CardHeader>Summary</CardHeader>
    <CardBody>A summary of your account.</CardBody>
    <CardFooter>
      <Button>Close</Button>
    </CardFooter>
  </Card>
  <Card rounded="lg">
    <CardHeader>Summary</CardHeader>
    <CardBody>A summary of your account.</CardBody>
    <CardFooter>
      <Button>Close</Button>
    </CardFooter>
  </Card>
</Stack>`}
      />
    ),
  }, {
    title: "Width",
    description: (
      <div>
        Set <InlineCode>width</InlineCode> to <InlineCode>"sm"</InlineCode>,
        {" "}
        <InlineCode>"md"</InlineCode>, <InlineCode>"lg"</InlineCode>, or{" "}
        <InlineCode>"full"</InlineCode>. Defaults to{" "}
        <InlineCode>"md"</InlineCode>.
      </div>
    ),
    example: (
      <Stack class="gap-5">
        <Card width="sm">
          <CardHeader>Summary</CardHeader>
          <CardBody>A summary of your account.</CardBody>
          <CardFooter>
            <Button>Close</Button>
          </CardFooter>
        </Card>
        <Card width="md">
          <CardHeader>Summary</CardHeader>
          <CardBody>A summary of your account.</CardBody>
          <CardFooter>
            <Button>Close</Button>
          </CardFooter>
        </Card>
        <Card width="lg">
          <CardHeader>Summary</CardHeader>
          <CardBody>A summary of your account.</CardBody>
          <CardFooter>
            <Button>Close</Button>
          </CardFooter>
        </Card>
        <Card width="full">
          <CardHeader>Summary</CardHeader>
          <CardBody>A summary of your account.</CardBody>
          <CardFooter>
            <Button>Close</Button>
          </CardFooter>
        </Card>
      </Stack>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="gap-5">
  <Card width="sm">
    <CardHeader>Summary</CardHeader>
    <CardBody>A summary of your account.</CardBody>
    <CardFooter>
      <Button>Close</Button>
    </CardFooter>
  </Card>
  <Card width="md">
    <CardHeader>Summary</CardHeader>
    <CardBody>A summary of your account.</CardBody>
    <CardFooter>
      <Button>Close</Button>
    </CardFooter>
  </Card>
  <Card width="lg">
    <CardHeader>Summary</CardHeader>
    <CardBody>A summary of your account.</CardBody>
    <CardFooter>
      <Button>Close</Button>
    </CardFooter>
  </Card>
  <Card width="full">
    <CardHeader>Summary</CardHeader>
    <CardBody>A summary of your account.</CardBody>
    <CardFooter>
      <Button>Close</Button>
    </CardFooter>
  </Card>
</Stack>`}
      />
    ),
  }, {
    title: "Shadow",
    description: (
      <div>
        Set <InlineCode>shadow</InlineCode> to <InlineCode>"sm"</InlineCode>,
        {" "}
        <InlineCode>"md"</InlineCode>, or{" "}
        <InlineCode>"lg"</InlineCode>. Defaults to{" "}
        <InlineCode>"sm"</InlineCode>.
      </div>
    ),
    example: (
      <Stack class="gap-5">
        <Card shadow="sm">
          <CardHeader>Summary</CardHeader>
          <CardBody>A summary of your account.</CardBody>
          <CardFooter>
            <Button>Close</Button>
          </CardFooter>
        </Card>
        <Card shadow="md">
          <CardHeader>Summary</CardHeader>
          <CardBody>A summary of your account.</CardBody>
          <CardFooter>
            <Button>Close</Button>
          </CardFooter>
        </Card>
        <Card shadow="lg">
          <CardHeader>Summary</CardHeader>
          <CardBody>A summary of your account.</CardBody>
          <CardFooter>
            <Button>Close</Button>
          </CardFooter>
        </Card>
      </Stack>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="gap-5">
  <Card shadow="sm">
    <CardHeader>Summary</CardHeader>
    <CardBody>A summary of your account.</CardBody>
    <CardFooter>
      <Button>Close</Button>
    </CardFooter>
  </Card>
  <Card shadow="md">
    <CardHeader>Summary</CardHeader>
    <CardBody>A summary of your account.</CardBody>
    <CardFooter>
      <Button>Close</Button>
    </CardFooter>
  </Card>
  <Card shadow="lg">
    <CardHeader>Summary</CardHeader>
    <CardBody>A summary of your account.</CardBody>
    <CardFooter>
      <Button>Close</Button>
    </CardFooter>
  </Card>
</Stack>`}
      />
    ),
  }, {
    title: "Padding",
    description: (
      <div>
        Set <InlineCode>padding</InlineCode> to <InlineCode>"sm"</InlineCode>,
        {" "}
        <InlineCode>"md"</InlineCode>, or{" "}
        <InlineCode>"lg"</InlineCode>. Defaults to{" "}
        <InlineCode>"md"</InlineCode>.
      </div>
    ),
    example: (
      <Stack class="gap-5">
        <Card padding="sm">
          <CardHeader>Summary</CardHeader>
          <CardBody>A summary of your account.</CardBody>
          <CardFooter>
            <Button>Close</Button>
          </CardFooter>
        </Card>
        <Card padding="md">
          <CardHeader>Summary</CardHeader>
          <CardBody>A summary of your account.</CardBody>
          <CardFooter>
            <Button>Close</Button>
          </CardFooter>
        </Card>
        <Card padding="lg">
          <CardHeader>Summary</CardHeader>
          <CardBody>A summary of your account.</CardBody>
          <CardFooter>
            <Button>Close</Button>
          </CardFooter>
        </Card>
      </Stack>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="gap-5">
  <Card padding="sm">
    <CardHeader>Summary</CardHeader>
    <CardBody>A summary of your account.</CardBody>
    <CardFooter>
      <Button>Close</Button>
    </CardFooter>
  </Card>
  <Card padding="md">
    <CardHeader>Summary</CardHeader>
    <CardBody>A summary of your account.</CardBody>
    <CardFooter>
      <Button>Close</Button>
    </CardFooter>
  </Card>
  <Card padding="lg">
    <CardHeader>Summary</CardHeader>
    <CardBody>A summary of your account.</CardBody>
    <CardFooter>
      <Button>Close</Button>
    </CardFooter>
  </Card>
</Stack>`}
      />
    ),
  }, {
    title: "Realistic",
    example: (
      <Card>
        <CardHeader>
          <h1 class="font-bold tracking-wide text-neutral-700">Profile</h1>
        </CardHeader>
        <CardBody>
          <div class="mb-6 text-neutral-700">
            Please fill out the following information.
          </div>
          <Stack class="gap-3">
            <FormField label="Name" type="text" />
            <FormField label="Email" type="email" />
            <FormField label="Age" type="number" />
          </Stack>
        </CardBody>
        <CardFooter>
          <Flex class="gap-2">
            <Button variant="primary">Submit</Button>
            <Button>Cancel</Button>
          </Flex>
        </CardFooter>
      </Card>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Card>
  <CardHeader>
    <h1 class="font-bold tracking-wide text-neutral-700">Profile</h1>
  </CardHeader>
  <CardBody>
    <div class="mb-6 text-neutral-700">
      Please fill out the following information.
    </div>
    <Stack class="gap-3">
      <FormField label="Name" type="text" />
      <FormField label="Email" type="email" />
      <FormField label="Age" type="number" />
    </Stack>
  </CardBody>
  <CardFooter>
    <Flex class="gap-2">
      <Button variant="primary">Submit</Button>
      <Button>Cancel</Button>
    </Flex>
  </CardFooter>
</Card>`}
      />
    ),
  }, {
    title: "Top accent",
    description: (
      <div>
        Set <InlineCode>topAccent</InlineCode> to{" "}
        <InlineCode>true</InlineCode>. You'll also probably want to set{" "}
        <InlineCode>rounded</InlineCode> to <InlineCode>"square"</InlineCode>.
      </div>
    ),
    example: (
      <Card topAccent rounded="square">
        <CardHeader>
          <h1 class="font-bold tracking-wide text-neutral-700">Profile</h1>
        </CardHeader>
        <CardBody>
          <div class="mb-6 text-neutral-700">
            Please fill out the following information.
          </div>
          <Stack class="gap-3">
            <FormField label="Name" type="text" />
            <FormField label="Email" type="email" />
            <FormField label="Age" type="number" />
          </Stack>
        </CardBody>
        <CardFooter>
          <Flex class="gap-2">
            <Button variant="primary">Submit</Button>
            <Button>Cancel</Button>
          </Flex>
        </CardFooter>
      </Card>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Card topAccent rounded="square">
  <CardHeader>
    <h1 class="font-bold tracking-wide text-neutral-700">Profile</h1>
  </CardHeader>
  <CardBody>
    <div class="mb-6 text-neutral-700">
      Please fill out the following information.
    </div>
    <Stack class="gap-3">
      <FormField label="Name" type="text" />
      <FormField label="Email" type="email" />
      <FormField label="Age" type="number" />
    </Stack>
  </CardBody>
  <CardFooter>
    <Flex class="gap-2">
      <Button variant="primary">Submit</Button>
      <Button>Cancel</Button>
    </Flex>
  </CardFooter>
</Card>`}
      />
    ),
  }, {
    title: "Left accent",
    description: (
      <div>
        Set <InlineCode>leftAccent</InlineCode> to{" "}
        <InlineCode>true</InlineCode>. You'll also probably want to set{" "}
        <InlineCode>rounded</InlineCode> to <InlineCode>"square"</InlineCode>.
      </div>
    ),
    example: (
      <Card leftAccent rounded="square">
        <CardHeader>
          <h1 class="font-bold tracking-wide text-neutral-700">Profile</h1>
        </CardHeader>
        <CardBody>
          <div class="mb-6 text-neutral-700">
            Please fill out the following information.
          </div>
          <Stack class="gap-3">
            <FormField label="Name" type="text" />
            <FormField label="Email" type="email" />
            <FormField label="Age" type="number" />
          </Stack>
        </CardBody>
        <CardFooter>
          <Flex class="gap-2">
            <Button variant="primary">Submit</Button>
            <Button>Cancel</Button>
          </Flex>
        </CardFooter>
      </Card>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Card leftAccent rounded="square">
  <CardHeader>
    <h1 class="font-bold tracking-wide text-neutral-700">Profile</h1>
  </CardHeader>
  <CardBody>
    <div class="mb-6 text-neutral-700">
      Please fill out the following information.
    </div>
    <Stack class="gap-3">
      <FormField label="Name" type="text" />
      <FormField label="Email" type="email" />
      <FormField label="Age" type="number" />
    </Stack>
  </CardBody>
  <CardFooter>
    <Flex class="gap-2">
      <Button variant="primary">Submit</Button>
      <Button>Cancel</Button>
    </Flex>
  </CardFooter>
</Card>`}
      />
    ),
  }, {
    title: "As link",
    description: (
      <div>
        To make the <InlineCode>Card</InlineCode> act as a link, wrap it in{" "}
        <Link href="/atoms/link">
          <InlineCode>Link</InlineCode>
        </Link>. You'll probably also want to add{" "}
        <InlineCode>pointer-events: none;</InlineCode> to{" "}
        <InlineCode>Card</InlineCode>.
      </div>
    ),
    example: (
      <Link href="https://example.com">
        <Card class="pointer-events-none">
          <CardBody>
            Click to visit example.com
          </CardBody>
        </Card>
      </Link>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Link href="https://example.com">
  <Card class="pointer-events-none">
    <CardBody>
      Click to visit example.com
    </CardBody>
  </Card>
</Link>`}
      />
    ),
  }];
  const props = [{
    name: "rounded",
    required: false,
    type: '"square" | "sm" | "lg"',
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
    name: "width",
    required: false,
    type: '"sm" | "md" | "lg" | "full"',
    default: '"md"',
    notes: null,
  }, {
    name: "shadow",
    required: false,
    type: '"sm" | "md" | "lg"',
    default: '"sm"',
    notes: null,
  }, {
    name: "topAccent",
    required: false,
    type: "boolean",
    default: "false",
    notes: null,
  }, {
    name: "leftAccent",
    required: false,
    type: "boolean",
    default: "false",
    notes: null,
  }, {
    name: "padding",
    required: false,
    type: '"sm" | "md" | "lg"',
    default: '"md"',
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
          <InlineCode>Card</InlineCode>, you could pass anything you normally
          would pass to <InlineCode>{"<div>"}</InlineCode>{" "}
          because the return value{" "}
          <Link href="https://github.com/adamzerner/rfui/blob/master/islands/molecules/card.tsx">
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
  const cardHeaderProps = [{
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
  }];
  const cardBodyProps = [{
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
  }];
  const cardFooterProps = [{
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
  }];

  return (
    <ComponentDocsPage
      examplesSectionTitles={sections.map((s) => s.title)}
    >
      <Header
        componentName="Card"
        sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/molecules/card.tsx"
        importStatement='import { Card, CardHeader, CardBody, CardFooter } from "rfui";'
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
      <PropsTable subComponentTitle="CardHeader" props={cardHeaderProps} />
      <PropsTable subComponentTitle="CardBody" props={cardBodyProps} />
      <PropsTable subComponentTitle="CardFooter" props={cardFooterProps} />
    </ComponentDocsPage>
  );
};
