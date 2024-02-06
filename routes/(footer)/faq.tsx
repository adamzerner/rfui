import { Blockquote } from "@/components/atoms/blockquote.tsx";
import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { H1 } from "@/components/atoms/h1.tsx";
import { H2 } from "@/components/atoms/h2.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Text } from "@/components/atoms/text.tsx";
import { UL } from "@/components/atoms/ul.tsx";

export default () => {
  return (
    <div class="max-w-prose text-lg">
      <H1>FAQ</H1>

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

      <H2 inPageLink="rfui-package">
        Are you sure I should be importing from <InlineCode>"rfui"</InlineCode>?
      </H2>
      <Text>
        <p>
          No. If you are using the React version of RFUI that is hosted on NPM,
          you should be importing from{" "}
          <InlineCode>"@adamzerner/rfui-react"</InlineCode> instead. See{" "}
          <Link href="/getting-started#set-up-package">
            step one of "Getting started"
          </Link>.
        </p>
      </Text>

      <H2 inPageLink="customize">
        Can I customize things like the color or spacing palattes?
      </H2>
      <Text>
        <p>
          Yes. See the <Link href="/css-variables">"CSS variables"</Link> page.
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
          the RFUI stylesheet will provide you with all of the styles you need.
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
          <Link href="/target-audience">target audience</Link>{" "}
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

      <H2>
        How many more bytes will RFUI require me to send to the browser? Will
        this slow things down a lot?
      </H2>
      <Text>
        <p>Here's an approximation:</p>
        <UL>
          <li>
            <InlineCode>rfui.css</InlineCode>: 24kb
          </li>
          <li>
            <InlineCode>prism.css</InlineCode>: 3kb
          </li>
          <li>
            <InlineCode>prism.js</InlineCode>: 25kb
          </li>
        </UL>
        <p>
          And how much will this slow things down? According to GitHub Copilot:
        </p>
        <Blockquote>
          Here's a rough estimation based on network speed:
          <UL>
            <li>
              On a 3G network (1.6 Mbps), it would take approximately 0.25
              seconds to download an extra 50KB.
            </li>
            <li>
              On a 4G network (20 Mbps), it would take approximately 0.02
              seconds to download an extra 50KB.
            </li>
            <li>
              On a broadband connection (100 Mbps), it would take approximately
              0.004 seconds to download an extra 50KB.
            </li>
          </UL>
        </Blockquote>
        <p>
          So unless your users have a really slow connection, the performance
          impact is pretty negligible.
        </p>
        <p>
          Note that Prism is{" "}
          <Link href="/getting-started#set-up-syntax-highlighting">
            optional
          </Link>. It's only needed if you need the syntax highlighting and you
          can cut the impact in half if you avoid using it.
        </p>
      </Text>
    </div>
  );
};
