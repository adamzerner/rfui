import { CodeBlock } from "@/islands/atoms/code-block.tsx";
import { H1 } from "@/islands/atoms/h1.tsx";
import { H2 } from "@/islands/atoms/h2.tsx";
import { InlineCode } from "@/islands/atoms/inline-code.tsx";
import { Link } from "@/islands/atoms/link.tsx";
import { Text } from "@/islands/atoms/text.tsx";
import { UL } from "@/islands/atoms/ul.tsx";

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
          This is a complicated topic that is beyond the scope of this docs
          page. However, to get you started, it can be helpful to think of
          personalities as varying on a spectrum of how serious they are.
        </p>
        <img
          src="/personality-spectrum.png"
          alt="Spectrum of personality seriousness"
          class="my-8"
        />
        <p>
          On one end of the spectrum are banking apps that are very serious. On
          the other end of the spectrum are social media apps that try to be
          less serious and more fun.
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
