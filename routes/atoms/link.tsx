import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import {
  ComponentDocsPage,
  ExampleType,
} from "@/components/docs-site/component-docs-page/index.tsx";
import { Flex } from "@/components/helpers/flex.tsx";
import { Stack } from "@/components/helpers/stack.tsx";

export default () => {
  const overviewNotes = null;
  const examples: ExampleType[] = [{
    title: "Basic",
    demo: <Link href="https://example.com">Example</Link>,
    code: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Link href="https://example.com">Example</Link>`}
      />
    ),
  }, {
    title: "Underline",
    description: (
      <Stack class="gap-3">
        <div>
          Set <InlineCode>underline</InlineCode> to either{" "}
          <InlineCode>"always"</InlineCode>, <InlineCode>"hover"</InlineCode> or
          {" "}
          <InlineCode>"none"</InlineCode>. Defaults to{" "}
          <InlineCode>"always"</InlineCode>.
        </div>
        <div>
          It is important to indicate that links are clickable. Underlining is a
          popular way of achieving this goal, but there are many others. The
          best approach will depend on the context. See{" "}
          <Link href="https://www.nngroup.com/articles/clickable-elements/">
            Beyond Blue Links: Making Clickable Elements Recognizable
          </Link>{" "}
          for more information.
        </div>
      </Stack>
    ),
    demo: (
      <Flex class="gap-3">
        <Link underline="always" href="https://example.com">always</Link>
        <Link underline="hover" href="https://example.com">hover</Link>
        <Link underline="none" href="https://example.com">none</Link>
      </Flex>
    ),
    code: (
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
      <Stack class="gap-3">
        <div>
          Set <InlineCode>inPageLink</InlineCode> to either{" "}
          <InlineCode>true</InlineCode> or{" "}
          <InlineCode>false</InlineCode>. Defaults to{" "}
          <InlineCode>false</InlineCode>.
        </div>
        <div>
          When{" "}
          <InlineCode>true</InlineCode>, adds a "#" on hover to the left of the
          text.
        </div>
        <div>
          See{" "}
          <Link href="https://www.nngroup.com/articles/in-page-links/">
            Anchors OK? Re-Assessing In-Page Links
          </Link>{" "}
          from Nielsen Norman Group.
        </div>
      </Stack>
    ),
    demo: <Link inPageLink underline="hover" href="#section">Example</Link>,
    code: (
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
          Set <InlineCode>inPageLink</InlineCode> to either{" "}
          <InlineCode>true</InlineCode> or{" "}
          <InlineCode>false</InlineCode>. Defaults to{" "}
          <InlineCode>false</InlineCode>.
        </div>
        <div>
          When <InlineCode>true</InlineCode>, sets{" "}
          <InlineCode>target="blank"</InlineCode> and{" "}
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
    demo: (
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
    code: (
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
  const propsTables = [{
    title: null,
    props: [{
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
          popular way of achieving this goal, but there are many others. The
          best approach will depend on the context. See{" "}
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
          from Nielsen Norman Group.
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
      type: 'ComponentProps<"a">',
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
    }],
  }];

  return (
    <ComponentDocsPage
      componentName="Link"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/atoms/link.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
