import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { H1 } from "@/components/atoms/h1.tsx";
import { H2 } from "@/components/atoms/h2.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { OL } from "@/components/atoms/ol.tsx";
import { Text } from "@/components/atoms/text.tsx";
import { UL } from "@/components/atoms/ul.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { Alert } from "@/islands/molecules/alert.tsx";

export default () => {
  return (
    <div class="max-w-prose text-lg">
      <H1>Choose a personality</H1>
      <Text>
        <p>
          When starting a new project, you should decide on what personality you
          want it to have. Check out these examples from{" "}
          <Link href="https://tailwindcss.com/#build-anything">
            Tailwind CSS
          </Link>:
        </p>
        <Stack class="gap-8 my-5 w-14 max-w-full">
          <img
            src="/images/simple.png"
            alt="Example of simple personality"
            class="block"
          />
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
          <img
            src="/images/brutalist.png"
            alt="Example of brutalist personality"
            class="block"
          />
        </Stack>
        <p>
          A financial services company might want to aim for an elegant
          personality, whereas an educational game for kids would probably
          prefer a playful one.
        </p>
        <p>
          There is a lot to say about how to convey a given personality, most of
          which is beyond the scope of this page. Here, I just want to give you
          the{" "}
          <Link href="https://betterexplained.com/articles/understanding-the-pareto-principle-the-8020-rule/">
            80/20
          </Link>{" "}
          version.
        </p>
      </Text>

      <H2 inPageLink="spectrum">Spectrum</H2>
      <Text>
        <p>
          It is helpful to think of personalities as falling along a spectrum of
          how "serious" they are.
        </p>
        <img
          class="my-5"
          src="/images/personality-spectrum.png"
          alt="Personality spectrum"
        />
        <p>
          From there, you can control how "serious" your app feels by tweaking
          the following three variables:
        </p>
        <OL>
          <li>Roundedness</li>
          <li>Font</li>
          <li>Color</li>
        </OL>
      </Text>

      <H2 inPageLink="roundedness">Roundedness</H2>
      <Text>
        <p>
          Various UI components have corners. Buttons, cards, inputs, badges,
          etc.
        </p>
        <UL>
          <li>
            If those corners are very rounded, the app will feel playful.
          </li>
          <li>
            If those corners are square, or perhaps only slightly rounded, the
            app will feel serious.
          </li>
        </UL>
        <p>
          With RFUI, the components will accept a{" "}
          <InlineCode>rounded</InlineCode> property. The possible values will be
          {" "}
          <InlineCode>"square"</InlineCode>, <InlineCode>"sm"</InlineCode>,{" "}
          <InlineCode>"lg"</InlineCode>, and sometimes{" "}
          <InlineCode>"full"</InlineCode>. Check out{" "}
          <Link href="/atoms/button#rounded">
            <InlineCode>Button</InlineCode>
          </Link>{" "}
          as an example.
        </p>
        <p>
          So basically, I'd recommend choosing a value and sticking with it
          throughout your app. For example:
        </p>
        <UL>
          <li>
            If you are going for a serious personality, choose{" "}
            <InlineCode>"square"</InlineCode> or <InlineCode>"sm"</InlineCode>.
          </li>
          <li>
            If you are going for a playful personality, choose{" "}
            <InlineCode>"lg"</InlineCode> or <InlineCode>"full"</InlineCode>.
          </li>
          <li>
            If you are going for a more neutral personality, choose{" "}
            <InlineCode>"sm"</InlineCode> or <InlineCode>"lg"</InlineCode>.
          </li>
        </UL>
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

      <H2 inPageLink="font">Font</H2>
      <Text>
        <p>
          For fonts, there are two broad categories: serifs and sans serifs.
        </p>
        <img
          src="https://ryanrhoten.com/wp-content/uploads/2016/01/serif-vs-sans-serif.png"
          alt="Serif vs sans-serif fonts"
          class="w-14 max-w-full"
        />
        <p>
          As you can see in the image above, serifs have those "little thingies"
          on the letters, whereas sans serifs do not.
        </p>
        <UL>
          <li>Serif fonts convey a serious personality.</li>
          <li>
            Sans serifs convey a more straightforward, neutral personality.
          </li>
          <li>
            Sans serifs that are particularly rounded and "bubble-y" convey a
            playful, light personality.
          </li>
        </UL>
        <p>
          For font recommendations, check out{" "}
          <Link href="https://practicaltypography.com/font-recommendations.html">
            Butterick’s Practical Typography
          </Link>.
        </p>
        <p>
          In fact, check out{" "}
          <Link href="https://practicaltypography.com/summary-of-key-rules.html">
            "Summary of key rules"
          </Link>{" "}
          from Butterick's Practical Typography as well and make sure that you
          follow them.
        </p>
        <p>
          RFUI was designed with the{" "}
          <Link href="https://fonts.google.com/specimen/Open+Sans">
            Open Sans font
          </Link>. All of the examples you see in the <Link href="/">docs</Link>
          {" "}
          use this font. To use this font, refer to{" "}
          <Link href="https://fonts.google.com/specimen/Open+Sans">
            their docs
          </Link>.
        </p>
      </Text>

      <H2 inPageLink="color">Color</H2>
      <Text>
        <p>
          In general, certain colors have certain "vibes".
        </p>
        <UL>
          <li>Blue is known to be pretty neutral.</li>
          <li>Pink is a good example of a color that is playful and fun.</li>
          <li>Brown feels serious.</li>
          <li>Gold feels elegant.</li>
        </UL>
        <p>
          So in choosing your color palette, you'll probably want to choose a
          primary color based on the "vibe" you want your app to have.
        </p>
        <Alert isDismissable={false}>
          To set your color palette you can edit the CSS variables in{" "}
          <InlineCode>rfui.css</InlineCode>. For example,{" "}
          <InlineCode>--color-primary-50</InlineCode>,{" "}
          <InlineCode>--color-primary-100</InlineCode>, etc. See{" "}
          <Link href="/getting-started#customize-css-variables">here</Link>{" "}
          for more information.
        </Alert>
        <p>
          But wait! You're not a professional designer. Or maybe you are, but
          you're more focused on UX and haven't really trained in visual design
          or color theory. So how do you create a whole color palette?
        </p>
        <p>
          You don't. Doing so takes skill, training, and experience. Instead,
          you can cheat by finding a color palette online that has been designed
          by a professional.
        </p>
        <UL>
          <li>
            <Link href="https://colorhunt.co/">Color Hunt</Link>{" "}
            is a pretty good resource.
          </li>
          <li>
            You can pay someone to design a custom color palette for you.
          </li>
          <li>
            You can also just use the colors that RFUI comes with. I got them
            from the book{" "}
            <Link href="https://www.refactoringui.com/">Refactoring UI</Link>.
          </li>
        </UL>
      </Text>
    </div>
  );
};
