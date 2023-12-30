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
                There are some tutorials for getting set up with RFUI for
                various web frameworks (see the footer). Along the lines of how
                The Documentation System{" "}
                <Link href="https://documentation.divio.com/tutorials.html">
                  describes it
                </Link>, those tutorials hold your hand through a step-by-step
                process of getting set up.
              </p>
              <p>
                On the other hand, this "Getting started" page is more of a{" "}
                <Link href="https://documentation.divio.com/how-to-guides.html">
                  "How-to guide"
                </Link>. It describes the steps for getting started in a more
                general sense, as opposed to being specfic to a certain
                framework or platform. And it is written with a target audience
                in mind who is more familiar with various web development
                things.
              </p>
            </Text>
          </AlertBody>
        </Alert>
      </Text>

      <H2 inPageLink="include-rfui-css-file">{"1) Include RFUI CSS file"}</H2>
      <Text>
        <p>
          Without{" "}
          <Link href="https://rfui.deno.dev/rfui.css">this CSS</Link>, the RFUI
          components will be unstyled. You will need to link to that CSS in
          order for the RFUI components to look as they are intended to look.
        </p>
        <p>
          So then, create a CSS file and copy-paste the CSS{" "}
          <Link href="https://rfui.deno.dev/rfui.css">here</Link>{" "}
          into that file. Then link to it. Something like:
        </p>
        <CodeBlock
          language="html"
          code={`<link rel="stylesheet" href="/rfui.css" />`}
        />
      </Text>

      <H2 inPageLink="include-rfui-css-file">{"2) Import RFUI component"}</H2>
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
          code={`import { Button } from "https://deno.land/x/rfui@v0.1.0/mod.ts";`}
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
              code={`"rfui": "https://deno.land/x/rfui@v0.1.0/mod.ts"`}
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

        <H2 inPageLink="use-the-component">{"3) Use the component"}</H2>
        <Text>
          <p>Something like:</p>
          <CodeBlock
            language="tsx"
            code={`<Button>Example</Button>`}
          />
        </Text>

        <H2 inPageLink="set-up-syntax-highlighting">
          {"4) Set up syntax highlighting (optional)"}
        </H2>
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
          <li>
            After your JavaScript has loaded you will need to call
            <InlineCode>Prism.highlightAll();</InlineCode>. One way to do this
            would be to include:
            <CodeBlock
              language="html"
              code={`<script>Prism.highlightAll();</script>`}
            />
            right before <InlineCode>{`</body>`}</InlineCode>.
          </li>
        </OL>
      </Text>
    </div>
  );
};
