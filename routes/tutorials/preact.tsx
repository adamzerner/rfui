import { CodeBlock } from "@/islands/atoms/code-block.tsx";
import { H1 } from "@/islands/atoms/h1.tsx";
import { H2 } from "@/islands/atoms/h2.tsx";
import { InlineCode } from "@/islands/atoms/inline-code.tsx";
import { Link } from "@/islands/atoms/link.tsx";
import { Text } from "@/islands/atoms/text.tsx";

export default () => {
  return (
    <div class="max-w-prose text-lg">
      <H1>Preact tutorial</H1>
      <Text>
        <p>
          This is a tutorial for using RFUI in a project that uses{" "}
          <Link href="https://preactjs.com/">Preact</Link>.
        </p>
      </Text>

      <H2 inPageLink="create-project">{"1) Create project"}</H2>
      <Text>
        <p>
          For this tutorial, please follow the instructions at{" "}
          <Link href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app">
            "Create a Vite-Powered Preact App"
          </Link>{" "}
          to create your Preact project.
        </p>
      </Text>

      <H2 inPageLink="add-css-file">{"2) Add CSS file"}</H2>
      <Text>
        <p>
          Create a <InlineCode>rfui.css</InlineCode> file in your{" "}
          <InlineCode>public</InlineCode> directory. Copy the contents of{" "}
          <Link href="https://rfui.deno.dev/rfui.css">
            https://rfui.deno.dev/rfui.css
          </Link>{" "}
          and paste them into your newly created{" "}
          <InlineCode>rfui.css</InlineCode> file.
        </p>
        <p>
          Then in <InlineCode>index.html</InlineCode> add:
        </p>
        <CodeBlock
          language="tsx"
          code={`<link rel="stylesheet" href="/rfui.css" />`}
        />
        <p>right before the:</p>
        <CodeBlock
          language="html"
          code={`<title>Vite + Preact</title>`}
        />
      </Text>
    </div>
  );
};
