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
      <H1>Choose a personality</H1>
      <Text>
        <p>
          One of the first things you typically want to do when starting a new
          project is to decide on the personality.
        </p>
        <p>
          This is a complicated topic. A thorough treatment is beyond the scope
          of this docs page. The goals of this docs page are to:
        </p>
        <OL>
          <li>
            Provide you with a very brief overview.
          </li>
          <li>
            Propose a few concrete decisions that you should make.
          </li>
        </OL>
        <p>
          It can be helpful to think of personalities as varying on a spectrum
          of how serious they are.
        </p>
        <img
          src="/personality-spectrum.png"
          alt="Spectrum of personality seriousness"
          class="my-8"
        />
        <p>
          Banking apps tend to go with a pretty serious personality. On the
          other hand, social media apps tend to be pretty lighthearted.
        </p>
        <p>
          How do you convey the intended level of seriousness? Here are some
          popular options.
        </p>
        <UL>
          <li>
            <strong>Roundedness</strong>. When components like buttons, cards
            and input fields are more round, it conveys a more playful and less
            serious tone.
          </li>
          <li>
            <strong>Font choice</strong>. Serifs are more serious. Rounded sans
            serifs are playful. Then there are less rounded, more neutral sans
            serifs that are in the middle.
          </li>
          <li>
            <strong>Color</strong>. Blue is known to be pretty neutral. Pink is
            fun and light. Gold is sophisticated and serious.
          </li>
        </UL>
        <p>So then, decide what you want to do for each of the three.</p>
        <UL>
          <li>
            To convey a serious personality, you'll probably choose square
            corners instead of rounded ones, a serif font, and a dark primary
            color.
          </li>
          <li>
            To convey a very lighthearted and fun personality, you might want to
            utilize large rounded corners, a fun primary color like pink or
            orange, and a sans serif font that feels playful.
          </li>
          <li>
            To convey a pretty "standard" or "normal" feeling personality, use
            slightly rounded corners, a popular sans serif font, and perhaps a
            dark blue as your primary color.
          </li>
        </UL>
      </Text>

      <H2 inPageLink="color">Color</H2>
      <Text>
        <p>
          Color is easy enough to set up at the beginning. Just{" "}
          <Link href="http://localhost:8000/getting-started#customize-css-variables">
            customize the CSS variables
          </Link>{" "}
          in <InlineCode>rfui.css</InlineCode>.
        </p>
      </Text>

      <H2 inPageLink="font">Font</H2>
      <Text>
        <p>
          For fonts, I'd recommend referring to the excellent book{" "}
          <Link href="https://practicaltypography.com/">
            Practical Typography
          </Link>.
        </p>
        <p>
          RFUI was designed with the{" "}
          <Link href="https://fonts.google.com/specimen/Open+Sans">
            Open Sans font
          </Link>. All of the examples you see in the <Link href="/">docs</Link>
          {" "}
          use this font.
        </p>
        <p>
          To use this font, refer to{" "}
          <Link href="https://fonts.google.com/specimen/Open+Sans">
            their docs
          </Link>.
        </p>
      </Text>

      <H2 inPageLink="roundedness">Roundedness</H2>
      <Text>
        <p>
          Roundedness is perhaps not quite as straightforward. Various RFUI
          components take <InlineCode>rounded</InlineCode>{" "}
          as a property with possible values of{" "}
          <InlineCode>"square"</InlineCode>, <InlineCode>"sm"</InlineCode>,{" "}
          <InlineCode>"lg"</InlineCode> and{" "}
          <InlineCode>"full"</InlineCode>. You'll probably want to pick one of
          these values and use it throughout your app.
        </p>
        <p>
          Here's one approach you can take to achieve this. Have some sort of
          global <InlineCode>constants.ts</InlineCode>{" "}
          file or something that exports{" "}
          <InlineCode>defaultRounded</InlineCode>. Then, when you use components
          with a <InlineCode>rounded</InlineCode>{" "}
          property, do something like this:
        </p>
        <CodeBlock
          language="tsx"
          code={`<Button rounded={defaultRounded}>
  Example
</Button>`}
        />
      </Text>
    </div>
  );
};
