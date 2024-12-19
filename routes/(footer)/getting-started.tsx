import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { H1 } from "@/components/atoms/h1.tsx";
import { H2 } from "@/components/atoms/h2.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { OL } from "@/components/atoms/ol.tsx";
import { Text } from "@/components/atoms/text.tsx";
import { Alert, AlertBody } from "@/islands/molecules/alert.tsx";

export default () => {
  return (
    <div class="max-w-prose text-lg">
      <H1>Getting started</H1>
      <Text>
        <p>Here's what you need to get going.</p>
        <Alert isDismissable={false}>
          <AlertBody>
            <Text>
              <p>
                This is a{" "}
                <Link href="https://documentation.divio.com/how-to-guides.html">
                  how-to guide
                </Link>, not a{" "}
                <Link href="https://documentation.divio.com/tutorials.html">
                  tutorial
                </Link>.
              </p>
            </Text>
          </AlertBody>
        </Alert>
      </Text>

      <H2 inPageLink="set-up-package">{"1) Set up package"}</H2>
      <Text>
        <p>
          The RFUI library is hosted as a{" "}
          <Link href="https://deno.land/x">Deno Third Party Module</Link>.
        </p>
        <p>
          You'll probably want to use{"  "}
          <Link href="https://docs.deno.com/runtime/manual/basics/import_maps">
            Import Maps
          </Link>. Add the following to the <InlineCode>"imports"</InlineCode>
          {" "}
          object in <InlineCode>deno.json</InlineCode>:
        </p>
        <CodeBlock
          language="ts"
          code={`"rfui": "https://deno.land/x/rfui@v0.1.30/mod.ts"`}
        />
      </Text>

      <H2 inPageLink="include-rfui-stylesheet">
        {"2) Include RFUI stylesheet"}
      </H2>
      <Text>
        <p>Something like this:</p>
        <CodeBlock
          language="tsx"
          code={`<link rel="stylesheet" href="https://rfui.deno.dev/rfui.css" />`}
        />
        <p>
          See the <Link href="/stylesheet">Stylesheet</Link>{" "}
          page for more information.
        </p>
      </Text>

      <H2 inPageLink="import-rfui-component">
        {"3) Import and use RFUI component"}
      </H2>
      <Text>
        <p>Something like:</p>
        <CodeBlock
          language="tsx"
          code={`import { Button } from "rfui";

<Button>Example</Button>`}
        />
      </Text>

      <H2 inPageLink="decide-on-a-personality">
        {"4) Decide on a personality (recommended)"}
      </H2>
      <Text>
        <p>
          It is usually a good idea to decide upfront on how serious or playful
          you want the tone of your website to be. See{" "}
          "<Link href="/choose-a-personality">Choose a personality</Link>".
        </p>
      </Text>

      <H2 inPageLink="use-heroicons">
        {"5) Use heroicons (recommended)"}
      </H2>
      <Text>
        <p>
          Various RFUI components use{" "}
          <Link href="https://heroicons.com/">heroicons</Link>. If you end up
          having a need for more icons, to maintain a consistent look and feel,
          you probably will want to use heroicons in your project as well.
        </p>
      </Text>

      <H2 inPageLink="customize-css-variables">
        {"6) Customize CSS variables (optional)"}
      </H2>
      <Text>
        <p>
          In your project's eg. <InlineCode>app.css</InlineCode>{" "}
          file do something like this to override the{" "}
          <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties">
            CSS variables
          </Link>{" "}
          that were defined in RFUI's stylesheet that you set up in{" "}
          <Link href="#include-rfui-stylesheet">step two</Link>.
        </p>
        <CodeBlock
          language="css"
          code={`:root {
  --default-roundedness: var(--rounded-lg);
}`}
        />
        <p>
          See the <Link href="/css-variables">"CSS variables" page</Link>{" "}
          for more information.
        </p>
      </Text>

      <H2 inPageLink="set-up-syntax-highlighting">
        {"7) Set up syntax highlighting (optional)"}
      </H2>
      <Text>
        <p>
          If you want{" "}
          <Link href="/atoms/code-block#language">syntax highlighting</Link>
          {" "}
          for RFUI's{" "}
          <Link href="/atoms/code-block">
            <InlineCode>CodeBlock</InlineCode>
          </Link>{" "}
          component, you'll have to do a little bit more work.
        </p>
        <OL>
          <li>
            Generate a <InlineCode>prism.js</InlineCode> and{" "}
            <InlineCode>prism.css</InlineCode> file{" "}
            <Link href="https://prismjs.com/download.html">here</Link>. Make
            sure you include whatever languages and plugins you need. Ie. if you
            want to let users copy the code to their clipboard, you'll need to
            include the{" "}
            <Link href="https://prismjs.com/plugins/copy-to-clipboard/">
              "Copy to Clipboard Button" plugin
            </Link>.
          </li>
          <li>
            If you want stuff in code blocks to wrap (you probably do), change
            {" "}
            <InlineCode>white-space:pre</InlineCode> in
            <InlineCode>prism.css</InlineCode> to{" "}
            <InlineCode>white-space:pre-wrap</InlineCode>.
          </li>
          <li>
            Load them by adding something like:
            <CodeBlock
              language="html"
              code={`<script src="/prism.js"></script>`}
            />
            <div>and:</div>
            <CodeBlock
              language="html"
              code={`<link rel="stylesheet" href="/prism.css" />`}
            />
          </li>
        </OL>
      </Text>
    </div>
  );
};
