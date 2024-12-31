import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import {
  ComponentDocsPage,
  ExamplesSectionType,
} from "@/components/docs-site/component-docs-page/index.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { NavigationLinks } from "@/components/molecules/navigation-links.tsx";

export default () => {
  const overviewNotes =
    'This component is useful for lists of links. RFUI uses it for the "Components" section on the left side of this page and for the "On this page" section on the right side of this page.';
  const examplesSections: ExamplesSectionType[] = [{
    title: "Basic",
    example: (
      <NavigationLinks
        linkItems={[{
          name: "One",
          href: "/one",
          children: [],
        }, {
          name: "Two",
          href: "/two",
          children: [],
        }]}
      />
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<NavigationLinks
  linkItems={[{
    name: "One",
    href: "/one",
    children: [],
  }, {
    name: "Two",
    href: "/two",
    children: [],
  }]}
/>`}
      />
    ),
  }, {
    title: "With header",
    example: (
      <NavigationLinks
        linkItems={[{
          name: "Header",
          isHeader: true,
          children: [],
        }, {
          name: "One",
          href: "/one",
          children: [],
        }, {
          name: "Two",
          href: "/two",
          children: [],
        }]}
      />
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<NavigationLinks
  linkItems={[{
    name: "Header",
    isHeader: true,
    children: [],
  }, {
    name: "One",
    href: "/one",
    children: [],
  }, {
    name: "Two",
    href: "/two",
    children: [],
  }]}
/>`}
      />
    ),
  }, {
    title: "Multilevel",
    description: (
      <div>
        To go more levels deep, just keep using{" "}
        <InlineCode>children</InlineCode>.
      </div>
    ),
    example: (
      <NavigationLinks
        linkItems={[{
          name: "Components",
          isHeader: true,
          children: [],
        }, {
          name: "Atoms",
          children: [{
            name: "Badge",
            href: "/atoms/badge",
            children: [],
          }, {
            name: "Blockquote",
            href: "/atoms/blockquote",
            children: [],
          }],
        }, {
          name: "Molecules",
          children: [{
            name: "Alert",
            href: "/molecules/alert",
            children: [],
          }, {
            name: "Card",
            href: "/molecules/card",
            children: [],
          }],
        }]}
      />
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<NavigationLinks
  linkItems={[{
    name: "Components",
    isHeader: true,
    children: [],
  }, {
    name: "Atoms",
    children: [{
      name: "Badge",
      href: "/atoms/badge",
      children: [],
    }, {
      name: "Blockquote",
      href: "/atoms/blockquote",
      children: [],
    }],
  }, {
    name: "Molecules",
    children: [{
      name: "Alert",
      href: "/molecules/alert",
      children: [],
    }, {
      name: "Card",
      href: "/molecules/card",
      children: [],
    }],
  }]}
/>`}
      />
    ),
  }, {
    title: "In page",
    description: (
      <div>
        Using the <InlineCode>inPage</InlineCode> property will trigger the{" "}
        <InlineCode>Link</InlineCode> component's{" "}
        <Link href="/atoms/link#example-in-page-link">
          in-page link functionality
        </Link>.
      </div>
    ),
    example: (
      <NavigationLinks
        linkItems={[{
          name: "One",
          href: "#one",
          inPage: true,
          children: [],
        }, {
          name: "Two",
          href: "#two",
          inPage: true,
          children: [],
        }]}
      />
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<NavigationLinks
  linkItems={[{
    name: "One",
    href: "#one",
    inPage: true,
    children: [],
  }, {
    name: "Two",
    href: "#two",
    inPage: true,
    children: [],
  }]}
/>`}
      />
    ),
  }, {
    title: "Sticky",
    description: (
      <Stack class="gap-4">
        <div>
          Often times you'll want this component to be sticky, such that it
          stays in place when you scroll down. To accomplish this you'll want to
          add something like:
        </div>
        <CodeBlock
          language="tsx"
          code='class="sticky top-6 max-h-[90vh] overflow-y-auto"'
        />
        <div>Note: the example below isn't actually sticky.</div>
      </Stack>
    ),
    example: (
      <NavigationLinks
        linkItems={[{
          name: "One",
          href: "/one",
          children: [],
        }, {
          name: "Two",
          href: "/two",
          children: [],
        }]}
      />
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<NavigationLinks
  class="sticky top-6 max-h-[90vh] overflow-y-auto"
  linkItems={[{
    name: "One",
    href: "/one",
    children: [],
  }, {
    name: "Two",
    href: "/two",
    children: [],
  }]}
/>`}
      />
    ),
  }];
  const propsTables = [{
    title: null,
    props: [{
      name: "linkItems",
      required: true,
      type: "LinkItemType[]",
      default: null,
      notes: (
        <div>
          The type for <InlineCode>LinkItemType</InlineCode>{" "}
          is below. Note that it is defined recursively.
          <CodeBlock
            language="tsx"
            code={`type LinkItemType = {
  name: string;
  href?: string;
  isHeader?: boolean;
  inPage?: boolean;
  children: LinkItemType[];
}`}
          />
        </div>
      ),
    }, {
      name: "...rest",
      required: false,
      type: 'Omit<StackType, "children">',
      default: null,
      notes: (
        <div>
          <div class="leading-relaxed">
            See the docs for{" "}
            <Link href="/rest-parameters">rest parameters</Link>. For{" "}
            <InlineCode>NavigationLinks</InlineCode>, you could pass anything
            you normally would pass to <InlineCode>{"<Stack>"}</InlineCode>{" "}
            because the return value{" "}
            <Link href="https://github.com/adamzerner/rfui/blob/master/components/molecules/navigation-links.tsx">
              looks something like
            </Link>{" "}
            this:
          </div>
          <CodeBlock
            language="tsx"
            code={`<Stack class={containerClass} {...restWithoutClass}>
  ...
</Stack>`}
          />
        </div>
      ),
    }],
  }];

  return (
    <ComponentDocsPage
      componentName="NavigationLinks"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/molecules/navigation-links.tsx"
      overviewNotes={overviewNotes}
      examplesSections={examplesSections}
      propsTables={propsTables}
    />
  );
};
