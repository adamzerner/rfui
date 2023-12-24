import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import {
  Navbar,
  NavbarItem,
  NavbarLeft,
  NavbarRight,
} from "@/components/molecules/navbar.tsx";
import { ComponentDocsPage } from "@/islands/demo/component-docs-page.tsx";

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
