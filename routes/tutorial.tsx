import { H1 } from "@/components/atoms/h1.tsx";
import { Stack } from "@/components/helpers/stack.tsx";

export default () => {
  return (
    <div class="max-w-prose text-lg">
      <H1>Tutorial</H1>
      <Stack class="gap-4 leading-relaxed">
        Under construction.
      </Stack>
    </div>
  );
};

/*

Fresh:

Follow https://fresh.deno.dev/docs/getting-started and https://fresh.deno.dev/docs/getting-started/create-a-project to create your Fresh project.

When creating the project you'll get this prompt:

```
Fresh has built in support for styling using Tailwind CSS. Do you want to use this? [Y/n]
```

You can choose whatever you want. Here we'll say `Y`.

Add `rfui.css` to the `static` directory. Get it from https://rfui.deno.dev/rfui.css. Then in `routes/_app.tsx` add `<link rel="stylesheet" href="/rfui.css" />` (probably before the `styles.css`).

If you want to, put `"rfui": "https://deno.land/x/rfui@v0.0.15/mod.ts"` in `deno.json` to make imports easier.

In `index.tsx` do `import { Badge } from "rfui";` and `<Badge>example</Badge>`.

TODO: Syntax highlighting (see README)

*/
