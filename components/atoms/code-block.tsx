import type { JSX } from "preact";

export type CodeBlockType = {
  code: string;
  language?: string;
} & JSX.HTMLAttributes<HTMLPreElement>;

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
  let className = "block p-5 bg-[#f5f2f0] whitespace-pre-wrap";

  if (language) {
    className += ` language-${language}`;
  }

  if (restClass) {
    className += ` ${restClass}`;
  }

  return <pre {...restWithoutClass} class={className}><code>{code}</code></pre>;
};
