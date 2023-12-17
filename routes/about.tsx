import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { H1 } from "@/components/atoms/h1.tsx";
import { H2 } from "@/components/atoms/h2.tsx";
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
          Similar{"  "}
          <Link href="https://react-bootstrap.github.io/">
            React Bootstrap
          </Link>{" "}
          and{" "}
          <Link href="https://chakra-ui.com/">Chakra UI</Link>, RFUI is a
          component library for React and Preact apps. It lets you do stuff like
          this:
        </p>
        <CodeBlock>
          {`import { Button } from "rfui";

const SubmitButton = () => {
  return (
    <Button variant="secondary" type="submit">
      Submit
    </Button>
  );
};
`}
        </CodeBlock>
      </Text>

      <H2>Philosophy</H2>
      <Text>
        <p>
          RFUI tries to abide by the following principles. See the{" "}
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
        <p class="text-sm italic w-96 max-w-full">
          Right now I don't have plans to get into templates or pages. If I ever
          do it'll probably be pretty far down the road.
        </p>
      </Text>
    </div>
  );
};
