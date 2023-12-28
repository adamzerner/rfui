# Overview

Webite: https://rfui.deno.dev/

This is a component library that is currently intended to be used on projects
using Deno's web framework [Fresh](https://fresh.deno.dev/) and is built
according to the following
[philosophical principles](https://rfui.deno.dev/philosophy).

1. Opinionated
2. Scale down
3. Limit your choices
4. Prioritize documentation
5. Pit of success (eg. by providing tips and references to best practices, and
   by prefixing with underscores)
6. Pretty
7. Use the platform
8. Pareto solutions > high customizability

# Notes

## Early stage

It is currently in a very early stage. See the
[project page](https://github.com/users/adamzerner/projects/2/views/1).

## Atomic Design

It follows the
[Atomic Design Methodlogy](https://atomicdesign.bradfrost.com/chapter-2/) by
breaking components into "atoms", "molecules" and "organisms".

## Syntax Highlighting

If users want `CodeBlock` to have syntax highlighting, they'll have to use
[Prism](https://prismjs.com/). Here's what that involves:

1. Generate a `prism.js` and `prism.css` file
   [here](https://prismjs.com/download.html). Make sure you include whatever
   languages and plugins you need. Ie. if you want to let users copy the code to
   their clipboard, you'll need to include the
   ["Copy to Clipboard Button" plugin](https://prismjs.com/plugins/copy-to-clipboard/).
2. If you want stuff in code blocks to wrap, change `white-space:pre` in
   `prism.css` to `white-space:pre-wrap`.
3. Load them with something like `<script src="/prism.js"></script>` and
   `<link rel="stylesheet" type="text/css" href="/prism.css" />`.
4. After your JavaScript has loaded you (might?) need to call
   `Prism.highlightAll();`. One way to do this is to include
   `<script>Prism.highlightAll();</script>` right before `</body>`.

## Islands in docs

Most docs pages use `ComponentDocsPage` from
`/islands/demo/component-docs-page.tsx`. However, when docs pages need to be
interactive -- ie. because the component they're documenting is an island --
using `ComponentDocsPage` won't work because you
[can't pass functions into an island](https://fresh.deno.dev/docs/concepts/islands#passing-other-props-to-islands)
(see also [this GitHub issue](https://github.com/denoland/fresh/issues/2194)).

I also tried refactoring `ComponentDocsPage` to accept the current props as
`children` instead, but that didn't work for reasons I don't understand.

So then, I was forced to be pretty WET (instead of DRY) in the docs pages for
components that are islands.

# Releasing

## Versioning

To create a new version of this library:

- Use https://github.com/adamzerner/rfui/releases/new
- Update CHANGELOG.md
- Follow [semantic versioning](https://semver.org/)

## Generating the Tailwind CSS file

I've tried to find a good terminal command or script to run but haven't found
anything good, and it doesn't seem worth spending more time looking.

So here's the process.

1. Go to `tailwind.config.ts` and remove `routes` since that directory is just
   for the documentation, not for code that will be used by library users.
2. Run `deno task start`.
3. In Firefox, open the dev tools, click the "Style Editor" tab, and refer to
   `app.css`. That's the file that users of the library will need.
4. Update `static/rfui.css`.
