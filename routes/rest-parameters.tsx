import { CodeBlock } from "@/islands/atoms/code-block.tsx";
import { H1 } from "@/islands/atoms/h1.tsx";
import { InlineCode } from "@/islands/atoms/inline-code.tsx";
import { Link } from "@/islands/atoms/link.tsx";
import { Text } from "@/islands/atoms/text.tsx";

export default () => {
  return (
    <div class="max-w-prose text-lg">
      <H1>Rest parameters</H1>
      <Text>
        <p>
          Most RFUI components do something like this:
        </p>
        <CodeBlock
          language="tsx"
          code={`export const MyComponent = ({ ...rest }) => {
  const className = "something";
  const { class: restClass, ...restWithoutClass } = rest;
  
  if (restClass) {
    className += \` \${restClass}\`;
  }
  
  return (
    <div class={className} {...restWithoutClass}>
      {children}
    </div>
  );
}`}
        />
        <p>So then, if you do:</p>
        <CodeBlock
          language="tsx"
          code={`<MyComponent>
  Example
</MyComponent>`}
        />
        <p>You'll get:</p>
        <CodeBlock
          language="tsx"
          code={`<div class="something">
  Example
</div>`}
        />
        <p>But if you do:</p>
        <CodeBlock
          language="tsx"
          code={`<MyComponent class="text-neutral-700">
  Example
</MyComponent>`}
        />
        <p>You'll get:</p>
        <CodeBlock
          language="tsx"
          code={`<div class="something text-neutral-700">
  Example
</div>`}
        />
        <p>
          This is because of the following block in{" "}
          <InlineCode>MyComponent</InlineCode>:
        </p>
        <CodeBlock
          language="tsx"
          code={`if (restClass) {
  className += \` \${restClass}\`;
}
`}
        />
        <p>Relatedly, if you do:</p>
        <CodeBlock
          language="tsx"
          code={`<MyComponent title="example">
  Example
</MyComponent>`}
        />
        <p>You'll get:</p>
        <CodeBlock
          language="tsx"
          code={`<div class="something" title="example">
  Example
</div>`}
        />
        <p>
          This is because of the{" "}
          <InlineCode>{`{...restWithoutClass}`}</InlineCode> in{" "}
          <InlineCode>MyComponent</InlineCode>. See MDN's docs for{" "}
          <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters">
            rest parameters
          </Link>{" "}
          if you are unfamiliar.
        </p>
      </Text>
    </div>
  );
};
