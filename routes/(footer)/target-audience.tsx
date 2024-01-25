import { Blockquote } from "@/components/atoms/blockquote.tsx";
import { H1 } from "@/components/atoms/h1.tsx";
import { H2 } from "@/components/atoms/h2.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Text } from "@/components/atoms/text.tsx";
import { UL } from "@/components/atoms/ul.tsx";

export default () => {
  return (
    <div class="max-w-prose text-lg">
      <H1>Target audience</H1>
      <Text>
        <p>
          The first thing I mentioned on the{" "}
          <Link href="/philosophy">philosophy page</Link>{" "}
          is that I aim for RFUI to be opinionated. If you try to please
          everyone you end up pleasing no one.
        </p>
        <p>
          Ok. So who is it that I am trying to please with RFUI?
        </p>
      </Text>

      <H2 inPageLink="straightforward-design">Straightforward design</H2>
      <Text>
        <p>
          RFUI's components all have a pretty straightforward look and feel to
          them. Nothing too fancy. Nothing too elegant. Nothing too quirky.
          Nothing too unique.
        </p>
        <p>
          By tweaking things like the color scheme and roundedness, you{" "}
          <Link href="/choose-a-personality">
            can push things
          </Link>{" "}
          perhaps moderately far away from the default straightforward style.
          For example, by going with pink as your primary color and making all
          of the corners highly rounded, you can achieve a decently playful look
          and feel. However, there are limits to how far this can take you.
        </p>
        <p>
          If these limits are too restrictive, than RFUI is not for you. You'll
          probably need to find a professional designer and build your own
          component library.
        </p>
      </Text>

      <H2 inPageLink="number-of-components">
        Number of components
      </H2>
      <Text>
        <p>
          I am a single person who is working on RFUI as a passion project. So
          then, I'll never end up having as many components as a library like
          Chakra or Material UI. I{" "}
          <Link href="https://github.com/users/adamzerner/projects/2">
            plan on
          </Link>{" "}
          slowly adding more over time, but nothing too crazy.
        </p>
        <p>
          If you value having a large selection of components to choose from,
          then RFUI isn't for you.
        </p>
        <p>
          Personally, I think that the components RFUI provides are perfectly
          fine for most apps. It probably covers 95% of your needs, and then for
          the remaining 5% you <Link href="/faq#more-customizing">can</Link>
          {" "}
          either build your own or use a different library.
        </p>
      </Text>

      <H2 inPageLink="customization">Customization</H2>
      <Text>
        <p>
          Other component libraries often provide lots and lots of options for
          their components, and lots and lots of ways to customize them. RFUI
          does not.
        </p>
        <p>
          As an example, consider Bootstrap's <InlineCode>Button</InlineCode>
          {" "}
          component. There are 18 different{" "}
          <Link href="https://getbootstrap.com/docs/5.3/components/buttons/#variants">
            variants
          </Link>{" "}
          (including the "outline" varieties) and dozens of{" "}
          <Link href="https://getbootstrap.com/docs/5.3/components/buttons/#css">
            CSS variables
          </Link>{" "}
          that you can use to customize the look and feel of the component.
        </p>
        <p>
          Now consider RFUI's{" "}
          <Link href="/atoms/button">
            <InlineCode>Button</InlineCode>
          </Link>{" "}
          component. You'll usually be choosing between three variants. They're
          called "primary", "secondary" and "tertiary", so it's pretty clear
          when you'd want to use each of them. There are corresponding "danger"
          variants, leading to six in total. And there's a pretty limited
          ability to customize and tweak them.
        </p>
        <p>
          I think this makes for a simpler developer experience. Less moving
          parts. Less choices to make. Less to understand. Less that can go
          wrong.
        </p>
      </Text>

      <H2 inPageLink="page-load-speed">Page load speed</H2>
      <Text>
        <p>
          With Prism, RFUI adds about 50kb off stuff that your users will need
          to download. Without it, about 25kb.
        </p>
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
          So then, unless users have a really slow connection, the impact is
          pretty negligible. Well, I get that there are some contexts where even
          the small decrease in speed has a non-negligible impact on user
          experience. I tend to think that these situations are more uncommon
          than others think they are, but I acknowledge they exist.
        </p>
        <p>
          But anyway, RFUI isn't targetting users who care about this level of
          performance optimization.
        </p>
      </Text>

      <H2 inPageLink="developer-experience">Developer experience</H2>
      <Text>
        <p>
          I <Link href="/philosophy#developer-experience">aim</Link>{" "}
          to provide a truly excellent developer experience to users of RFUI.
        </p>
        <p>
          I value things like simplicity, UseThePlatform, good docs,
          aggressively limiting dependencies, scaling down, and nudging users
          towards a pit of success. See the{" "}
          <Link href="/philosophy">philosophy page</Link> for more information.
        </p>
      </Text>

      <H2 inPageLink="non-expert-designers">Non-expert designers</H2>
      <Text>
        <p>
          RFUI aims to be a great choice for non-expert designers.
        </p>
        <p>
          Maybe you're a developer who knows very little about design. Maybe you
          know a bit. Maybe you know a good amount, but just aren't at the point
          where design professionals are. In practice, I think a ton of the
          people who design websites fall into one of these groups.
        </p>
        <p>
          Here's an example. If you're using Bootstrap and have 18 button
          variants to choose from, when you're a non-expert designer, I think it
          can be pretty easy to shoot yourself in the foot. It also might be
          tempting to start tweaking those CSS variables and saw your leg off.
          On the other hand, with RFUI, in choosing between "primary",
          "secondary", and "tertiary", your lower limbs are likely to remain
          intact.
        </p>
        <p>
          Think about how recipes for food can sometimes be forgiving, and
          sometimes be very finicky. For example, sauteeing a few chicken
          breasts and making a pan sauce is very finicky. You really have to hit
          the right internal temperature, otherwise your chicken will be dry (or
          unsafe). Which you kinda need a meat thermometer for, but those are
          tough to use for thin cuts of meat. And it's difficult to time the
          cooking of the chicken such that the brown bits on the pan don't burn
          and screw up your pan sauce.
        </p>
        <p>
          On the other hand, making a rice bowl with some ground beef is very
          forgiving. Rice cookers make it easy to cook the rice. And for ground
          beef, it's hard to over or undercook it. Just throw it in a pot or
          pan, toss in a bunch of spices, and you'll be good.
        </p>
        <p>
          There is a time and place for eating a good sauteed chicken breast.
          However, there is also a time and place for focusing on more forgiving
          recipes. If you are a home cook on a Tuesday night, you'll probably
          want the latter.
        </p>
        <p>
          Similarly, if you are a non-expert designer who is building an app
          where aesthetics aren't your <em>primary</em>{" "}
          selling point, I would argue that a component library like RFUI that
          has sensible defaults and few ways to shoot yourself in the foot is
          the right choice.
        </p>
      </Text>
    </div>
  );
};
