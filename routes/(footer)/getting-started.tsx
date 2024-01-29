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
              <p>
                Tutorials walk you through the process of getting set up in a
                specific web framework like Fresh, Remix or NextJS.
              </p>
              <p>
                How-to guides on the other hand are more general. They aren't
                specific to a given web framework. They are an outline of the
                high-level steps one needs to take. The target audience is
                expected to need less hand-holding.
              </p>
            </Text>
          </AlertBody>
        </Alert>
      </Text>

      <H2 inPageLink="include-rfui-css-file">{"1) Include RFUI CSS file"}</H2>
      <Text>
        <p>
          Without RFUI's CSS stylesheet the RFUI components will be unstyled.
          You will need to include the stylesheet for the RFUI components to
          look as they are intended to look.
        </p>
        <p>
          There is a CSS file that corresponds to each version of RFUI. For
          example, for v0.1.4 of RFUI there is{" "}
          <InlineCode>https://rfui.deno.dev/rfui-v0-1-4.css</InlineCode>. So if
          you know that you're on v0.1.4 of RFUI you can include:
        </p>
        <CodeBlock
          language="html"
          code={`<link 
  rel="stylesheet" 
  href="https://rfui.deno.dev/rfui-v0-1-4.css" 
/>`}
        />
        <p>
          But then you'll have to remember to update this when you upgrade to a
          new version of RFUI. So an alternative is to use RFUI's{" "}
          <InlineCode>getCssUrl</InlineCode>{" "}
          function. If you are on v0.1.4 of RFUI,{" "}
          <InlineCode>getCssUrl</InlineCode> will return{" "}
          <InlineCode>"https://rfui.deno.dev/rfui-v0-1-4.css"</InlineCode>. So
          then, if you want to "set it and forget it", you can do something like
          this:
        </p>
        <CodeBlock
          language="tsx"
          code={`import { getCssUrl } from "rfui";

<link  rel="stylesheet" href={getCssUrl()} />`}
        />
      </Text>

      <H2 inPageLink="import-rfui-component">{"2) Import RFUI component"}</H2>
      <Text>
        <p>
          The RFUI library is hosted as a{" "}
          <Link href="https://deno.land/x">Deno Third Party Module</Link>.{" "}
          <Link href="https://deno.land/x/rfui">This</Link>{" "}
          is the corresponding page. It is only usable in Deno projects. To
          import from it, you'll want to do something like this:
        </p>
        <CodeBlock
          language="tsx"
          code={`import { Button } from "https://deno.land/x/rfui@v0.1.4/mod.ts";`}
        />
        <Alert isDismissable={false}>
          <AlertBody>
            <p>
              Or even better, use{" "}
              <Link href="https://docs.deno.com/runtime/manual/basics/import_maps">
                Import Maps
              </Link>{" "}
              by adding the following to the <InlineCode>"imports"</InlineCode>
              {" "}
              object in <InlineCode>deno.json</InlineCode>:
            </p>
            <CodeBlock
              language="ts"
              code={`"rfui": "https://deno.land/x/rfui@v0.1.4/mod.ts"`}
            />
            <p>
              After doing so, you can clean up your import like so:
            </p>
            <CodeBlock
              language="tsx"
              code={`import { Button } from "rfui";`}
            />
          </AlertBody>
        </Alert>
      </Text>

      <H2 inPageLink="use-the-component">{"3) Use the component"}</H2>
      <Text>
        <p>Something like:</p>
        <CodeBlock
          language="tsx"
          code={`<Button>Example</Button>`}
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
          In the <InlineCode>rfui.css</InlineCode> file you created in{" "}
          <Link href="#include-rfui-css-file">step one</Link>, you will see{" "}
          <InlineCode>:root</InlineCode> followed by a bunch of{" "}
          <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties">
            CSS variables
          </Link>. You can change their values if you'd like to customize your
          app's look and feel.
        </p>
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
