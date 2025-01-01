import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import {
  ComponentDocsPage,
  ExampleType,
} from "@/components/docs-site/component-docs-page/index.tsx";
import { ModalExample } from "@/islands/docs-site/component-docs-page/modal-example.tsx";

export default () => {
  const overviewNotes = null;
  const examples: ExampleType[] = [{
    title: "Basic",
    demo: <ModalExample>Example</ModalExample>,
    code: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Modal isOpen={isOpen} close={close}>
  Example
</Modal>`}
      />
    ),
  }, {
    title: "With heading",
    description: (
      <div>
        Set <InlineCode>heading</InlineCode> to a string.
      </div>
    ),
    demo: <ModalExample heading="Modal heading">Example</ModalExample>,
    code: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Modal heading="Modal heading" isOpen={isOpen} close={close}>
  Example
</Modal>`}
      />
    ),
  }];
  const propsTables = [{
    title: null,
    props: [{
      name: "isOpen",
      required: true,
      type: "boolean",
      default: null,
      notes: null,
    }, {
      name: "close",
      required: true,
      type: "() => void",
      default: null,
      notes: (
        <div>
          Use this to set <InlineCode>isOpen</InlineCode> to{" "}
          <InlineCode>false</InlineCode>.
        </div>
      ),
    }, {
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
    }, {
      name: "...rest",
      required: false,
      type: 'ComponentProps<"dialog">',
      default: null,
      notes: (
        <div>
          <div class="leading-relaxed">
            See the docs for{" "}
            <Link href="/rest-parameters">rest parameters</Link>. For{" "}
            <InlineCode>Modal</InlineCode>, you could pass anything you normally
            would pass to <InlineCode>{"<dialog>"}</InlineCode>{" "}
            because the return value{" "}
            <Link href="https://github.com/adamzerner/rfui/blob/master/islands/molecules/modal.tsx">
              looks something like
            </Link>{" "}
            this:
          </div>
          <CodeBlock
            language="tsx"
            code={`<dialog class={containerClass} {...restWithoutClass}>
  {children}
</dialog>`}
          />
        </div>
      ),
    }],
  }];

  return (
    <ComponentDocsPage
      componentName="Modal"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/islands/molecules/modal.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
