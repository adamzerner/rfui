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
import { Props } from "@/components/docs-site/component-docs-page/props.tsx";
import { SectionType } from "@/components/docs-site/component-docs-page/section-type.ts";
import { Stack } from "@/components/helpers/stack.tsx";
import { Card } from "@/components/molecules/card.tsx";
import {
  Navbar,
  NavbarDropdown,
  NavbarDropdownItem,
  NavbarItem,
  NavbarLeft,
  NavbarMegamenu,
  NavbarRight,
} from "@/islands/molecules/navbar/index.tsx";

export default () => {
  const notes = (
    <Stack class="gap-3">
      <p>
        Note: Based on{" "}
        <Link href="https://www.nngroup.com/articles/find-navigation-mobile-even-hamburger/">
          this advice
        </Link>{" "}
        from Nielsen Norman Group, on narrow viewports (eg. mobile devices) a
        hamburger menu will be used if there are more than four nav items and a
        stacked list (no hamburger menu) will be used if there are four or less
        nav items.
      </p>
      <p>
        Note: In the examples below the horizontal padding is a little off. This
        won't happen in practice though if you do something like this:
      </p>
      <CodeBlock
        language="tsx"
        code={`export default () => {
  return (
    <>
      <Navbar route={route} />
      <Container size="xl">
        <Component />
      </Container>
      <Footer />
    </>
  );
}
`}
      />
    </Stack>
  );
  const sections: SectionType[] = [{
    title: "Basic",
    example: (
      <Navbar size="xl">
        <NavbarLeft>
          <NavbarItem href="https://one.com">One</NavbarItem>
          <NavbarItem href="https://two.com">Two</NavbarItem>
        </NavbarLeft>
      </Navbar>
    ),
    exampleCode: (
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
    example: (
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
    exampleCode: (
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
    example: (
      <Stack class="w-full gap-5">
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
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="w-full gap-5">
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
  }, {
    title: "Dropdown",
    description: (
      <div>
        Dropdowns work well when there are few menu items. Prefer using a{" "}
        <Link href="https://www.nngroup.com/articles/mega-menus-work-well/">
          megamenu
        </Link>{" "}
        when there are many menu items.
      </div>
    ),
    example: (
      <Navbar size="xl">
        <NavbarLeft>
          <NavbarItem href="https://one.com">One</NavbarItem>
          <NavbarItem href="https://two.com">Two</NavbarItem>
          <NavbarDropdown title="Dropdown">
            <NavbarDropdownItem href="https://three.com">
              Three
            </NavbarDropdownItem>
            <NavbarDropdownItem href="https://four.com">
              Four
            </NavbarDropdownItem>
          </NavbarDropdown>
        </NavbarLeft>
      </Navbar>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Navbar size="xl">
  <NavbarLeft>
    <NavbarItem href="https://one.com">One</NavbarItem>
    <NavbarItem href="https://two.com">Two</NavbarItem>
    <NavbarDropdown title="Dropdown">
      <NavbarDropdownItem href="https://three.com">
        Three
      </NavbarDropdownItem>
      <NavbarDropdownItem href="https://four.com">
        Four
      </NavbarDropdownItem>
    </NavbarDropdown>
  </NavbarLeft>
</Navbar>`}
      />
    ),
  }, {
    title: "Megamenu",
    description: (
      <Stack class="gap-3">
        <div>
          While <Link href="/molecules/navbar#dropdown">dropdowns</Link>{" "}
          work well when there are few menu items, megamenus{" "}
          <Link href="https://www.nngroup.com/articles/mega-menus-work-well/">
            work well
          </Link>{" "}
          when there are many menu items.
        </div>
        <div>
          To control the submenu on desktop views,{" "}
          <InlineCode>desktopRest</InlineCode>{" "}
          will be passed in a manner similar to other{" "}
          <Link href="/rest-parameters">rest parameters</Link>. For the mobile
          submenu, use <InlineCode>mobileRest</InlineCode> instead of{" "}
          <InlineCode>desktopRest</InlineCode>.
        </div>
        <div>
          Note: this demo is sorta broken. You need to scroll to the top of the
          page to see the desktop submenu. In practice, if your navbar is at the
          top of the page, you won't have this problem. If you need to position
          the submenu you can set the <InlineCode>left</InlineCode> and{" "}
          <InlineCode>top</InlineCode> css properties.
        </div>
      </Stack>
    ),
    example: (
      <Navbar size="xl">
        <NavbarLeft>
          <NavbarItem href="https://one.com">One</NavbarItem>
          <NavbarItem href="https://two.com">Two</NavbarItem>
          <NavbarMegamenu
            title="Megamenu"
            desktopSubmenu={{
              class: "left-0 w-full p-6 bg-neutral-900 text-neutral-100",
            }}
            mobileSubmenu={{
              class: "bg-neutral-900 text-neutral-100 p-6",
            }}
          >
            <div>Example</div>
          </NavbarMegamenu>
        </NavbarLeft>
      </Navbar>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Navbar size="xl">
  <NavbarLeft>
    <NavbarItem href="https://one.com">One</NavbarItem>
    <NavbarItem href="https://two.com">Two</NavbarItem>
    <NavbarMegamenu
      title="Megamenu"
      desktopSubmenu={{
        class: "left-0 w-full p-6 bg-neutral-900 text-neutral-100",
      }}
      mobileSubmenu={{
        class: "bg-neutral-900 text-neutral-100 p-6",
      }}
    >
      <div>Example</div>
    </NavbarMegamenu>
  </NavbarLeft>
</Navbar>`}
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
        Set this to the same value as the{" "}
        <Link href="/helpers/container">
          <InlineCode>Container</InlineCode>
        </Link>.
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
    notes: "Doesn't apply to the stacked UI that appears on small viewports.",
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
          <InlineCode>Navbar</InlineCode>, you could pass anything you normally
          would pass to <InlineCode>{"<nav>"}</InlineCode>{" "}
          because the return value{" "}
          <Link href="https://github.com/adamzerner/rfui/blob/master/islands/molecules/navbar.tsx">
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
  const navbarLeftProps = [{
    name: "children",
    required: true,
    type: "ComponentChild",
    default: null,
    notes: null,
  }];
  const navbarRightProps = [{
    name: "children",
    required: true,
    type: "ComponentChild",
    default: null,
    notes: null,
  }];
  const navbarItemProps = [{
    name: "href",
    required: true,
    type: "string",
    default: null,
    notes: null,
  }, {
    name: "isActive",
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
    type: 'ComponentProps<"li">',
    default: null,
    notes: null,
  }];
  const navbarDropdownProps = [{
    name: "title",
    required: true,
    type: "string",
    default: null,
  }, {
    name: "children",
    required: true,
    type: "ComponentChild",
    default: null,
    notes: (
      <div>
        The <InlineCode>children</InlineCode> should consist of{" "}
        <InlineCode>NavbarDropdownItem</InlineCode> elements.
      </div>
    ),
  }, {
    name: "...rest",
    required: false,
    type: 'ComponentProps<"li">',
    default: null,
    notes: null,
  }];
  const navbarDropdownItemProps = [{
    name: "href",
    required: true,
    type: "string",
    default: null,
    notes: null,
  }, {
    name: "children",
    required: true,
    type: "ComponentChild",
    default: null,
    notes: null,
  }];
  const navbarMegamenuProps = [{
    name: "title",
    required: true,
    type: "string",
    default: null,
  }, {
    name: "children",
    required: true,
    type: "ComponentChild",
    default: null,
    notes: (
      <div>
        The <InlineCode>children</InlineCode> should consist of{" "}
        <InlineCode>NavbarDropdownItem</InlineCode> elements.
      </div>
    ),
  }, {
    name: "desktopSubmenu",
    required: false,
    type: 'ComponentProps<"div">',
    default: null,
    notes: (
      <div>
        This will be passed to the desktop submenu in a manner similar to other
        {" "}
        <Link href="/rest-parameters">rest parameters</Link>.
      </div>
    ),
  }, {
    name: "mobileSubmenu",
    required: false,
    type: 'ComponentProps<"div">',
    default: null,
    notes: (
      <div>
        This will be passed to the mobile submenu in a manner similar to other
        {" "}
        <Link href="/rest-parameters">rest parameters</Link>.
      </div>
    ),
  }, {
    name: "...rest",
    required: false,
    type: 'ComponentProps<"li">',
    default: null,
    notes: null,
  }];

  return (
    <ComponentDocsPage
      sectionTitles={sections.map((s) => s.title)}
    >
      <Header
        componentName="Navbar"
        sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/molecules/navbar.tsx"
        importStatement={`import {
  Navbar,
  NavbarItem,
  NavbarLeft,
  NavbarRight,
} from "rfui";`}
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
      <Props props={props} />
      <Props props={navbarLeftProps} subComponentTitle="NavbarLeft" />
      <Props props={navbarRightProps} subComponentTitle="NavbarRight" />
      <Props props={navbarItemProps} subComponentTitle="NavbarItem" />
      <Props props={navbarDropdownProps} subComponentTitle="NavbarDropdown" />
      <Props
        props={navbarDropdownItemProps}
        subComponentTitle="NavbarDropdownItem"
      />
      <Props props={navbarMegamenuProps} subComponentTitle="NavbarMegamenu" />
    </ComponentDocsPage>
  );
};
