import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { H1 } from "@/components/atoms/h1.tsx";
import { H2 } from "@/components/atoms/h2.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { OL } from "@/components/atoms/ol.tsx";
import { Text } from "@/components/atoms/text.tsx";
import { UL } from "@/components/atoms/ul.tsx";

export default () => {
  return (
    <div class="max-w-prose text-lg">
      <H1>About</H1>
      <Text>
        <p>
          Similar to{"  "}
          <Link href="https://react-bootstrap.github.io/">
            React Bootstrap
          </Link>{" "}
          and{" "}
          <Link href="https://chakra-ui.com/">Chakra UI</Link>, RFUI is a
          component library for React and Preact apps. It lets you do stuff like
          this:
        </p>

        <CodeBlock
          language="tsx"
          code={`import { Button } from "rfui";

const SubmitButton = () => {
  return (
    <Button variant="secondary" type="submit">
      Submit
    </Button>
  );
};
`}
        />
      </Text>

      <H2>Philosophy</H2>
      <Text>
        <p>
          In short, the idea is to be pretty minimal and to place a very strong
          focus on developer experience.
        </p>
        <p>
          To elaborate a bit, RFUI tries to abide by the following principles.
          See the{" "}
          <Link href="/philosophy">
            philosophy page
          </Link>{" "}
          for more information.
        </p>
        <OL>
          <li>Opinionated</li>
          <li>Scale down</li>
          <li>Pit of success</li>
          <li>Pre-built components</li>
          <li>Pretty</li>
          <li>Developer experience</li>
          <li>Use the platform</li>
          <li>Avoid dependencies</li>
        </OL>
      </Text>

      <H2>Target Audience</H2>
      <Text>
        <p>
          As mentioned on the{" "}
          <Link href="/philosophy">philosophy page</Link>, I intended to be a
          bit opinionated with RFUI. If you try to please everyone, you end up
          pleasing no one.
        </p>
        <p>
          So then, who do I intend to please? In short: people building apps who
          are aiming for a "straightforward" design. RFUI's components are built
          with that audience in mind.
        </p>
        <p>
          If you are aiming for a design that is moreso "innovative", "unique"
          or "funky", RFUI probably isn't for you.
        </p>
        <p>
          Similarly, if you want to extend and customize these components a lot,
          RFUI also probably isn't for you. But if you only anticipate a
          small-to-medium need for customization, RFUI should be totally fine.
          Most apps probably fall under the latter umbrella.
        </p>
      </Text>

      <H2>Atomic Design</H2>
      <Text>
        <p>
          RFUI follows the{" "}
          <Link href="https://atomicdesign.bradfrost.com/chapter-2/">
            Atomic Design Methodlogy
          </Link>{" "}
          by breaking components into "atoms", "molecules" and "organisms".
        </p>
        <img
          src="https://atomicdesign.bradfrost.com/images/content/atomic-design-process.png"
          alt="Atomic Design visualization"
          class="max-w-full w-96"
        />
        <p class="text-sm italic w-96 max-w-full leading-relaxed">
          Right now I don't have plans to get into templates or pages. If I ever
          do it'll probably be pretty far down the road.
        </p>
      </Text>

      <H2>UX</H2>
      <Text>
        <p>
          Not everyone is a UX expert. A lot of times design is done by a
          product manager or a developer. And even when something is designed by
          a UX designer, mistakes can still be made.
        </p>
        <p>
          RFUI tries to nudge － and sometimes <em>shove</em>{" "}
          － you in the direction of avoiding UX mistakes. Some examples:
        </p>
        <UL>
          <li>
            The <InlineCode>Text</InlineCode>{" "}
            component uses the Tailwind class of{" "}
            <InlineCode>max-w-prose</InlineCode>, which ensures a{" "}
            <Link href="https://practicaltypography.com/line-length.html">
              comfortable line length
            </Link>{" "}
            is used.
          </li>
          <li>
            It is{" "}
            <Link href="https://www.nngroup.com/articles/new-browser-windows-and-tabs/">
              generally inadvisible
            </Link>{" "}
            to have links open in a new tab. So then, RFUI's{" "}
            <InlineCode>Link</InlineCode>{" "}
            component nudges you away from doing so by prefixing the attribute
            with an underscore:{" "}
            <InlineCode>_newTab</InlineCode>. It also elaborates and provides a
            reference in the JSDoc documentation.
          </li>
          <li>
            It is{" "}
            <Link href="https://ux.stackexchange.com/q/56023/39046">
              recommended
            </Link>{" "}
            to place icons to the left of button content rather than the right.
            To nudge you in this direction, the <InlineCode>Button</InlineCode>
            {" "}
            component accepts parameters of <InlineCode>icon</InlineCode> and
            {" "}
            <InlineCode>_rightIcon</InlineCode>. It also explains the
            recommendation and links to a source via JSDoc.
          </li>
        </UL>
      </Text>

      <H2>Accessibility</H2>
      <Text>
        <p>
          RFUI aims to meet accessibility standards and follow best practices.
        </p>
        <UL>
          <li>All components meet WCAG 2.1 AA standards.</li>
          <li>
            The popular{" "}
            <Link href="https://www.deque.com/axe/devtools/">axe DevTools</Link>
            {" "}
            browser plugin shows no issues for any components.
          </li>
          <li>
            All components receive a{" "}
            <Link href="https://developer.chrome.com/docs/lighthouse/overview/">
              Google Lighthouse
            </Link>{" "}
            score of 100 for accessibility.
          </li>
        </UL>
      </Text>
    </div>
  );
};
