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
          I don't have it on NPM yet, sorry.
        </p>
        <p>
          I do have plans to add it though. See{" "}
          <Link href="https://github.com/adamzerner/rfui/issues/1">
            this GitHub issue
          </Link>.
        </p>
      </Text>

      <H2 inPageLink="deno">
        Well then how do I use RFUI in a non-Deno project?
      </H2>
      <Text>
        <p>
          Right now you can't. Sorry. But once I{" "}
          <Link href="https://github.com/adamzerner/rfui/issues/1">
            figure out
          </Link>{" "}
          how to publish to NPM you will be able to.
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

      <H2 inPageLink="fresh">
        So basically, my options are to use RFUI for Fresh projects?
      </H2>
      <Text>
        <p>
          Sorta. There are{" "}
          <Link href="https://deno.com/blog/web-frameworks-on-deno">
            other options
          </Link>{" "}
          for building Preact + Deno apps, but I think that{" "}
          <Link href="https://fresh.deno.dev/">Fresh</Link>{" "}
          is the most mature and popular one.
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
          Yes. In <InlineCode>rfui.css</InlineCode>{" "}
          there are a bunch of CSS variables that you can set. See the{" "}
          <Link href="/getting-started#customize-css-variables">
            Getting Started page
          </Link>{" "}
          for more information.
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

      <H2 inPageLink="tailwind-css">
        If I use RFUI, do I also have to use Tailwind CSS?
      </H2>
      <Text>
        <p>
          No.{" "}
          <Link href="/getting-started#include-rfui-css-file">Including</Link>
          {" "}
          the <InlineCode>rfui.css</InlineCode>{" "}
          file will provide you with all of the styles you need.
        </p>
      </Text>

      <H2 inPageLink="more-customizing">
        You're not providing me with the flexibility I need to customize one of
        your components the way I'd like it. What should I do?
      </H2>
      <Text>
        <p>
          First, some context: the limited flexibility is likely a conscious
          decision on my part as opposed to an oversight. Less flexibility
          usually means less complexity. With my{" "}
          <Link href="/about#target-audience">target audience</Link>{" "}
          in mind, I try to weigh these (as well as other) considerations
          against each other and make a decision on how much flexibility to
          provide.
        </p>
        <p>
          If RFUI isn't giving you the flexibility you need for a given
          component, I would recommend building your own version of the
          component using RFUI's code as a starting point.
        </p>
      </Text>
    </div>
  );
};
