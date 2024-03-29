# Overview

Webite: https://rfui.deno.dev/

# Releasing

## Versioning

To create a new version of this library (be sure to follow
[semantic versioning](https://semver.org/)):

- Add version-specific CSS file in `static` directory. (See "Generating the
  Tailwind CSS file" below.)
- Update version stuff. Make the following "find and replace" changes:
  - Change v0.1.22 to next version.
  - Change 0-1-22 to next version.
  - Change v0.1.21 to next version.
  - Change 0-1-21 to next version.
- Update `CHANGELOG.md`.
- Commit and push.
- Use https://github.com/adamzerner/rfui/releases/new to update the third party
  module.
  - Creating a new tag should trigger a GitHub webhook that Deno's third party
    module repo subscribes to and releases the new version. (Note: I was having
    issues [here](https://github.com/denoland/deno/issues/22014) but I think
    they've been resolved.)
  - Click "Choose a tag".
  - Type in the new version in the input field.
  - Click "Create a new tag".
  - Fill in other fields and submit.
- Test in [`cannabis-journal`](https://github.com/adamzerner/cannabis-journal).
- Update [`rfui-react`](https://github.com/adamzerner/rfui) (see the README in
  that repo for more information).

## Generating the Tailwind CSS file

Here's the process:

0. Download the `tailwindcss` executable by following
   [these instructions](https://tailwindcss.com/blog/standalone-cli#get-started).
1. Go to `tailwind.config.ts` and remove `routes` since that directory is just
   for the documentation, not for code that will be used by library users.
2. Run `./tailwindcss -i static/app.css -o static/rfui.css --minify`
3. Run the same command for whatever the new version is, eg
   `static/rfui-x-y-z.css` to that there is a CSS file for the current version.
4. Add `routes` back in to `tailwind.config.ts` (it was removed in step one).
