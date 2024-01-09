import { CodeBlock } from "@/islands/atoms/code-block.tsx";
import { H2 } from "@/islands/atoms/h2.tsx";
import { InlineCode } from "@/islands/atoms/inline-code.tsx";
import { Link } from "@/islands/atoms/link.tsx";
import { Text } from "@/islands/atoms/text.tsx";
import {
  Example,
  Header,
  Notes,
} from "@/islands/demo/component-docs-page/header.tsx";
import { ComponentDocsPage } from "@/islands/demo/component-docs-page/index.tsx";
import { Prop } from "@/islands/demo/component-docs-page/prop.tsx";
import { Props } from "@/islands/demo/component-docs-page/props.tsx";
import { SectionType } from "@/islands/demo/component-docs-page/section-type.ts";
import { Card } from "@/islands/molecules/card.tsx";

export default () => {
  const notes = null;
  const sections: SectionType[] = [{
    title: "Basic",
    example: <CodeBlock code={`console.log("Hello world");`} />,
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<CodeBlock code={\`console.log("Hello world");\`} />`}
      />
    ),
  }, {
    title: "Whitespace",
    description: (
      <div>
        Preserving whitespace and line breaks is a little tricky. In short, just
        try to follow the example below and make sure you use a{" "}
        <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals">
          template string
        </Link>{" "}
        instead of a normal string.
      </div>
    ),
    example: (
      <CodeBlock
        language="ts"
        code={`function sayHello() {
  console.log("Hello world");
}`}
      />
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<CodeBlock
  language="ts"
  code={\`function sayHello() {
  console.log("Hello world");
}\`}
/>`}
      />
    ),
  }, {
    title: "Language",
    description: (
      <div>
        See{" "}
        <Link href="https://prismjs.com/index.html#supported-languages">
          this list
        </Link>. And make sure when you download Prism (see{" "}
        <Link href="/getting-started#set-up-syntax-highlighting">
          Getting started
        </Link>) that you check off the languages you need.
      </div>
    ),
    example: (
      <CodeBlock
        language="ts"
        code={`const firstName = 'John';
const lastName = 'Doe';
const fullName = firstName + " " + lastName;`}
      />
    ),
    exampleCode: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<CodeBlock
 language="ts"
 code={\`const firstName = 'John';
const lastName = 'Doe';
const fullName = firstName + " " + lastName;\`}
/>`}
      />
    ),
  }];
  const props = [{
    name: "code",
    required: true,
    type: "string",
    default: null,
    notes: (
      <div>
        Preserving whitespace and line breaks is a little tricky. In short, just
        try to follow the example <Link href="#whitespace">here</Link>{" "}
        and make sure you use a{" "}
        <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals">
          template string
        </Link>{" "}
        instead of a normal string.
      </div>
    ),
  }, {
    name: "language",
    required: false,
    type: "string",
    default: null,
    notes: (
      <div>
        See{" "}
        <Link href="https://prismjs.com/index.html#supported-languages">
          this list
        </Link>. And make sure when you download Prism (see{" "}
        <Link href="/getting-started">Getting started</Link>) that you check off
        the languages you need.
      </div>
    ),
  }, {
    name: "...rest",
    required: false,
    type: "JSX.HTMLAttributes<HTMLPreElement>",
    default: null,
    notes: (
      <div>
        <div class="leading-relaxed">
          See the docs for{" "}
          <Link href="/rest-parameters">rest parameters</Link>. For{" "}
          <InlineCode>CodeBlock</InlineCode>, you could pass anything you
          normally would pass to <InlineCode>{"<pre>"}</InlineCode>{" "}
          because the return value{" "}
          <Link href="https://github.com/adamzerner/rfui/blob/master/islands/atoms/code-block.tsx">
            looks something like
          </Link>{" "}
          this:
        </div>
        <CodeBlock
          language="tsx"
          code={`<pre class={className} {...restWithoutClass}><code>{code}</code></pre>`}
        />
      </div>
    ),
  }];

  return (
    <ComponentDocsPage
      sectionTitles={sections.map((s) => s.title)}
    >
      <Header
        componentName="CodeBlock"
        sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/islands/atoms/code-block.tsx"
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
        {props.map((prop) => (
          <Prop prop={prop}>
            {prop.notes}
          </Prop>
        ))}
      </Props>
    </ComponentDocsPage>
  );
};
