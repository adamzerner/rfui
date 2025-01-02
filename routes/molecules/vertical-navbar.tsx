import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import {
  ComponentDocsPage,
  ExampleType,
} from "@/components/docs-site/component-docs-page/index.tsx";
import {
  Navbar,
  NavbarItem,
  NavbarLeft,
} from "@/islands/molecules/navbar/index.tsx";

export default () => {
  const overviewNotes = null;
  const examples: ExampleType[] = [{
    title: "Basic",
    demo: (
      <Navbar size="xl">
        <NavbarLeft>
          <NavbarItem href="https://one.com">One</NavbarItem>
          <NavbarItem href="https://two.com">Two</NavbarItem>
        </NavbarLeft>
      </Navbar>
    ),
    code: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Navbar size="xl">
  <NavbarLeft>
    <NavbarItem href="https://one.com">One</NavbarItem>
    <NavbarItem href="https://two.com">Two</NavbarItem>
  </NavbarLeft>
</Navbar>`}
      />
    ),
  }];
  const propsTables = [{
    title: null,
    props: [{
      name: "background",
      required: false,
      type: '"neutral" | "none"',
      default: '"neutral"',
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
      type: 'Omit<ComponentProps<"nav">, "size">',
      default: null,
      notes: (
        <div>
          <div class="leading-relaxed">
            See the docs for{" "}
            <Link href="/rest-parameters">rest parameters</Link>. For{" "}
            <InlineCode>VerticalNavbar</InlineCode>, you could pass anything you
            normally would pass to <InlineCode>{"<nav>"}</InlineCode>{" "}
            because the return value{" "}
            <Link href="https://github.com/adamzerner/rfui/blob/master/islands/molecules/vertical-navbar.tsx">
              looks something like
            </Link>{" "}
            this:
          </div>
          <CodeBlock
            language="tsx"
            code={`<nav class={containerClass} {...restWithoutClass}>
  ...
</nav>`}
          />
        </div>
      ),
    }],
  }, {
    title: "VerticalNavbarTop",
    props: [{
      name: "children",
      required: true,
      type: "ComponentChild",
      default: null,
      notes: null,
    }],
  }, {
    title: "VerticalNavbarBottom",
    props: [{
      name: "children",
      required: true,
      type: "ComponentChild",
      default: null,
      notes: null,
    }],
  }, {
    title: "VerticalNavbarSection",
    props: [{
      name: "heading",
      required: false,
      type: "string",
      default: null,
      notes: null,
    }, {
      name: "children",
      required: true,
      type: "ComponentChild",
      default: null,
      notes: null,
    }],
  }, {
    title: "VerticalNavbarItem",
    props: [{
      name: "href",
      required: true,
      type: "string",
      default: null,
      notes: null,
    }, {
      name: "isActive",
      required: true,
      type: "boolean",
      default: null,
      notes: null,
    }, {
      name: "shouldOpenInNewTab",
      required: false,
      type: "boolean",
      default: "false",
      notes: (
        <div>
          See the <Link href="/atoms/link#example-new-tab">docs</Link>{" "}
          for the corresponding property in the <InlineCode>Link</InlineCode>
          {" "}
          component.
        </div>
      ),
    }, {
      name: "shouldIncludeNewTabIcon",
      required: false,
      type: "boolean",
      default: "false",
      notes: (
        <div>
          See the <Link href="/atoms/link#example-new-tab">docs</Link>{" "}
          for the corresponding property in the <InlineCode>Link</InlineCode>
          {" "}
          component.
        </div>
      ),
    }, {
      name: "icon",
      required: false,
      type: "ComponentChild",
      default: null,
      notes: "A 20x20 icon to be placed to the left of the text.",
    }, {
      name: "children",
      required: true,
      type: "ComponentChild",
      default: null,
      notes: null,
    }],
  }];

  return (
    <ComponentDocsPage
      componentName="VerticalNavbar"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/molecules/vertical-navbar.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
