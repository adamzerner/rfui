import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { H1 } from "@/components/atoms/h1.tsx";
import { H2 } from "@/components/atoms/h2.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Text } from "@/components/atoms/text.tsx";

export default () => {
  return (
    <div class="max-w-prose text-lg">
      <H1>FAQ</H1>

      <H2 inPageLink="npm">
        Where is RFUI on NPM?
      </H2>
      <Text>
        <p>
          I don't have it on NPM yet, sorry. I do have plans to add it though.
          See{" "}
          <Link href="https://github.com/adamzerner/rfui/issues/1">
            this GitHub issue
          </Link>.
        </p>
      </Text>

      <H2 inPageLink="react">
        How do I use RFUI with React instead of Preact?
      </H2>
      <Text>
        <p>
          Right now you can't. Sorry.
        </p>
        <p>
          I do have plans to support React though. See{" "}
          <Link href="https://github.com/adamzerner/rfui/issues/9">
            this GitHub issue
          </Link>.
        </p>
      </Text>

      <H2 inPageLink="tailwind">
        What's with this <InlineCode>class="gap-5"</InlineCode> stuff?
      </H2>
      <Text>
        <p>
          It comes from{" "}
          <Link href="https://tailwindcss.com/">TailwindCSS</Link>. For{" "}
          <InlineCode>
            class="gap-5"
          </InlineCode>{" "}
          in particular, it translates to the following CSS:
          <CodeBlock language="css" code={`gap: 1.25rem;`} />
        </p>
      </Text>

      <H2 inPageLink="why">
        Why would I use RFUI when I can instead use something like Chakra?
      </H2>
      <Text>
        <p>
          Check out the <Link href="/about">about page</Link> and the{" "}
          <Link href="/philosophy">philosophy page</Link>. See if they speak to
          you.
        </p>
      </Text>

      <H2 inPageLink="atomic-design">
        What's with "atoms" and "molecules"?
      </H2>
      <Text>
        <p>
          I am following the{" "}
          <Link href="https://atomicdesign.bradfrost.com/chapter-2/">
            Atomic Design Methodology
          </Link>.
        </p>
      </Text>

      <H2 inPageLink="customize">
        Can I customize things like the color or spacing palattes?
      </H2>
      <Text>
        <p>
          Not yet, but I{" "}
          <Link href="https://github.com/adamzerner/rfui/issues/111">
            plan to
          </Link>{" "}
          support that in the future.
        </p>
      </Text>

      <H2 inPageLink="text-stacking">
        Why are the links inside my <InlineCode>Text</InlineCode>{" "}
        component appearing on their own line?
      </H2>
      <Text>
        <p>
          Because <InlineCode>Text</InlineCode> has a container of{" "}
          <InlineCode>Stack</InlineCode>. See{" "}
          <Link href="/atoms/text#one-paragraph-with-element">here</Link>.
        </p>
      </Text>
    </div>
  );
};
