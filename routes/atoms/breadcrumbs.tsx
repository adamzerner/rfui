import { Breadcrumbs } from "@/components/atoms/breadcrumbs.tsx";
import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import {
  ComponentDocsPage,
  ExampleType,
} from "@/components/docs-site/component-docs-page/index.tsx";
import { Stack } from "@/components/helpers/stack.tsx";

export default () => {
  const overviewNotes = null;
  const examples: ExampleType[] = [{
    title: "Basic",
    demo: (
      <Breadcrumbs
        links={[
          { title: "One", href: "/one" },
          { title: "Two", href: "/two" },
          { title: "Three", href: "/three" },
        ]}
      />
    ),
    code: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Breadcrumbs
  links={[
    { title: "One", href: "/one" },
    { title: "Two", href: "/two" },
    { title: "Three", href: "/three" },
  ]}
/>`}
      />
    ),
  }, {
    title: "Size",
    demo: (
      <Stack class="gap-6">
        <Breadcrumbs
          size="sm"
          links={[
            { title: "One", href: "/one" },
            { title: "Two", href: "/two" },
            { title: "Three", href: "/three" },
          ]}
        />
        <Breadcrumbs
          size="md"
          links={[
            { title: "One", href: "/one" },
            { title: "Two", href: "/two" },
            { title: "Three", href: "/three" },
          ]}
        />
        <Breadcrumbs
          size="lg"
          links={[
            { title: "One", href: "/one" },
            { title: "Two", href: "/two" },
            { title: "Three", href: "/three" },
          ]}
        />
        <Breadcrumbs
          size="xl"
          links={[
            { title: "One", href: "/one" },
            { title: "Two", href: "/two" },
            { title: "Three", href: "/three" },
          ]}
        />
      </Stack>
    ),
    code: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stack class="gap-6">
  <Breadcrumbs
    size="sm"
    links={[
      { title: "One", href: "/one" },
      { title: "Two", href: "/two" },
      { title: "Three", href: "/three" },
    ]}
  />
  <Breadcrumbs
    size="md"
    links={[
      { title: "One", href: "/one" },
      { title: "Two", href: "/two" },
      { title: "Three", href: "/three" },
    ]}
  />
  <Breadcrumbs
    size="lg"
    links={[
      { title: "One", href: "/one" },
      { title: "Two", href: "/two" },
      { title: "Three", href: "/three" },
    ]}
  />
  <Breadcrumbs
    size="xl"
    links={[
      { title: "One", href: "/one" },
      { title: "Two", href: "/two" },
      { title: "Three", href: "/three" },
    ]}
  />
</Stack>`}
      />
    ),
  }];
  const propsTables = [{
    title: null,
    props: [{
      name: "links",
      required: true,
      type: "BreadcrumbLink[]",
      default: null,
      notes: (
        <div>
          The type for <InlineCode>BreadcrumbLink</InlineCode> is:
          <CodeBlock
            language="tsx"
            code={`type BreadcrumbLink = {
  title: string;
  href: string;
};`}
          />
        </div>
      ),
    }, {
      name: "size",
      required: false,
      type: '"sm" | "md" | "lg" | "xl"',
      default: '"sm"',
      notes: null,
    }, {
      name: "...rest",
      required: false,
      type: `ComponentProps<"nav">`,
      default: null,
      notes: (
        <div>
          <div class="leading-relaxed">
            See the docs for{" "}
            <Link href="/rest-parameters">rest parameters</Link>. For{" "}
            <InlineCode>Breadcrumbs</InlineCode>, you could pass anything you
            normally would pass to <InlineCode>{"<nav>"}</InlineCode>{" "}
            because the container{" "}
            <Link href="https://github.com/adamzerner/rfui/blob/master/islands/atoms/breadcrumbs.tsx">
              looks something like
            </Link>{" "}
            this:
          </div>
          <CodeBlock
            language="tsx"
            code={`<nav class={className} {...restWithoutClass}>
  {children}
</nav>`}
          />
        </div>
      ),
    }],
  }];

  return (
    <ComponentDocsPage
      componentName="Breadcrumbs"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/atoms/breadcrumbs.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
