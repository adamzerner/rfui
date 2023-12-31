import { CodeBlock } from "@/islands/atoms/code-block.tsx";
import { H1 } from "@/islands/atoms/h1.tsx";
import { H2 } from "@/islands/atoms/h2.tsx";
import { InlineCode } from "@/islands/atoms/inline-code.tsx";
import { Link } from "@/islands/atoms/link.tsx";
import { OL } from "@/islands/atoms/ol.tsx";
import { Text } from "@/islands/atoms/text.tsx";
import { Alert } from "@/islands/molecules/alert.tsx";

export default () => {
  return (
    <div class="max-w-prose text-lg">
      <H1>Fresh tutorial</H1>
      <Text>
        <p>
          This is a{" "}
          <Link href="https://documentation.divio.com/tutorials.html">
            tutorial
          </Link>{" "}
          for using RFUI in a project that uses the web framework{" "}
          <Link href="https://fresh.deno.dev/">Fresh</Link>.
        </p>
      </Text>

      <H2 inPageLink="create-project">{"1) Create project"}</H2>
      <Text>
        <p>
          Refer to the Fresh docs'{" "}
          <Link href="https://fresh.deno.dev/docs/getting-started">
            "Getting Started"
          </Link>{" "}
          page to create a new Fresh project.
        </p>
        <p>
          Basically, make sure you have{" "}
          <Link href="https://deno.com/">Deno</Link> installed and then do:
        </p>
        <CodeBlock code={`deno run -A -r https://fresh.deno.dev`} />
        <Alert isDismissable={false}>
          When creating the project you'll get a prompt asking whether or not
          you want to use Tailwind CSS. You can choose "yes" or "no". RFUI
          doesn't care.
        </Alert>
      </Text>

      <H2 inPageLink="add-css-file">{"2) Add CSS file"}</H2>
      <Text>
        <p>
          Create a <InlineCode>rfui.css</InlineCode> file in your{" "}
          <InlineCode>static</InlineCode> directory. Copy the contents of{" "}
          <Link href="https://rfui.deno.dev/rfui.css">
            https://rfui.deno.dev/rfui.css
          </Link>{" "}
          and paste them into your newly created{" "}
          <InlineCode>rfui.css</InlineCode> file.
        </p>
        <p>
          Then in <InlineCode>routes/_app.tsx</InlineCode> add:
        </p>
        <CodeBlock
          language="tsx"
          code={`<link rel="stylesheet" href="/rfui.css" />`}
        />
        <p>right before the:</p>
        <CodeBlock
          language="tsx"
          code={`<link rel="stylesheet" href="/styles.css" />`}
        />
      </Text>

      <H2 inPageLink="set-up-import-map">
        {"3) Set up import map"}
      </H2>
      <Text>
        <p>
          In <InlineCode>deno.json</InlineCode> add:
        </p>
        <CodeBlock
          language="ts"
          code={`"rfui": "https://deno.land/x/rfui@v0.1.0/mod.ts"`}
        />
        <p>
          to the <InlineCode>"imports"</InlineCode> object.
        </p>
        <Alert isDismissable={false}>
          <div>
            This isn't strictly necessary. However, it is usually considered to
            be a best practice in Deno apps. See the{" "}
            <Link href="https://docs.deno.com/runtime/manual/basics/import_maps">
              docs for Import Maps
            </Link>{" "}
            for more information.
          </div>
        </Alert>
      </Text>

      <H2 inPageLink="use-rfui-component">{"4) Use RFUI component"}</H2>
      <Text>
        <p>
          In <InlineCode>routes/index.tsx</InlineCode>, add:
        </p>
        <CodeBlock language="tsx" code={`import { Button } from "rfui";`} />
        <p>
          Then, to avoid distractions, remove everything from the{" "}
          <InlineCode>Home</InlineCode> component.
        </p>
        <p>
          Finally, use the <InlineCode>Button</InlineCode> component from RFUI!
        </p>
        <CodeBlock
          language="tsx"
          code={`import { Button } from "rfui";

export default function Home() {
  return (
    <div>
      <Button>example</Button>
    </div>
  );
}
`}
        />
        <p>
          After running <InlineCode>deno task start</InlineCode>, visit{" "}
          <Link href="http://localhost:8000/">http://localhost:8000/</Link>{" "}
          to see it in action.
        </p>
      </Text>

      <H2 inPageLink="decide-on-a-personality">
        {"5) Decide on a personality (recommended)"}
      </H2>
      <Text>
        <p>
          It is usually a good idea to decide upfront on how serious or playful
          you want the tone to be. See{" "}
          "<Link href="/choose-a-personality">Choose a personality</Link>".
        </p>
      </Text>

      <H2 inPageLink="use-heroicons">
        {"6) Use heroicons (recommended)"}
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
        {"7) Customize CSS variables (optional)"}
      </H2>
      <Text>
        <p>
          In the <InlineCode>rfui.css</InlineCode> file you created in{" "}
          <Link href="#add-css-file">step two</Link>, you will see{" "}
          <InlineCode>:root</InlineCode> followed by a bunch of{" "}
          <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties">
            CSS variables
          </Link>. You can change their values if you'd like to customize your
          app's look and feel.
        </p>
      </Text>

      <H2 inPageLink="set-up-syntax-highlighting">
        {"8) Set up syntax highlighting (optional)"}
      </H2>
      <p>
        If you want syntax highlighting for RFUI's{" "}
        <Link href="/atoms/code-block">
          <InlineCode>CodeBlock</InlineCode>
        </Link>{" "}
        component, you'll have to do a little bit more work.
      </p>
      <OL class="mt-5">
        <li>
          Generate a <InlineCode>prism.js</InlineCode> and{" "}
          <InlineCode>prism.css</InlineCode> file{" "}
          <Link href="https://prismjs.com/download.html">here</Link>. Make sure
          you include whatever languages and plugins you need. Ie. if you want
          to let users copy the code to their clipboard, you'll need to include
          the{" "}
          <Link href="https://prismjs.com/plugins/copy-to-clipboard/">
            "Copy to Clipboard Button" plugin
          </Link>.
        </li>
        <li>
          Place your <InlineCode>prism.js</InlineCode> and{" "}
          <InlineCode>prism.css</InlineCode> files in the{" "}
          <InlineCode>static</InlineCode> directory.
        </li>
        <li>
          If you want stuff in code blocks to wrap (you probably do), change
          {" "}
          <InlineCode>white-space:pre</InlineCode> in
          <InlineCode>prism.css</InlineCode> to{" "}
          <InlineCode>white-space:pre-wrap</InlineCode>.
        </li>
        <li>
          Load them by adding{" "}
          <CodeBlock
            language="html"
            code={`<script src="/prism.js"></script>`}
          />
          <div>and:</div>
          <CodeBlock
            language="html"
            code={`<link rel="stylesheet" href="/prism.css" />`}
          />
          to <InlineCode>_app.tsx</InlineCode>.
        </li>
        <li>
          After your JavaScript has loaded you will need to call
          <InlineCode>Prism.highlightAll();</InlineCode>. To do this, include:
          <CodeBlock
            language="html"
            code={`<script>Prism.highlightAll();</script>`}
          />
          right before <InlineCode>{`</body>`}</InlineCode>.
        </li>
      </OL>
    </div>
  );
};
