import { Checkbox } from "@/components/atoms/checkbox.tsx";
import { CodeBlock } from "@/components/atoms/code-block.tsx";
import { H1 } from "@/components/atoms/h1.tsx";
import { InlineCode } from "@/components/atoms/inline-code.tsx";
import { Link } from "@/components/atoms/link.tsx";
import { Text } from "@/components/atoms/text.tsx";
import { Card } from "@/components/molecules/card.tsx";

export default () => {
  return (
    <div class="max-w-prose text-lg">
      <H1>Stylesheet</H1>
      <Text>
        <p>
          Without RFUI's stylesheet the RFUI components will be unstyled. For
          example, if you don't have the stylesheet,{" "}
          <InlineCode>Checkbox</InlineCode> will look like this:
        </p>
        <Card>
          <input type="checkbox" />
        </Card>
        <p>instead of this:</p>
        <Card>
          <Checkbox />
        </Card>
        <p>
          To ensure the components look as they are intended to look, you will
          need the stylesheet.
        </p>
        <p>
          Each version of RFUI has it's own stylesheet. For example, v0.1.12 has
          {" "}
          <InlineCode>https://rfui.deno.dev/rfui-v0-1-12.css</InlineCode>. So
          the simplest thing to do is probably:
        </p>
        <CodeBlock
          language="html"
          code={`<link
  rel="stylesheet"
  href="https://rfui.deno.dev/rfui-v0-1-12.css"
/>`}
        />
        <p>
          But then you'll have to remember to update this when you upgrade to a
          new version of RFUI. For example, if you upgrade to v0.1.13 of RFUI
          you'll neeed{" "}
          <InlineCode>https://rfui.deno.dev/rfui-v0-1-13.css</InlineCode>. It
          can be easy to forget to do this.
        </p>
        <p>
          So an alternative is to use RFUI's{" "}
          <InlineCode>getStylesheetUrl</InlineCode>{" "}
          function. If you are on v0.1.12 of RFUI,{" "}
          <InlineCode>getStylesheetUrl</InlineCode> will return{" "}
          <InlineCode>"https://rfui.deno.dev/rfui-v0-1-12.css"</InlineCode>. So
          then, if you want to "set it and forget it", you can do something like
          this:
        </p>
        <CodeBlock
          language="tsx"
          code={`import { getStylesheetUrl } from "rfui";

<link rel="stylesheet" href={getStylesheetUrl()} />`}
        />
        <p>
          Then when you upgrade to v0.1.13,{" "}
          <InlineCode>getStylesheetUrl</InlineCode> will return{" "}
          <InlineCode>https://rfui.deno.dev/rfui-v0-1-13.css</InlineCode>{" "}
          and you will have the correct CSS file without needing to make any
          changes.
        </p>
        <p>
          Be sure to think about which CSS rules take{" "}
          <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade">
            precedence
          </Link>{" "}
          over other CSS rules. Ie. if you have custom styles of your own, do
          you want them to take precedence over RFUI's styles? If so you'll
          probably want to place the <InlineCode>{`<link>`}</InlineCode>{" "}
          tag underneath{" "}
          <InlineCode>
            {`<link rel="stylesheet" href={getStylesheetUrl()} />`}
          </InlineCode>{" "}
          and give your rules the appropriate{" "}
          <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity">
            specificity
          </Link>.
        </p>
      </Text>
    </div>
  );
};
