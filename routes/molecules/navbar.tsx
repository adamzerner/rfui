import { CodeBlock } from "@/islands/atoms/code-block.tsx";
import { InlineCode } from "@/islands/atoms/inline-code.tsx";
import { Link } from "@/islands/atoms/link.tsx";
import { ComponentDocsPage } from "@/islands/demo/component-docs-page/index.tsx";
import {
  Navbar,
  NavbarItem,
  NavbarLeft,
  NavbarRight,
} from "@/islands/molecules/navbar.tsx";
import { Stack } from "../../islands/helpers/stack.tsx";

export default () => {
  const sections = [{
    title: "Basic",
    example: () => (
      <Navbar size="xl">
        <NavbarItem href="https://one.com">One</NavbarItem>
        <NavbarItem href="https://two.com">Two</NavbarItem>
      </Navbar>
    ),
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Navbar size="xl">
  <NavbarItem href="https://one.com">One</NavbarItem>
  <NavbarItem href="https://two.com">Two</NavbarItem>
</Navbar>`}
      />
    ),
  }, {
    title: "NavbarLeft",
    example: () => (
      <Navbar size="xl">
        <NavbarLeft>
          <NavbarItem href="https://one.com">One</NavbarItem>
          <NavbarItem href="https://two.com">Two</NavbarItem>
        </NavbarLeft>
      </Navbar>
    ),
    exampleCode: () => (
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
  }, {
    title: "NavbarLeft and NavbarRight",
    example: () => (
      <Navbar size="xl">
        <NavbarLeft>
          <NavbarItem href="https://one.com">One</NavbarItem>
          <NavbarItem href="https://two.com">Two</NavbarItem>
        </NavbarLeft>
        <NavbarRight>
          <NavbarItem href="https://three.com">Three</NavbarItem>
          <NavbarItem href="https://four.com">Four</NavbarItem>
        </NavbarRight>
      </Navbar>
    ),
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Navbar size="xl">
  <NavbarLeft>
    <NavbarItem href="https://one.com">One</NavbarItem>
    <NavbarItem href="https://two.com">Two</NavbarItem>
  </NavbarLeft>
  <NavbarRight>
    <NavbarItem href="https://three.com">Three</NavbarItem>
    <NavbarItem href="https://four.com">Four</NavbarItem>
  </NavbarRight>
</Navbar>`}
      />
    ),
  }, {
    title: "Background",
    description: (
      <div>
        Set <InlineCode>background</InlineCode> to{" "}
        <InlineCode>"neutral"</InlineCode> or{" "}
        <InlineCode>"none"</InlineCode>. Defaults to{" "}
        <InlineCode>"neutral"</InlineCode>.
      </div>
    ),
    example: () => (
      <Stack class="gap-5 w-full">
        <Navbar size="xl" background="neutral">
          <NavbarLeft>
            <NavbarItem href="https://one.com">One</NavbarItem>
            <NavbarItem href="https://two.com">Two</NavbarItem>
          </NavbarLeft>
          <NavbarRight>
            <NavbarItem href="https://three.com">Three</NavbarItem>
            <NavbarItem href="https://four.com">Four</NavbarItem>
          </NavbarRight>
        </Navbar>
        <Navbar size="xl" background="none">
          <NavbarLeft>
            <NavbarItem href="https://one.com">One</NavbarItem>
            <NavbarItem href="https://two.com">Two</NavbarItem>
          </NavbarLeft>
          <NavbarRight>
            <NavbarItem href="https://three.com">Three</NavbarItem>
            <NavbarItem href="https://four.com">Four</NavbarItem>
          </NavbarRight>
        </Navbar>
      </Stack>
    ),
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="gap-5 w-full">
  <Navbar size="xl" background="neutral">
    <NavbarLeft>
      <NavbarItem href="https://one.com">One</NavbarItem>
      <NavbarItem href="https://two.com">Two</NavbarItem>
    </NavbarLeft>
    <NavbarRight>
      <NavbarItem href="https://three.com">Three</NavbarItem>
      <NavbarItem href="https://four.com">Four</NavbarItem>
    </NavbarRight>
  </Navbar>
  <Navbar size="xl" background="none">
    <NavbarLeft>
      <NavbarItem href="https://one.com">One</NavbarItem>
      <NavbarItem href="https://two.com">Two</NavbarItem>
    </NavbarLeft>
    <NavbarRight>
      <NavbarItem href="https://three.com">Three</NavbarItem>
      <NavbarItem href="https://four.com">Four</NavbarItem>
    </NavbarRight>
  </Navbar>
</Stack>`}
      />
    ),
  }];
  const props = [{
    name: "size",
    required: false,
    type: '"sm" | "md" | "lg" | "xl"',
    default: '"md"',
    notes: (
      <div>
        Set this to the same value as the <InlineCode>Container</InlineCode>.
      </div>
    ),
  }, {
    name: "background",
    required: false,
    type: '"neutral" | "none"',
    default: '"neutral"',
    notes: null,
  }, {
    name: "sticky",
    required: false,
    type: "boolean",
    default: "false",
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
    type: 'Omit<JSX.HTMLAttributes<HTMLElement>, "size">',
    default: null,
    notes: (
      <div>
        <div class="leading-relaxed">
          See the docs for{" "}
          <Link href="/rest-parameters">rest parameters</Link>. For{" "}
          <InlineCode>Navbar</InlineCode>, you could pass anything you normally
          would pass to <InlineCode>{"<nav>"}</InlineCode>{" "}
          because the return value{" "}
          <Link href="https://github.com/adamzerner/rfui/blob/master/components/molecules/navbar.tsx">
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
  }];

  return (
    <ComponentDocsPage
      componentName="Navbar"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/molecules/navbar.tsx"
      sections={sections}
      props={props}
    />
  );
};
