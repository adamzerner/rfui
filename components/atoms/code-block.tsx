import type { JSX } from "preact";
import { ComponentChild } from "preact";

export type CodeBlockType = {
  children: ComponentChild;
} & JSX.HTMLAttributes<HTMLPreElement>;

/** *
 * @function CodeBlock
 *
 * @example
 * <CodeBlock>const name = 'foo';</CodeBlock>
 */
export const CodeBlock = (
  {
    children,
    ...rest
  }: CodeBlockType,
) => {
  const { class: restClass, ...restWithoutClass } = rest;
  let className = "block p-5 bg-neutral-300";

  if (restClass) {
    className += ` ${restClass}`;
  }

  return (
    <pre
      {...restWithoutClass}
      class={className}
    >
      <code>{children}</code>
    </pre>
  );
};
