import { Link } from "@/components/atoms/link.tsx";
import { Stack } from "@/components/helpers/stack.tsx";

export default () => {
  return (
    <div>
      <div class="text-3xl text-neutral-700 mt-9 mb-7">Philosophy</div>
      <Stack class="max-w-prose gap-5 leading-relaxed">
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
        <p>
          Here's a list:
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
// 3. Limit your choices
// 4. Prioritize documentation
// 5. Pit of success (eg. by providing tips and references to best practices, and
//    by prefixing with underscores)
// 6. Pretty (Bootstrap is actually _ugly_)
// 7. Use the platform
// 8. Pareto solutions > high customizability
