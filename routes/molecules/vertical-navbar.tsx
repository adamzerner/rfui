import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Text } from "@/components/atoms/text.tsx";
import {
  ComponentDocsPage,
  ExampleType,
} from "@/components/docs-site/component-docs-page/index.tsx";
import { VerticalNavbarItem } from "@/components/molecules/vertical-navbar/vertical-navbar-item.tsx";
import { VerticalNavbarTop } from "@/components/molecules/vertical-navbar/vertical-navbar-top.tsx";
import { VerticalNavbar } from "@/islands/molecules/vertical-navbar/index.tsx";
import { VerticalNavbarSection } from "@/islands/molecules/vertical-navbar/vertical-navbar-section.tsx";

export default () => {
  const overviewNotes = (
    <Text>
      <p>
        A vertical navbar is a good option for more complex sites that have a
        lot of navigation items they want to display. See Nielsen Norman Group's
        {" "}
        <Link href="https://www.nngroup.com/articles/vertical-nav/">
          blog post
        </Link>{" "}
        for more information.
      </p>
      <p>
        Note: If you're using this component you'll probably want to structure
        your layout in a manner similar to this.
      </p>
      <CodeBlock
        language="tsx"
        code={`<section class="sm:flex">
  <VerticalNavbar route={route} />
  <Container class="grow pb-8">
    <Component />
  </Container>
</section>`}
      />
      <p>
        Note: This component doesn't work well with{" "}
        <Link href="/molecules/footer">
          <InlineCode>Footer</InlineCode>
        </Link>. You probably won't want to combine the two though.
      </p>
    </Text>
  );
  const examples: ExampleType[] = [{
    title: "Basic",
    demo: (
      <VerticalNavbar class="!h-[300px]">
        <VerticalNavbarTop>
          <VerticalNavbarSection>
            <VerticalNavbarItem href="/one" isActive={true}>
              One
            </VerticalNavbarItem>
            <VerticalNavbarItem href="/two" isActive={false}>
              Two
            </VerticalNavbarItem>
            <VerticalNavbarItem href="/three" isActive={false}>
              Three
            </VerticalNavbarItem>
          </VerticalNavbarSection>
        </VerticalNavbarTop>
      </VerticalNavbar>
    ),
    code: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<VerticalNavbar>
  <VerticalNavbarTop>
    <VerticalNavbarSection>
      <VerticalNavbarItem href="/one" isActive={true}>
        One
      </VerticalNavbarItem>
      <VerticalNavbarItem href="/two" isActive={false}>
        Two
      </VerticalNavbarItem>
      <VerticalNavbarItem href="/three" isActive={false}>
        Three
      </VerticalNavbarItem>
    </VerticalNavbarSection>
  </VerticalNavbarTop>
</VerticalNavbar>`}
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
