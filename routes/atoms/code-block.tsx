import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import {
  ComponentDocsPage,
  ExampleType,
} from "@/components/docs-site/component-docs-page/index.tsx";

export default () => {
  const overviewNotes = null;
  const examples: ExampleType[] = [{
    title: "Basic",
    demo: <CodeBlock code={`console.log("Hello world");`} />,
    code: (
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
    demo: (
      <CodeBlock
        language="ts"
        code={`function sayHello() {
  console.log("Hello world");
}`}
      />
    ),
    code: (
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
    demo: (
      <CodeBlock
        language="ts"
        code={`const firstName = 'John';
const lastName = 'Doe';
const fullName = firstName + " " + lastName;`}
      />
    ),
    code: (
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
  const propsTables = [{
    title: null,
    props: [{
      name: "code",
      required: true,
      type: "string",
      default: null,
      notes: (
        <div>
          Preserving whitespace and line breaks is a little tricky. In short,
          just try to follow the example <Link href="#whitespace">here</Link>
          {" "}
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
          <Link href="/getting-started">Getting started</Link>) that you check
          off the languages you need.
        </div>
      ),
    }, {
      name: "...rest",
      required: false,
      type: 'ComponentProps<"pre">',
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
    }],
  }];

  return (
    <ComponentDocsPage
      componentName="CodeBlock"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/atoms/code-block.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
