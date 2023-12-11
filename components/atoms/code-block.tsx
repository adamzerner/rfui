import type { JSX } from "preact";
import { ComponentChild } from "preact";

export type CodeBlockType = {
  children: ComponentChild;
} & JSX.HTMLAttributes<HTMLElement>;

/** *
 * @function CodeBlock
 *
 * @example
 * <CodeBlock>
{`const firstName = 'John';
const lastName = 'Doe';
const fullName = firstName + " " + lastName;
`}
  </CodeBlock>
 */
export const CodeBlock = (
  {
    children,
    ...rest
  }: CodeBlockType,
) => {
  const { class: restClass, ...restWithoutClass } = rest;
  let className = "block p-5 bg-neutral-50 whitespace-pre-wrap";

  if (restClass) {
    className += ` ${restClass}`;
  }

  return (
    <code
      {...restWithoutClass}
      class={className}
    >
      {children}
    </code>
  );
};
