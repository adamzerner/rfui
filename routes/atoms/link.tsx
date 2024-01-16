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
import { Flex } from "@/islands/helpers/flex.tsx";
import { Stack } from "@/islands/helpers/stack.tsx";
import { Card } from "@/islands/molecules/card.tsx";

export default () => {
  const notes = null;
  const sections: SectionType[] = [{
    title: "Basic",
    example: <Link href="https://example.com">Example</Link>,
    exampleCode: (
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
    example: (
      <Flex class="gap-3">
        <Link underline="always" href="https://example.com">always</Link>
        <Link underline="hover" href="https://example.com">hover</Link>
        <Link underline="none" href="https://example.com">none</Link>
      </Flex>
    ),
    exampleCode: (
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
    title: "In-page link",
    description: (
      <div>
        See{" "}
        <Link href="https://www.nngroup.com/articles/in-page-links/">
          Anchors OK? Re-Assessing In-Page Links
        </Link>{" "}
        from NNGroup.
      </div>
    ),
    example: <Link inPageLink underline="hover" href="#section">Example</Link>,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Link inPageLink underline="hover" href="#section">
  Example
</Link>`}
      />
    ),
  }, {
    title: "New tab",
    description: (
      <Stack class="gap-3">
        <div>
          Sets <InlineCode>target="blank"</InlineCode> and{" "}
          <InlineCode>rel="noopener noreferrer"</InlineCode>{" "}
          to get the link to open in a new tab.
        </div>
        <div>
          Note: Despite being relatively commonly seen on the web, it is
          generally inadvisable to do this. See{" "}
          <Link href="https://www.nngroup.com/articles/new-browser-windows-and-tabs/">
            Opening Links in New Browser Windows and Tabs
          </Link>
          .
        </div>
        <div>
          Note: When <InlineCode>_newTab</InlineCode> is{" "}
          <InlineCode>true</InlineCode>, if{" "}
          <InlineCode>_includeNewTabIcon</InlineCode> is also{" "}
          <InlineCode>true</InlineCode>, there will be an icon at the end of the
          text indicating that the link will open in a new tab.
        </div>
      </Stack>
    ),
    example: (
      <Stack class="gap-8">
        <Stack class="gap-5">
          <Link _newTab href="https://example.com" underline="always">
            _newTab
          </Link>
          <Link _newTab href="https://example.com" underline="hover">
            _newTab
          </Link>
          <Link _newTab href="https://example.com" underline="none">
            _newTab
          </Link>
        </Stack>
        <Stack class="gap-5">
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
        </Stack>
      </Stack>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="gap-8">
  <Stack class="gap-5">
    <Link _newTab href="https://example.com" underline="always">
      _newTab
    </Link>
    <Link _newTab href="https://example.com" underline="hover">
      _newTab
    </Link>
    <Link _newTab href="https://example.com" underline="none">
      _newTab
    </Link>
  </Stack>
  <Stack class="gap-5">
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
  </Stack>
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
    name: "inPageLink",
    required: false,
    type: "boolean",
    default: "false",
    notes: (
      <div>
        See{" "}
        <Link href="https://www.nngroup.com/articles/in-page-links/">
          Anchors OK? Re-Assessing In-Page Links
        </Link>{" "}
        from NNGroup.
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
  }, {
    name: "...rest",
    required: false,
    type: "JSX.HTMLAttributes<HTMLAnchorElement>",
    default: null,
    notes: (
      <div>
        <div class="leading-relaxed">
          See the docs for{" "}
          <Link href="/rest-parameters">rest parameters</Link>. For{" "}
          <InlineCode>Link</InlineCode>, you could pass anything you normally
          would pass to <InlineCode>{"<a>"}</InlineCode>{" "}
          because the return value{" "}
          <Link href="https://github.com/adamzerner/rfui/blob/master/islands/atoms/link.tsx">
            looks something like
          </Link>{" "}
          this:
        </div>
        <CodeBlock
          language="tsx"
          code={`<a class={className} {...restWithoutClass}>
  {children}
</a>`}
        />
      </div>
    ),
  }];

  return (
    <ComponentDocsPage
      sectionTitles={sections.map((s) => s.title)}
    >
      <Header
        componentName="Link"
        sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/islands/atoms/link.tsx"
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
