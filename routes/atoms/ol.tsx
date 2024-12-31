import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { OL } from "@/components/atoms/ol.tsx";
import {
  ComponentDocsPage,
  ExamplesSectionType,
} from "@/components/docs-site/component-docs-page/index.tsx";

export default () => {
  const overviewNotes = null;
  const examplesSections: ExamplesSectionType[] = [{
    title: "Basic",
    example: (
      <OL>
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
      </OL>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<OL>
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</OL>`}
      />
    ),
  }, {
    title: "Outside",
    example: (
      <OL bulletLocation="outside">
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
      </OL>
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<OL bulletLocation="outside">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</OL>`}
      />
    ),
  }];
  const propsTables = [{
    title: null,
    props: [{
      name: "bulletLocation",
      required: false,
      type: "'inside' | 'outside'",
      default: "'inside'",
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
      type: 'ComponentProps<"ol">',
      default: null,
      notes: (
        <div>
          <div class="leading-relaxed">
            See the docs for{" "}
            <Link href="/rest-parameters">rest parameters</Link>. For{" "}
            <InlineCode>OL</InlineCode>, you could pass anything you normally
            would pass to <InlineCode>{"<ol>"}</InlineCode>{" "}
            because the return value{" "}
            <Link href="https://github.com/adamzerner/rfui/blob/master/islands/atoms/ol.tsx">
              looks something like
            </Link>{" "}
            this:
          </div>
          <CodeBlock
            language="tsx"
            code={`<ol class={className} {...restWithoutClass}>
  {children}
</ol>`}
          />
        </div>
      ),
    }],
  }];

  return (
    <ComponentDocsPage
      componentName="OL"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/atoms/ol.tsx"
      overviewNotes={overviewNotes}
      examplesSections={examplesSections}
      propsTables={propsTables}
    />
  );
};
