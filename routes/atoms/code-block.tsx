import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { ComponentDocsPage } from "@/islands/demo/component-docs-page.tsx";

export default () => {
  const sections = [{
    title: "Basic",
    example: () => <CodeBlock code={`console.log("Hello world");`} />,
    exampleCode: () => (
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
    example: () => (
      <CodeBlock
        language="ts"
        code={`function sayHello() {
  console.log("Hello world");
}`}
      />
    ),
    exampleCode: () => (
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
        <Link href="/getting-started">Getting started</Link>) that you check off
        the languages you need.
      </div>
    ),
    example: () => (
      <CodeBlock
        language="ts"
        code={`const firstName = 'John';
const lastName = 'Doe';
const fullName = firstName + " " + lastName;`}
      />
    ),
    exampleCode: () => (
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
          <Link href="https://github.com/adamzerner/rfui/blob/master/components/atoms/code-block.tsx">
            looks like
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
      componentName="CodeBlock"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/atoms/code-block.tsx"
      sections={sections}
      props={props}
    />
  );
};
