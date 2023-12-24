import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Flex } from "@/components/helpers/flex.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { ComponentDocsPage } from "@/islands/demo/component-docs-page.tsx";

export default () => {
  const sections = [{
    title: "Basic",
    example: () => <Link href="https://example.com">Example</Link>,
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Link href="https://example.com">Example</Link>`}
      />
    ),
  }, {
    title: "Underline",
    description: (
      <div>
        It is important to indicate that links are clickable. Underlining is a
        popular way of achieving this goal, but there are many others. The best
        approach will depend on the context. See{" "}
        <Link href="https://www.nngroup.com/articles/clickable-elements/">
          Beyond Blue Links: Making Clickable Elements Recognizable
        </Link>{" "}
        for more information.
      </div>
    ),
    example: () => (
      <Flex class="gap-3">
        <Link underline="always" href="https://example.com">always</Link>
        <Link underline="hover" href="https://example.com">hover</Link>
        <Link underline="none" href="https://example.com">none</Link>
      </Flex>
    ),
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Flex class="gap-3">
  <Link underline="always" href="https://example.com">always</Link>
  <Link underline="hover" href="https://example.com">hover</Link>
  <Link underline="none" href="https://example.com">none</Link>
</Flex>`}
      />
    ),
  }, {
    title: "New tab",
    description: (
      <div>
        It is important to indicate that links are clickable. Underlining is a
        popular way of achieving this goal, but there are many others. The best
        approach will depend on the context. See{" "}
        <Link href="https://www.nngroup.com/articles/clickable-elements/">
          Beyond Blue Links: Making Clickable Elements Recognizable
        </Link>{" "}
        for more information.
      </div>
    ),
    example: () => (
      <Stack class="gap-5">
        <Flex class="gap-3">
          <Link _newTab href="https://example.com" underline="always">
            _newTab
          </Link>
          <Link _newTab href="https://example.com" underline="hover">
            _newTab
          </Link>
          <Link _newTab href="https://example.com" underline="none">
            _newTab
          </Link>
        </Flex>
        <Flex class="gap-3">
          <Link
            _newTab
            _includeNewTabIcon
            href="https://example.com"
            underline="always"
          >
            _includeNewTabIcon
          </Link>
          <Link
            _newTab
            _includeNewTabIcon
            href="https://example.com"
            underline="hover"
          >
            _includeNewTabIcon
          </Link>
          <Link
            _newTab
            _includeNewTabIcon
            href="https://example.com"
            underline="none"
          >
            _includeNewTabIcon
          </Link>
        </Flex>
      </Stack>
    ),
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="gap-5">
  <Flex class="gap-3">
    <Link _newTab href="https://example.com" underline="always">
      _newTab
    </Link>
    <Link _newTab href="https://example.com" underline="hover">
      _newTab
    </Link>
    <Link _newTab href="https://example.com" underline="none">
      _newTab
    </Link>
  </Flex>
  <Flex class="gap-3">
    <Link
      _newTab
      _includeNewTabIcon
      href="https://example.com"
      underline="always"
    >
      _newTab _includeNewTabIcon
    </Link>
    <Link
      _newTab
      _includeNewTabIcon
      href="https://example.com"
      underline="hover"
    >
      _newTab _includeNewTabIcon
    </Link>
    <Link
      _newTab
      _includeNewTabIcon
      href="https://example.com"
      underline="none"
    >
      _newTab _includeNewTabIcon
    </Link>
  </Flex>
</Stack>`}
      />
    ),
  }];
  const props = [{
    name: "href",
    required: true,
    type: "string",
    default: null,
    notes: null,
  }, {
    name: "underline",
    required: false,
    type: '"always" | "hover" | "none"',
    default: '"always"',
    notes: (
      <div>
        It is important to indicate that links are clickable. Underlining is a
        popular way of achieving this goal, but there are many others. The best
        approach will depend on the context. See{" "}
        <Link href="https://www.nngroup.com/articles/clickable-elements/">
          Beyond Blue Links: Making Clickable Elements Recognizable
        </Link>{" "}
        for more information.
      </div>
    ),
  }, {
    name: "_newTab",
    required: false,
    type: "boolean",
    default: "false",
    notes: (
      <Stack class="gap-3">
        <p>
          Sets <InlineCode>target="blank"</InlineCode> and{" "}
          <InlineCode>rel="noopener noreferrer"</InlineCode>{" "}
          to get the link to open in a new tab.
        </p>
        <p>
          Note: Despite being relatively commonly seen on the web, it is
          generally inadvisable to do this. See{" "}
          <Link href="https://www.nngroup.com/articles/new-browser-windows-and-tabs/">
            Opening Links in New Browser Windows and Tabs
          </Link>
          .
        </p>
      </Stack>
    ),
  }, {
    name: "_includeNewTabIcon",
    required: false,
    type: "boolean",
    default: "false",
    notes: (
      <div>
        When <InlineCode>_newTab</InlineCode> is{" "}
        <InlineCode>true</InlineCode>, if{" "}
        <InlineCode>_includeNewTabIcon</InlineCode> is also{" "}
        <InlineCode>true</InlineCode>, there will be an icon at the end of the
        text indicating that the link will open in a new tab.
      </div>
    ),
  }, {
    name: "children",
    required: true,
    type: "ComponentChild",
    default: null,
    notes: null,
  }];

  return (
    <ComponentDocsPage
      componentName="Link"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/atoms/link.tsx"
      sections={sections}
      props={props}
    />
  );
};

