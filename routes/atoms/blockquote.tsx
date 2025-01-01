import { Blockquote } from "@/components/atoms/blockquote.tsx";
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
    demo: <Blockquote>All models are wrong. Some are useful.</Blockquote>,
    code: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Blockquote>All models are wrong. Some are useful.</Blockquote>`}
      />
    ),
  }, {
    title: "Multi-paragraph quote",
    demo: (
      <Blockquote class="gap-3">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue ut
          lectus arcu bibendum at varius vel. Volutpat sed cras ornare arcu dui
          vivamus arcu felis.
        </p>
        <p>
          Non consectetur a erat nam at lectus urna. Tristique sollicitudin nibh
          sit amet commodo nulla. Scelerisque eu ultrices vitae auctor. Ipsum
          dolor sit amet consectetur adipiscing elit pellentesque habitant.
          Augue lacus viverra vitae congue eu consequat ac felis.
        </p>
        <p>
          Malesuada fames ac turpis egestas integer eget aliquet nibh praesent.
          A lacus vestibulum sed arcu non.
        </p>
        <p>
          Volutpat odio facilisis mauris sit amet massa. Sit amet nisl suscipit
          adipiscing bibendum leo.
        </p>
        <p>
          Risus nec feugiat in fermentum. Nisi vitae suscipit tellus mauris a
          diam maecenas. Morbi tincidunt augue interdum velit euismod in
          pellentesque massa. Volutpat ac tincidunt vitae semper. Sit amet nisl
          purus in mollis.
        </p>
      </Blockquote>
    ),
    code: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Blockquote class="gap-3">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue ut
    lectus arcu bibendum at varius vel. Volutpat sed cras ornare arcu dui
    vivamus arcu felis.
  </p>
  <p>
    Non consectetur a erat nam at lectus urna. Tristique sollicitudin nibh
    sit amet commodo nulla. Scelerisque eu ultrices vitae auctor. Ipsum
    dolor sit amet consectetur adipiscing elit pellentesque habitant.
    Augue lacus viverra vitae congue eu consequat ac felis.
  </p>
  <p>
    Malesuada fames ac turpis egestas integer eget aliquet nibh praesent.
    A lacus vestibulum sed arcu non.
  </p>
  <p>
    Volutpat odio facilisis mauris sit amet massa. Sit amet nisl suscipit
    adipiscing bibendum leo.
  </p>
  <p>
    Risus nec feugiat in fermentum. Nisi vitae suscipit tellus mauris a
    diam maecenas. Morbi tincidunt augue interdum velit euismod in
    pellentesque massa. Volutpat ac tincidunt vitae semper. Sit amet nisl
    purus in mollis.
  </p>
</Blockquote>
`}
      />
    ),
  }, {
    title: "With citation",
    demo: (
      <Blockquote cite="https://example.com">
        <p>All models are wrong. Some are useful.</p>
        <footer>
          —Someone, <cite>Somewhere</cite>
        </footer>
      </Blockquote>
    ),
    code: (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Blockquote cite="https://example.com">
  <p>All models are wrong. Some are useful.</p>
  <footer>
    —Someone, <cite>Somewhere</cite>
  </footer>
</Blockquote>`}
      />
    ),
  }];
  const propsTables = [{
    title: null,
    props: [{
      name: "children",
      required: true,
      type: "ComponentChild",
      default: null,
      notes: null,
    }, {
      name: "...rest",
      required: false,
      type: `ComponentProps<"blockquote">`,
      default: null,
      notes: (
        <div>
          <div class="leading-relaxed">
            See the docs for{" "}
            <Link href="/rest-parameters">rest parameters</Link>. For{" "}
            <InlineCode>Blockquote</InlineCode>, you could pass anything you
            normally would pass to <InlineCode>{"<blockquote>"}</InlineCode>
            {" "}
            because the container{" "}
            <Link href="https://github.com/adamzerner/rfui/blob/master/islands/atoms/blockquote.tsx">
              looks something like
            </Link>{" "}
            this:
          </div>
          <CodeBlock
            language="tsx"
            code={`<blockquote class={className} {...restWithoutClass}>
  {children}
</blockquote>`}
          />
        </div>
      ),
    }],
  }];

  return (
    <ComponentDocsPage
      componentName="Blockquote"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/atoms/blockquote.tsx"
      overviewNotes={overviewNotes}
      examples={examples}
      propsTables={propsTables}
    />
  );
};
