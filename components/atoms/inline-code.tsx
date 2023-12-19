import type { JSX } from "preact";
import { ComponentChild } from "preact";

export type InlineCodeType = {
  children: ComponentChild;
} & JSX.HTMLAttributes<HTMLElement>;

/** *
 * @function InlineCode
 *
 * @see {@link https://rfui.deno.dev/atoms/inline-code}
 *
 * @example
 * <div>
 *   When I wrote <InlineCode>sayHello("John")</InlineCode> it didn't work.
 * </div>
 */
export const InlineCode = (
  {
    children,
    ...rest
  }: InlineCodeType,
) => {
  const { class: restClass, ...restWithoutClass } = rest;
  let className = "p-1 bg-neutral-50";

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
