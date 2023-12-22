import { Blockquote } from "@/components/atoms/blockquote.tsx";
import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { ComponentDocsPage } from "@/islands/demo/component-docs-page.tsx";

export default () => {
  const sections = [{
    title: "Basic",
    example: () => (
      <Blockquote>All models are wrong. Some are useful.</Blockquote>
    ),
    exampleCode: () => (
      <CodeBlock
        class="mt-4"
        language="tsx"
        code={`<Blockquote>All models are wrong. Some are useful.</Blockquote>`}
      />
    ),
  }, {
    title: "Multi-paragraph quote",
    example: () => (
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
    exampleCode: () => (
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
    example: () => (
      <Blockquote cite="https://example.com">
        <p>All models are wrong. Some are useful.</p>
        <footer>
          —Someone, <cite>Somewhere</cite>
        </footer>
      </Blockquote>
    ),
    exampleCode: () => (
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
  const props = [{
    name: "children",
    required: true,
    type: "ComponentChild",
    default: null,
    notes: null,
  }];

  return (
    <ComponentDocsPage
      componentName="Blockquote"
      sourceCodeUrl="https://github.com/adamzerner/rfui/blob/master/components/atoms/blockquote.tsx"
      sections={sections}
      props={props}
    />
  );
};
