# Overview

Webite: https://rfui.deno.dev/

Note: Anyone is welcome to use RFUI. However, consider that I am my own target
audience for this project and I am not looking to support others. It probably
will always remain this way, but it's possible that I look to target a wider,
public audience in the future.

# Releasing

## Versioning

To create a new version of this library (be sure to follow
[semantic versioning](https://semver.org/)):

- Update CSS file in `static` directory. (See "Generating the Tailwind CSS file"
  below.)
- Update `getting-started.tsx`.
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

## Generating the Tailwind CSS file

Here's the process:

0. Download the `tailwindcss` executable by following
   [these instructions](https://tailwindcss.com/blog/standalone-cli#get-started).
1. Go to `tailwind.config.ts` and remove `routes` since that directory is just
   for the documentation, not for code that will be used by library users.
2. Run `./tailwindcss -i static/app.css -o static/rfui.css --minify`
3. Add `routes` back in to `tailwind.config.ts` (it was removed in step one).
