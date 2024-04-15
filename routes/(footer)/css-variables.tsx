import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { H1 } from "@/components/atoms/h1.tsx";
import { H2 } from "@/components/atoms/h2.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Text } from "@/components/atoms/text.tsx";
import { Alert } from "@/islands/molecules/alert.tsx";

export default () => {
  return (
    <div class="max-w-prose text-lg">
      <H1>CSS variables</H1>
      <Text>
        <p>
          One of the{" "}
          <Link href="/getting-started#customize-css-variables">
            optional steps
          </Link>{" "}
          for getting started with RFUI is to customize the{" "}
          <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties">
            CSS variables
          </Link>.
        </p>
        <p>
          You can customize variables that are related to font style, spacing,
          roundedness, and color. Here is the full list:
        </p>
        <CodeBlock
          language="css"
          code={`/* Font */

--fontFamily-sans: 'Open Sans', sans-serif;


/* Spacing */

--spacing-px: 1px;
--spacing-0: 0;
--spacing-1: 0.25rem;
--spacing-2: 0.5rem;
--spacing-3: 0.75rem;
--spacing-4: 1rem;
--spacing-5: 1.5rem;
--spacing-6: 2rem;
--spacing-7: 3rem;
--spacing-8: 4rem;
--spacing-9: 6rem;
--spacing-10: 8rem;
--spacing-11: 12rem;
--spacing-12: 16rem;
--spacing-13: 24rem;
--spacing-14: 32rem;
--spacing-15: 40rem;
--spacing-16: 48rem;


/* Roundedness */

--rounded-square: var(--spacing-0);
--rounded-sm: var(--spacing-1);
--rounded-lg: var(--spacing-2);
--rounded-full: 9999px;
--default-roundedness: var(--rounded-sm);


/* Color */

--color-primary-50: 220 238 251;
--color-primary-100: 182 224 254;
--color-primary-200: 132 197 244;
--color-primary-300: 98 176 232;
--color-primary-400: 64 152 215;
--color-primary-500: 38 128 194;
--color-primary-600: 24 111 175;
--color-primary-700: 15 96 155;
--color-primary-800: 10 85 140;
--color-primary-900: 0 62 107;

--color-neutral-50: 240 244 248;
--color-neutral-100: 217 226 236;
--color-neutral-200: 188 204 220;
--color-neutral-300: 159 179 200;
--color-neutral-400: 130 154 177;
--color-neutral-500: 98 125 152;
--color-neutral-600: 72 101 129;
--color-neutral-700: 51 78 104;
--color-neutral-800: 36 59 83;
--color-neutral-900: 16 42 67;

--color-supporting-green-50: 227 249 229;
--color-supporting-green-100: 193 234 197;
--color-supporting-green-200: 163 217 165;
--color-supporting-green-300: 123 196 127;
--color-supporting-green-400: 87 174 91;
--color-supporting-green-500: 63 145 66;
--color-supporting-green-600: 47 129 50;
--color-supporting-green-700: 32 114 39;
--color-supporting-green-800: 14 88 20;
--color-supporting-green-900: 5 68 10;

--color-supporting-yellow-50: 255 251 234;
--color-supporting-yellow-100: 255 243 196;
--color-supporting-yellow-200: 252 229 136;
--color-supporting-yellow-300: 250 219 95;
--color-supporting-yellow-400: 247 201 72;
--color-supporting-yellow-500: 240 180 41;
--color-supporting-yellow-600: 222 145 29;
--color-supporting-yellow-700: 203 110 23;
--color-supporting-yellow-800: 180 77 18;
--color-supporting-yellow-900: 141 43 11;

--color-supporting-red-50: 255 238 238;
--color-supporting-red-100: 250 205 205;
--color-supporting-red-200: 242 155 155;
--color-supporting-red-300: 230 106 106;
--color-supporting-red-400: 214 69 69;
--color-supporting-red-500: 186 37 37;
--color-supporting-red-600: 166 27 27;
--color-supporting-red-700: 145 17 17;
--color-supporting-red-800: 120 10 10;
--color-supporting-red-900: 97 4 4;
}`}
        />
        <Alert isDismissable={false}>
          <p>
            Well, technically you can customize any of the CSS variables that
            you see in RFUI's CSS file. It's just that if you change ones that
            aren't in the list above, I'm not sure how good RFUI's components
            will look. On the other hand, if you customize the variables in the
            list above and choose reasonable values, RFUI's components should
            still all look good.
          </p>
        </Alert>
      </Text>

      <H2 inPageLink="how">How</H2>
      <Text>
        <p>After doing something like:</p>
        <CodeBlock
          language="tsx"
          code={`<link rel="stylesheet" href="https://rfui.deno.dev/rfui.css" />`}
        />
        <p>
          to link to RFUI's stylesheet, if you want to customize the CSS
          variables, you'll need a second stylesheet beneath it. Often times
          you'll have something like <InlineCode>app.css</InlineCode>{" "}
          beneath it like so:
        </p>
        <CodeBlock
          language="tsx"
          code={`<link rel="stylesheet" href="https://rfui.deno.dev/rfui.css" />
<link rel="stylesheet" href="/app.css" />`}
        />
        <p>
          If not, go ahead and create it. Then in{" "}
          <InlineCode>app.css</InlineCode>{" "}
          you can do something like this if you want to update the default
          roundedness and primary color:
        </p>
        <CodeBlock
          language="css"
          code={`:root {
  --default-roundedness: var(--rounded-lg);
  --color-primary-50: 999 999 999;
  --color-primary-100: 999 999 999;
  --color-primary-200: 999 999 999;
  --color-primary-300: 999 999 999;
  --color-primary-400: 999 999 999;
  --color-primary-500: 999 999 999;
  --color-primary-600: 999 999 999;
  --color-primary-700: 999 999 999;
  --color-primary-800: 999 999 999;
  --color-primary-900: 999 999 999;
}`}
        />
        <p>
          Because these appear after the CSS variables that were defined in the
          RFUI stylesheet, they will take precedence.
        </p>
      </Text>
    </div>
  );
};
