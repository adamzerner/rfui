import { Blockquote } from "@/components/atoms/blockquote.tsx";
import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { H1 } from "@/components/atoms/h1.tsx";
import { H2 } from "@/components/atoms/h2.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { OL } from "@/components/atoms/ol.tsx";
import { Text } from "@/components/atoms/text.tsx";

export default () => {
  return (
    <div>
      <H1>Philosophy</H1>
      <Text>
        <p>
          Before working on RFUI, I spent a bunch of time looking into existing
          component libraries and design systems.{" "}
          <Link href="https://getbootstrap.com/">Bootstrap</Link>,{" "}
          <Link href="https://chakra-ui.com/">Chakra</Link>,{" "}
          <Link href="https://mui.com/material-ui/">Material UI</Link>,{" "}
          <Link href="https://ant.design">
            Ant Design
          </Link>,{" "}
          <Link href="https://tailwindui.com/">Tailwind UI</Link>. Other stuff
          from blog posts like{" "}
          <Link href="https://retool.com/blog/react-component-libraries">
            this
          </Link>.
        </p>
        <p>
          For various reasons, none of them really felt satisfying to me.
        </p>
        <p>
          I also looked into a bunch of paid templates and libraries. I would
          have been happy to spend thousands of dollars on something, but none
          of the paid options really spoke to me either.
        </p>
        <p>So then: I decided to build my own.</p>
        <p>
          I suppose this probably isn't surprising. I suppose that most library
          authors have a similar story to tell: they wanted a certain tool,
          weren't happy with the existing options, and so decided to build their
          own.
        </p>
        <p>
          Anyway, that's the backstory. Moving on, I think it'd be good if I
          talk a bit about what my philosophy is here. What sorts of beliefs and
          strong opinions inspired this work? What goals do I have? What am I
          aiming for? What am I trying to accomplish?
        </p>
        <div>
          <p class="mb-2">
            Here's a list:
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
        </div>
      </Text>
      <H2>Opinionated</H2>
      <Text>
        <p>If you try to please everyone you end up pleasing no one.</p>
        <p>
          With RFUI, I'm not trying to please everyone. I'm trying to please a
          subset of people. A subset of peole who have certain needs, and who
          share certain opinions.
        </p>
      </Text>
      <H2>Scale down</H2>
      <Text>
        <p>
          I recall someone from the Deno team writing or speaking about this
          idea. I can't find a reference though. The closest thing I could find
          is{" "}
          <Link href="https://youtu.be/3NR9Spj0DmQ?t=210">
            this excerpt
          </Link>{" "}
          from Ryan Dahl, but it doesn't elaborate much on the idea.
        </p>
        <p>
          To understand the idea of scaling down, first consider the idea of
          scaling up. What does it mean when we say that a framework or library
          or tool scales (up)? It means that as the scope of the project
          increases, the library continues to perform well. It continues to be a
          good tool for the job.
        </p>
        <p>
          Ok, so now what about scaling down? What does that mean? Well, it
          means that the library continues to be a good tool for the job as
          projects become <em>smaller</em>.
        </p>
        <p>
          As a counterexample, I don't think Node scales down very well. Say you
          want to use Node for a simple project. From{" "}
          <Link href="https://deno.com/learn/nodes-complexity-problem">
            Node's Complexity Problem
          </Link>:
        </p>
        <Blockquote>
          <p>
            Starting a new project in Node.js requires several steps before you
            can actually start programming. Setup TypeScript. Setup your testing
            framework. Setup a formatter. A linter. A type checker. Set up your
            bundler. Add the right plugins. And after selecting your tools,
            tweak all their config files so they work well together.{" "}
            <Link href="https://deno.com/blog/node-config-hell">
              Some Next.js projects have over 30 config files in them.
            </Link>
          </p>
          <p>
            Programming should be just that — programming — and not configuring
            tools before you write a single line of code.
          </p>
        </Blockquote>
        <p>
          On the other hand, I think Deno does a great job of scaling down. If
          you want to use Deno for a simple project, you basically can just get
          started coding right away. All of the tools come "for free" and you
          don't have to start off spending any time setting them up.
        </p>
        <p>
          I have the same goal for RFUI. I want RFUI to be a good choice for
          smaller projects. I want RFUI to scale down.
        </p>
      </Text>
      <H2>Pit of success</H2>
      <Text>
        <p>
          One of my favorite blog posts is{" "}
          <Link href="https://blog.codinghorror.com/falling-into-the-pit-of-success/">
            Falling Into The Pit of Success
          </Link>{" "}
          by Jeff Atwood. It's such a good idea.
        </p>
        <p>
          A good tool should make it{" "}
          <em>hard to do bad things</em>. Don't just say "We're just a tool.
          It's your responsibility as the programmer to not do bad things".
        </p>
        <p>
          A good tool should also make it{" "}
          <em>easy to do good things</em>. Don't just say "We're just a tool.
          It's your responsibility as the programmer to use the tool to do good
          things".
        </p>
        <p>
          No. The tool should push you towards good things, and away from bad
          things. It should push you towards the Pit of Success, and away from
          the Pit of Despair.
        </p>
        <p>
          One way I tried to do this in RFUI is by pushing users away from
          having links open in new tabs. In most scenarios, UX experts{" "}
          <Link href="https://www.nngroup.com/articles/new-browser-windows-and-tabs/">
            warn against it
          </Link>.
        </p>
        <p>
          Another way I tried to do this in RFUI is by limiting choices and
          customizability. In the world of design, people often recommend that
          you impose constraints on yourself.
        </p>
        <p>
          For example, by deciding on a color palatte. Without a color palatte,
          every time you need to decide what color to use, you have basically an
          infinite set of colors to choose from. Having so many choices is
          usually paralyzing, not helpful. And it also makes it difficult to be
          consistent with your color usage.
        </p>
        <p>
          It's not just color though. It is recommended that you also set up
          things like a "font size palatte" and a "spacing palatte" from the
          beginning. And this isn't just some sort of way of providing training
          wheels to inexperienced designers. No, it's recommended for
          experienced designers as well.
        </p>
        <p>
          In RFUI, I try to be smart about the choices I provide. I try to
          provide a "palatte" that will be optimal for most people, in most
          situations. For example, by providing three or four options for how
          "rounded" various components are.
        </p>
      </Text>
      <H2>Pre-built components</H2>
      <Text>
        <p>
          There are some component libraries that I think I'd be comfortable
          using. In particular,{" "}
          <Link href="https://tailwindui.com/">Tailwind UI</Link>{" "}
          and a few other paid ones. Well, at least I think they look good.
        </p>
        <p>
          But I still don't want to use them. Why? Because they don't actually
          give me code. Like, as a developer, I want to just be able to do:
        </p>
        <CodeBlock>
          {'<Button variant="primary" type="submit">Submit</Button>'}
        </CodeBlock>
        <p>
          I don't want to have to build that <InlineCode>Button</InlineCode>
          {" "}
          component myself.
        </p>
        <p>
          To be fair, Tailwind UI does provide you with React{" "}
          <em>code examples</em>. But they don't actually provide you with{" "}
          <em>components</em>. You'd have to write the components based off of
          the code examples they provide you with. Doing that is just very time
          consuming and not something I want to deal with.
        </p>
      </Text>
      <H2>Pretty</H2>
      <Text>
        <p>
          On the other hand, there are libraries that have all of these
          pre-built, easy to use components. But unfortunately, they're pretty
          ugly.
        </p>
        <p>
          What do I have in mind? Well, it starts with something that rhymes
          with moot and ends with something that rhymes with zap. That's right:
          I'm looking at you, Bootstrap. But I also find Chakra's components to
          be pretty uninspiring a lot of the time as well.
        </p>
        <p>I want the components in my library to genuinely look good.</p>
      </Text>
      <H2>Developer experience</H2>
      <Text>
        <p>
          Perhaps it's tautological, but I want to provide a good developer
          experience.
        </p>
        <p>
          I'm building a library. My target audience is developers. I want
          people in my target audience to have a good experience. I want
          developers to have a good experience. Why else would I be spending my
          time on this?
        </p>
        <p>
          Maybe some better questions to ask are where other libraries fail to
          provide a good developer experience, why this is, and what I aim to do
          differently.
        </p>
        <p>
          Well, I'm not sure, but I think it probably boils down to what sorts
          of things are fun (for most library authors) to work on, and what
          sorts of things are not fun. Building new features and functionality
          are typically fun. Writing docs, fixing bugs, responding to questions,
          and trying to make things easy for others to understand are all things
          that typically are not fun. To oversimpify.
        </p>
        <p>
          Personally, I enjoy focusing on those things that (I assume) most
          others don't think are fun. I want this library to be "good". Making
          it "good" is generally fun for me. I think the developer experience as
          a whole is what determines whether or not it's "good". And so, I plan
          to spend a lot of time on it.
        </p>
        <p>
          Let me be more concrete. I want to prioritize answering questions,
          writing clear docs, addressing any bugs or GitHub Issues that are
          raised and providing helpful examples.
        </p>
        <p>
          Now that I write this out, I'm starting to realize that this is my
          first open source project and I very well might be a little naive and
          starry-eyed. I don't know what to say about that though. We'll see how
          it goes.
        </p>
        <p>
          Another thing in particular is that I would like to do user interviews
          and user research. I{" "}
          <Link href="https://twitter.com/paulg/status/898476047263518720">
            think
          </Link>{" "}
          <Link href="https://sensible.com/rocket-surgery-made-easy/">
            it's
          </Link>{" "}
          <Link href="https://blog.codinghorror.com/low-fi-usability-testing/">
            absolutely
          </Link>{" "}
          <Link href="https://ux.stackexchange.com/a/53835/39046">
            crucial
          </Link>. If you'd be willing to participate in that, please{" "}
          <Link href="mailto:adamzerner@protonmail.com">
            let me know
          </Link>.
        </p>
      </Text>
      <H2>Use the platform</H2>
      <Text>
        <p>
          I've been noticing a trend recently of so-called{" "}
          <InlineCode>#useThePlatform</InlineCode>. And I like it.
        </p>
        <p>
          <Link href="https://remix.run/">Remix</Link>{" "}
          seems to really lean into it.{" "}
          <Link href="https://fresh.deno.dev/">Fresh</Link>{" "}
          too. For example, both web frameworks use the native{" "}
          <Link href="https://developer.mozilla.org/en-US/docs/Web/API/Request">
            <InlineCode>Request</InlineCode>
          </Link>{" "}
          and{" "}
          <Link href="https://developer.mozilla.org/en-US/docs/Web/API/Response">
            <InlineCode>Response</InlineCode>
          </Link>{" "}
          objects from the{" "}
          <Link href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">
            Fetch API
          </Link>. On the other hand, our old friend{" "}
          <Link href="http://expressjs.com/">Express</Link>{" "}
          has their own request and response objects.
        </p>
        <p>I try to lean into this "use the platform" idea in RFUI as well.</p>
        <p>
          For example, for the <InlineCode>Checkbox</InlineCode> and{" "}
          <InlineCode>RadioButton</InlineCode>{" "}
          components, I spent a bunch of time researching how to style them.
          There's lots of different approaches that involve using{" "}
          <InlineCode>{"<div>"}</InlineCode>{" "}
          elements to build your own custom components. But in the end, I
          decided on simply utilizing the <InlineCode>width</InlineCode>,{" "}
          <InlineCode>height</InlineCode>, and{" "}
          <InlineCode>accent-color</InlineCode> CSS properties (thanks{" "}
          <Link href="https://css-tricks.com/zero-trickery-custom-radios-and-checkboxes">
            CSS Tricks
          </Link>). Other approaches probably look a little better, but I prefer
          to "use the platform" and stick to actually having{" "}
          <InlineCode>{'<input type="checkbox" />'}</InlineCode> and{" "}
          <InlineCode>{'<input type="radio" />'}</InlineCode>.
        </p>
        <p>
          The <InlineCode>Select</InlineCode>{" "}
          component is another example of this. It's notoriously difficult to
          style <InlineCode>{"<select>"}</InlineCode> and{" "}
          <InlineCode>{"<option>"}</InlineCode>{" "}
          elements, so if you want a good looking select component you usually
          have to use <InlineCode>{"<div>"}</InlineCode>{" "}
          elements. I'd prefer to avoid this though. It has a bunch of subtle
          downsides. I prefer to avoid those downsides and "use the platform" in
          exchange for the component being slightly less pretty.
        </p>
      </Text>
      <H2>Avoid dependencies</H2>
      <Text>
        <p>
          The more time I spend as a software engineer, the more I find
          dependencies to be a pain.{" "}
          <Link href="https://medium.com/inside-bukalapak/the-chaos-of-maintaining-software-dependencies-and-how-to-tame-them-413cc233d800">
            This blog post
          </Link>{" "}
          does a decent job of discussing it.
        </p>
        <p>
          In RFUI I will try pretty hard to avoid introducing new dependencies.
        </p>
      </Text>
    </div>
  );
};
