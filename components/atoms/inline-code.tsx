import type { ComponentChild, ComponentProps } from "preact";

export type InlineCodeType = {
  children: ComponentChild;
} & ComponentProps<"code">;

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
  let className = "bg-neutral-50 p-0.5";

  if (restClass) {
    className += ` ${restClass}`;
  }

  return (
    <code
      class={className}
      {...restWithoutClass}
    >
      {children}
    </code>
  );
};
