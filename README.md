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

It is currently at a pretty early stage. See the
[project page](https://github.com/users/adamzerner/projects/2/views/1). However,
for people with a reasonable amount of risk aversion, it should be ready to be
used on most projects.

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

Here's the process:

1. Go to `tailwind.config.ts` and remove `routes` since that directory is just
   for the documentation, not for code that will be used by library users.
2. Run `./tailwindcss -i static/app.css -o static/rfui.css --minify`.
3. Add variables (`:root` in `app.css`) to the bottom of `rfui.css` so that RFUI
   users can easily customize their values.
