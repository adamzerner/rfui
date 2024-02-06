import { Blockquote } from "@/components/atoms/blockquote.tsx";
import { Button } from "@/components/atoms/button.tsx";
import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { H1 } from "@/components/atoms/h1.tsx";
import { H2 } from "@/components/atoms/h2.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { OL } from "@/components/atoms/ol.tsx";
import { Text } from "@/components/atoms/text.tsx";
import { Card } from "@/components/molecules/card.tsx";

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
        <p>And get a nice looking button like this:</p>
        <Card>
          <Button variant="secondary">Submit</Button>
        </Card>
      </Text>

      <H2 inPageLink="philosophy">Philosophy</H2>
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

      <H2 inPageLink="target-audience">Target audience</H2>
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
        <p>
          See the <Link href="/target-audience">"Target audience"</Link>{" "}
          page for more information.
        </p>
      </Text>

      <H2 inPageLink="atomic-design">Atomic Design</H2>
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

      <H2 inPageLink="the-documentation-system">The Documentation System</H2>
      <Text>
        <p>
          The docs here aim to follow{" "}
          <Link href="https://documentation.divio.com/">
            The Documentation System
          </Link>.
        </p>
        <Blockquote>
          <p>
            There is a secret that needs to be understood in order to write good
            software documentation: there isn’t one thing called documentation,
            there are four.
          </p>
          <p>
            They are: tutorials, how-to guides, technical reference and
            explanation. They represent four different purposes or functions,
            and require four different approaches to their creation.
            Understanding the implications of this will help improve most
            documentation - often immensely.
          </p>
        </Blockquote>
        <p class="mt-5">
          I'd really recommend reading through{" "}
          <Link href="https://documentation.divio.com/">their website</Link>,
          but in the meantime, this diagram kinda sums it up:
        </p>
        <img
          src="https://documentation.divio.com/_images/overview.png"
          alt="Diagram of The Documentation System"
        />
      </Text>

      <H2 inPageLink="refactoring-ui">Refactoring UI</H2>
      <Text>
        <p>
          Last but not least, I want to give a shout out to one of the best
          books I've ever read and the inspiration for this project:{" "}
          <Link href="https://www.refactoringui.com/">
            Refactoring UI
          </Link>.
        </p>
        <p>
          I've been a web developer for the past 10 years. A web developer with
          a strong interest in design (and startups). I've always wanted to be
          － not necessarily an expert － but I've always wanted to be{" "}
          <em>capable</em>{" "}
          as a designer. I've always wanted to be able to build things that look
          pretty good. I'm ok with them not winning any design awards, but I do
          want them to delight users.
        </p>
        <p>
          I definitely don't want them to look like some Bootstrap template.
          That just screams "I'm an amateur who doesn't really know what they're
          doing and you shouldn't take my project seriously". But unfortunately,
          I feel like that's where I've been my whole career. Check out{" "}
          <Link href="https://premiumpokertools.com/">
            Premium Poker Tools
          </Link>{" "}
          and judge for yourself.
        </p>
        <p>
          And it's certainly not for a lack of trying. I've read so many books.
          {" "}
          <Link href="https://www.goodreads.com/book/show/840.The_Design_of_Everyday_Things">
            The Design of Everyday Things
          </Link>.{" "}
          <Link href="https://www.goodreads.com/book/show/3296910-web-form-design">
            Web Form Design: Filling in the Blanks
          </Link>.{" "}
          <Link href="https://www.goodreads.com/book/show/17744.The_Visual_Display_of_Quantitative_Information_2nd_Ed_">
            The Visual Display of Quantitative Information
          </Link>.{" "}
          <Link href="https://www.goodreads.com/book/show/18197267-don-t-make-me-think-revisited">
            Don't Make Me Think
          </Link>.{" "}
          <Link href="https://www.goodreads.com/book/show/6658783-rocket-surgery-made-easy">
            Rocket Surgery Made Easy
          </Link>.{" "}
          <Link href="https://practicaltypography.com/">
            Practical Typography
          </Link>. But I've spent much more of my time reading random block
          posts from Hacker News. Also tons of browsing{" "}
          <Link href="https://www.nngroup.com/">NNGroup</Link> and{" "}
          <Link href="https://ux.stackexchange.com/">UX Stack Exchange</Link>.
        </p>
        <p>
          Anyway. I promise no one is paying me to say this, but after reading
          Refactoring UI, I feel like it may have gotten me over the hump. So
          thank you to the authors. And to the people reading this, a) go read
          Refactoring UI and b) I figure maybe it's helpful context to explain
          that a lot of what I learned in that book has inspired this component
          library.
        </p>
      </Text>
    </div>
  );
};
