import { Link } from "@/components/atoms/link.tsx";
import { Stack } from "@/components/helpers/stack.tsx";

export default () => {
  return (
    <div class="max-w-prose">
      <h1 class="text-3xl text-neutral-700 mt-9 mb-7">Philosophy</h1>
      <Stack class="gap-4 leading-relaxed">
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
          I also looked in to a bunch of paid templates and libraries. I would
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
          <ol class="list-decimal list-inside flex flex-col gap-1">
            <li>Opinionated</li>
            <li>Scale down</li>
            <li>Pit of success</li>
            <li>Pre-built components</li>
            <li>Pretty</li>
            <li>Docs and DX</li>
            <li>Use the platform</li>
            <li>Avoid dependencies</li>
          </ol>
        </div>
      </Stack>
      <h2 class="text-2xl text-neutral-700 mt-8 mb-5">Opinionated</h2>
      <Stack class="gap-4 leading-relaxed">
        <p>If you try to please everyone you end up pleasing no one.</p>
        <p>
          With RFUI, I'm not trying to please everyone. I'm trying to please a
          subset of people. A subset of peole who have certain needs, and who
          share certain opinions.
        </p>
      </Stack>
      <h2 class="text-2xl text-neutral-700 mt-8 mb-5">Scale down</h2>
      <Stack class="gap-4 leading-relaxed">
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
        <blockquote class="border-l border-neutral-300 pl-5 text-neutral-700 flex flex-col gap-3">
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
        </blockquote>
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
      </Stack>
      <h2 class="text-2xl text-neutral-700 mt-8 mb-5">Pit of success</h2>
      <Stack class="gap-4 leading-relaxed">
        <p>
          One of my favorite blog posts is{" "}
          <Link href="https://blog.codinghorror.com/falling-into-the-pit-of-success/">
            Falling Into The Pit of Success
          </Link>{" "}
          by Jeff Atwood. It's such a good idea.
        </p>
        <p>
          A good tool should make it make it{" "}
          <em>hard to do bad things</em>. Don't just say "We're just a tool.
          It's your responsibility as the programmer to not do bad things".
        </p>
        <p>
          A good tool should also make it make it{" "}
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
      </Stack>
    </div>
  );
};

// # Overview

// The goal of this project is to have a component library that I can use that is
// inspired by the book [Refactoring UI](https://www.refactoringui.com/).

// It is currently in a very early stage. See the
// [project page](https://github.com/users/adamzerner/projects/2/views/1).

// I am following the
// [Atomic Design Methodlogy](https://atomicdesign.bradfrost.com/chapter-2/) by
// breaking components into "atoms", "molecules" and organisms.

// ## Versioning

// To create a new version of this library:

// - Use https://github.com/adamzerner/rfui/releases/new
// - Update CHANGELOG.md
// - Follow [semantic versioning](https://semver.org/)

// ## Philosophy
// 1. Opinionated
// 2. Scale down
//      Pareto solutions > high customizability
// 5. Pit of success (eg. by providing tips and references to best practices, and
//      Limit your choices
// 4. Prioritize documentation
// 6. Pretty (Bootstrap is actually _ugly_)
// 7. Use the platform
