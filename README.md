# Overview

Webite: https://rfui.deno.dev/

# Releasing

## Versioning

To create a new version of this library:

- Add version-specific CSS file in `static` directory
- Update docs (cmd+f for eg. v0.1.13, 0-1-13, v0.1.14 and 0-1-14 and change it
  - Update `utilities/get-stylesheet-url.ts` here and in `rfui-react` to the
    most recent version)
- Use https://github.com/adamzerner/rfui/releases/new
- Update CHANGELOG.md
- Follow [semantic versioning](https://semver.org/)
- Update [`rfui-react`](https://github.com/adamzerner/rfui)

## Generating the Tailwind CSS file

Here's the process:

0. Download the `tailwindcss` executable by following
   [these instructions](https://tailwindcss.com/blog/standalone-cli#get-started).
1. Go to `tailwind.config.ts` and remove `routes` since that directory is just
   for the documentation, not for code that will be used by library users.
2. Run `./tailwindcss -i static/app.css -o static/rfui.css --minify`.
