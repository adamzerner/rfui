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

# Releasing

## Versioning

To create a new version of this library:

- Add version-specific CSS file in `static` directory
- Update `utilities/get-css-path.ts`
- Update docs (cmd+f for eg. v0.1.10, 0-1-10, v0.1.11 and 0-1-11 and change it
  to the most recent version)
- Use https://github.com/adamzerner/rfui/releases/new
- Update CHANGELOG.md
- Follow [semantic versioning](https://semver.org/)

## Generating the Tailwind CSS file

Here's the process:

0. Download the `tailwindcss` executable by following
   [these instructions](https://tailwindcss.com/blog/standalone-cli#get-started).
1. Go to `tailwind.config.ts` and remove `routes` since that directory is just
   for the documentation, not for code that will be used by library users.
2. Run `./tailwindcss -i static/app.css -o static/rfui.css --minify`.
