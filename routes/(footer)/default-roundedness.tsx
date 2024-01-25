import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { H1 } from "@/components/atoms/h1.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Text } from "@/components/atoms/text.tsx";
import { Stack } from "@/components/helpers/stack.tsx";

export default () => {
  return (
    <div class="max-w-prose text-lg">
      <H1>Default roundedness</H1>
      <Text>
        <p>
          As described on the{" "}
          <Link href="/choose-a-personality#roundedness">
            "Choose a personality"
          </Link>{" "}
          page, it is usually good to decide on the personality you're going for
          at the beginning of your project. To convey a playful personality
          you'll want rounder corners and to convey a more serious personality
          you'll want less rounded corners.
        </p>
        <Stack class="gap-8 my-5 w-14 max-w-full">
          <img
            src="/images/playful.png"
            alt="Example of playful personality"
            class="block"
          />
          <img
            src="/images/elegant.png"
            alt="Example of elegant personality"
            class="block"
          />
        </Stack>
        <p>
          RFUI makes it easy to do this. In <InlineCode>rfui.css</InlineCode>
          {" "}
          there is a <InlineCode>--default-roundedness</InlineCode>{" "}
          CSS variable that you{" "}
          <Link href="/getting-started#customize-css-variables">can set</Link>.
        </p>
        <CodeBlock
          language="css"
          code={`--rounded-square: var(--spacing-0);
--rounded-sm: var(--spacing-1);
--rounded-lg: var(--spacing-2);
--rounded-full: 9999px;
--default-roundedness: var(--rounded-sm);
`}
        />
        <p>
          If you don't pass <InlineCode>rounded</InlineCode> to components like
          {" "}
          <InlineCode>Button</InlineCode> or <InlineCode>Card</InlineCode>, the
          {" "}
          <InlineCode>border-radius</InlineCode> will be set to the value of the
          {" "}
          <InlineCode>--default-roundedness</InlineCode> CSS variable.
        </p>
        <p>
          Let's look at an example. Suppose we have:
        </p>
        <CodeBlock
          language="tsx"
          code={"<Button>Example</Button>"}
        />
        <p>
          There is no <InlineCode>rounded</InlineCode> property being set, so
          {" "}
          <InlineCode>Button</InlineCode> will set it's{" "}
          <InlineCode>border-radius</InlineCode> according to{" "}
          <InlineCode>--default-roundedness</InlineCode>.
        </p>
        <p>On the other hand, suppose we have:</p>
        <CodeBlock
          language="tsx"
          code={'<Button rounded="sm">Example</Button>'}
        />
        <p>
          Now the <InlineCode>border-radius</InlineCode>{" "}
          will be set according to{" "}
          <InlineCode>rounded="sm"</InlineCode>, not according to{" "}
          <InlineCode>--default-roundedness</InlineCode>.
        </p>
      </Text>
    </div>
  );
};
