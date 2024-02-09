import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { H1 } from "@/components/atoms/h1.tsx";
import { H2 } from "@/components/atoms/h2.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { OL } from "@/components/atoms/ol.tsx";
import { Text } from "@/components/atoms/text.tsx";

export default () => {
  return (
    <div class="max-w-prose text-lg">
      <H1>Remix tutorial</H1>
      <Text>
        <p>
          This is a{" "}
          <Link href="https://documentation.divio.com/tutorials.html">
            tutorial
          </Link>{" "}
          for using RFUI in a project that uses the web framework{" "}
          <Link href="https://remix.run/">Remix</Link>.
        </p>
      </Text>

      <H2 inPageLink="create-project">{"1) Create project"}</H2>
      <Text>
        <p>
          Refer to the Remix docs'{" "}
          <Link href="https://remix.run/docs/en/main/start/quickstart">
            "Quick Start"
          </Link>{" "}
          page to create a new Remix project.
        </p>
        <CodeBlock code={`npx create-remix@latest`} />
      </Text>

      <H2 inPageLink="install-package">
        {"2) Install package"}
      </H2>
      <Text>
        <CodeBlock code={`npm install @adamzerner/rfui-react`} />
      </Text>

      <H2 inPageLink="add-css-file">{"3) Add CSS file"}</H2>
      <Text>
        <p>
          In <InlineCode>app/root.tsx</InlineCode> import{" "}
          <InlineCode>getStylesheetUrl</InlineCode>:
        </p>
        <CodeBlock
          language="tsx"
          code={`import { getStylesheetUrl } from "@adamzerner/rfui-react";`}
        />
        <p>and add:</p>
        <CodeBlock
          language="tsx"
          code={`{ rel: "stylesheet", href: getStylesheetUrl() }`}
        />
        <p>to the end of the array that is returned by:</p>
        <CodeBlock
          language="tsx"
          code={`export const links`}
        />
      </Text>

      <H2 inPageLink="use-rfui-component">{"4) Use RFUI component"}</H2>
      <Text>
        <p>
          In <InlineCode>app/routes/_index.tsx</InlineCode>, add:
        </p>
        <CodeBlock
          language="tsx"
          code={`import { Button } from "@adamzerner/rfui-react";`}
        />
        <p>
          Then just use the component. I like to remove extraneous things from
          the file so that it looks like this:
        </p>
        <CodeBlock
          language="tsx"
          code={`import { Button } from "@adamzerner/rfui-react";

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
          After running <InlineCode>npm run dev</InlineCode>, visit{" "}
          <Link href="http://localhost:3000/">http://localhost:3000/</Link>{" "}
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
          Add <InlineCode>app.css</InlineCode> to the{" "}
          <InlineCode>public</InlineCode> directory.
        </p>
        <p>
          Add{" "}
          <InlineCode>
            {`{ rel: "stylesheet", href: getStylesheetUrl() }`}
          </InlineCode>{" "}
          to the end of the array returned by{" "}
          <InlineCode>{`export const links`}</InlineCode> in{" "}
          <InlineCode>app/root.tsx</InlineCode>.
        </p>
        <p>
          Add the following to set the default roundedness to large instead of
          small:
        </p>
        <CodeBlock
          language="css"
          code={`:root {
  --default-roundedness: var(--rounded-square);
}`}
        />
        <p>
          To see the changes be sure to do a{" "}
          <Link href="https://www.howtogeek.com/672607/how-to-hard-refresh-your-web-browser-to-bypass-your-cache/">
            hard refresh
          </Link>{" "}
          of your browser to bypass the cache.
        </p>
        <p>
          See the <Link href="/css-variables">"CSS variables"</Link>{" "}
          page for more information.
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
      </OL>
    </div>
  );
};
