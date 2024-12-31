import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import {
  ComponentDocsPage,
  ExamplesSectionType,
} from "@/components/docs-site/component-docs-page/index.tsx";
import { NavigationLinks } from "@/components/molecules/navigation-links.tsx";

export default () => {
  const overviewNotes =
    'This component is useful for lists of links. RFUI uses it for the components "Components" section on the left side of this page and for the "On this page" section on the right side of this page.';
  const examplesSections: ExamplesSectionType[] = [{
    title: "Basic",
    example: <NavigationLinks linkItems={[]} />,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Stepper />`}
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
