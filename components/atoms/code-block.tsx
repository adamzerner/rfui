import type { ComponentProps } from "preact";
import { useEffect } from "preact/hooks";

export type CodeBlockType = {
  code: string;
  language?: string;
} & ComponentProps<"pre">;

/** *
 * @function CodeBlock
 *
 * Preserving whitespace and line breaks is a little tricky. In short, just try to follow the example below and make sure you use a [template string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) instead of a normal string.
 *
 * @see {@link https://rfui.deno.dev/atoms/code-block}
 *
 * @param language - See {@link https://prismjs.com/index.html#supported-languages}. And make sure when you download Prism that you check off the languages you need.
 *
 * @example
 * <CodeBlock
    language="ts"
    code={`const firstName = 'John';
const lastName = 'Doe';
const fullName = firstName + " " + lastName;`}
/>
 */
export const CodeBlock = (
  {
    code,
    language,
    ...rest
  }: CodeBlockType,
) => {
  const { class: restClass, ...restWithoutClass } = rest;
  let className = "block whitespace-pre-wrap bg-neutral-50 p-5";

  if (language) {
    className += ` language-${language}`;
  }

  if (restClass) {
    className += ` ${restClass}`;
  }

  useEffect(() => {
    if (language) {
      // @ts-expect-error it exists
      Prism.highlightAll();
    }
  });

  return <pre class={className} {...restWithoutClass}><code>{code}</code></pre>;
};
