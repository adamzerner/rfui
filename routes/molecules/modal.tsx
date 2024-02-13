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
import { Prop } from "@/components/docs-site/component-docs-page/prop.tsx";
import { Props } from "@/components/docs-site/component-docs-page/props.tsx";
import { SectionType } from "@/components/docs-site/component-docs-page/section-type.ts";
import { Card } from "@/components/molecules/card.tsx";
import { ModalExample } from "@/islands/docs-site/component-docs-page/modal-example.tsx";

export default () => {
  const notes = null;
  const sections: SectionType[] = [{
    title: "Basic",
    example: <ModalExample>Example</ModalExample>,
    exampleCode: (
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
    example: <ModalExample heading="Modal heading">Example</ModalExample>,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Modal heading="Modal heading" isOpen={isOpen} close={close}>
  Example
</Modal>`}
      />
    ),
  }];
  const props = [{
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
  }];

  return (
    <ComponentDocsPage
      sectionTitles={sections.map((s) => s.title)}
    >
      <Header
        componentName="Modal"
        sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/islands/molecules/modal.tsx"
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
      <Props>
        {props.map((prop) => {
          const { notes, ...propWithoutNotes } = prop;

          return notes
            ? (
              <Prop prop={prop}>
                {notes}
              </Prop>
            )
            : <Prop prop={propWithoutNotes}></Prop>;
        })}
      </Props>
    </ComponentDocsPage>
  );
};
