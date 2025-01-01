import { Button } from "@/components/atoms/button.tsx";
import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import {
  ComponentDocsPage,
  ExampleType,
} from "@/components/docs-site/component-docs-page/index.tsx";
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
  const overviewNotes = null;
  const examples: ExampleType[] = [{
    title: "Basic",
    demo: <Card>A summary of your account.</Card>,
    code: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Card>A summary of your account.</Card>`}
      />
    ),
  }, {
    title: "CardBody",
    demo: (
      <Card>
        <CardBody>A summary of your account.</CardBody>
      </Card>
    ),
    code: (
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
    demo: (
      <Card>
        <CardHeader>Summary</CardHeader>
        <CardBody>A summary of your account.</CardBody>
      </Card>
    ),
    code: (
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
    demo: (
      <Card>
        <CardBody>A summary of your account.</CardBody>
        <CardFooter>
          <Button>Close</Button>
        </CardFooter>
      </Card>
    ),
    code: (
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
    demo: (
      <Card>
        <CardHeader>Summary</CardHeader>
        <CardBody>A summary of your account.</CardBody>
        <CardFooter>
          <Button>Close</Button>
        </CardFooter>
      </Card>
    ),
    code: (
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
    demo: (
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
    code: (
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
    demo: (
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
    code: (
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
    demo: (
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
    code: (
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
    demo: (
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
    code: (
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
    demo: (
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
    code: (
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
    demo: (
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
    code: (
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
    demo: (
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
    code: (
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
    demo: (
      <Link href="https://example.com">
        <Card class="pointer-events-none">
          <CardBody>
            Click to visit example.com
          </CardBody>
        </Card>
      </Link>
    ),
    code: (
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
  const propsTables = [{
    title: null,
    props: [{
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
    }],
  }, {
    title: "CardHeader",
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
    title: "CardBody",
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
    title: "CardFooter",
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
      componentName="Card"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/molecules/card.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
