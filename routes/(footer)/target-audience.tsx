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

      <H2 inPageLink="page-load-speed">Accessibility</H2>
      <Text>
        <p>RFUI does a pretty good job with accessibility.</p>
        <UL>
          <li>
            I use the{" "}
            <Link href="https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter">
              axe Accessibility Linter
            </Link>{" "}
            VSCode plugin when developing which will alert me if I violate
            various accessibility-related best practices. I address any of these
            warnings that pop up.
          </li>
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
        <p>
          That said, I'm sure that I could take things further. Just because
          there are no <em>violations</em> doesn't mean that the{" "}
          <em>user experience</em> for those with disabilities is optimal.
        </p>
        <p>
          I'm not aiming to optimize it though. So then, if a notable percentage
          of your users are disabled and optimizing their experience is
          something you're seeking to do, RFUI might not be the right choice.
        </p>
      </Text>

      <H2 inPageLink="responsiveness">Responsiveness</H2>
      <Text>
        <p>
          RFUI aims for all of it's components to look good on common screen
          sizes.
        </p>
        <p>
          Note that this doesn't mean that they're intended to look good on
          every possible viewport width. That said, my sense is that they do.
          It's just not a design goal of RFUI. Well, it's something that I try
          to do if it's reasonably easy, but not if it's difficult.
        </p>
      </Text>

      <H2 inPageLink="first-second-and-third-users">
        The first, second and third users
      </H2>
      <Text>
        <p>
          There is a good essay by Bruce Tognazzini called{" "}
          <Link href="https://asktog.com/atc/the-third-user/">
            The Third User
          </Link>. Here is an overview of it:
        </p>
        <UL>
          <li>
            The First User is someone who is using a product for the first time.
          </li>
          <li>
            The Second User is someone who has some experience with using a
            product and generally knows their way around.
          </li>
          <li>
            Providing a good user experience for a First User doesn't
            necessarily involve the same things as doing so for a Second User.
            First Users are new and often confused, so you may need to dumb
            things down a lot. On the other hand, Second Users are already
            familiar with a lot of functionality, and so you probably would
            prefer to not dumb things down for them.
          </li>
          <li>
            The Third User is the user who is{" "}
            <em>shopping</em>. Someone who hasn't even bought the product yet.
            (This should probably be called the zeroith user.)
          </li>
          <li>
            Bruce argues that Apple has unwisely been focusing on the Third User
            at the expense of First and Second Users.
          </li>
        </UL>
        <p>
          I think it's worth reflecting on this and commenting on what my
          priorities are with RFUI.
        </p>
        <p>
          This may seem like a cop out, but I think the large majority of the
          time there isn't a direct tradeoff. Ie. I could come up with ways to
          please all three types of users.
        </p>
        <p>
          That said, there are times where there are tradeoffs at play and you
          can't please everyone. In those situations, I think my priorities are
          something like:
        </p>
        <CodeBlock code="Second User >> First User >>>> Third User" />
        <p>
          Most of the time spent using RFUI will be in the Second User phase, so
          it feels like that's who it makes sense to target. Especially since I
          think the onboarding experience is pretty good. As for Third Users, I
          dunno, I guess I find it more satisfying to focus on building a great
          product.
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

      <H2 inPageLink="simplicity">Simplicity</H2>
      <Text>
        <p>
          Along the lines of the "Developer experience" section above and a few
          other sections, something that I really value a lot is{" "}
          <em>simplicity</em>.
        </p>
        <p>
          Maybe that's not the best word. I'm not sure what the right word is.
          Minimalism? Low complexity? I dunno.
        </p>
        <p>
          But hopefully you get what I'm trying to say. I value saying no. I
          value having less "stuff". Less moving parts. I value things that
          don't require a big brain to understand.
        </p>
        <p>
          Anyway, if you are really big into simplicity too, you might like
          RFUI.
        </p>
      </Text>

      <H2 inPageLink="usability">Usability</H2>
      <Text>
        <p>
          I also take usability very seriously. I spend a lot of time on
          <Link href="https://www.nngroup.com/">NNGroup</Link>,{" "}
          <Link href="https://ux.stackexchange.com/">
            UX Stack Exchange
          </Link>, and related sites.
        </p>
        <p>
          I think I do a very good job at offering components that do a great
          job with usability. If usability is something that you prioritize,
          RFUI might be a good choice for you.
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
