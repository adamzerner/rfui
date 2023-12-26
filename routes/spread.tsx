import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { H1 } from "@/components/atoms/h1.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Text } from "@/components/atoms/text.tsx";

export default () => {
  return (
    <div class="max-w-prose text-lg">
      <H1>Spread</H1>
      <Text>
        <p>
          Most components do something like this:
        </p>
        <CodeBlock
          language="tsx"
          code={`export const MyComponent = ({ explicitProperty, ...rest }) => {
  const className = "something";
  const { class: restClass, ...restWithoutClass } = rest;

  className += \` \${getClassesFromExplicitProperty(explicitProperty)}\`
  
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
          code={`<MyComponent class="text-neutral-700">
  Example
</MyComponent>`}
        />
        <p>You'll get:</p>
        <CodeBlock
          language="tsx"
          code={`<div class="text-neutral-700">
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
          code={`<div title="example">
  Example
</div>`}
        />
        <p>
          This is because of the{" "}
          <InlineCode>{`{...restWithoutClass}`}</InlineCode> in{" "}
          <InlineCode>MyComponent</InlineCode>.
        </p>
      </Text>
    </div>
  );
};
