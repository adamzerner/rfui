import type { ComponentChild, ComponentProps } from "preact";

export type HighlightType = {
  children: ComponentChild;
} & ComponentProps<"mark">;

/** *
 * @function Highlight
 *
 * @see {@link https://rfui.deno.dev/atoms/highlight}
 *
 * @example
 * <div>Lorem ipsum <Highlight>dolor</Highlight> sit amet, consectetur.</div>
 */
export const Highlight = (
  {
    children,
    ...rest
  }: HighlightType,
) => {
  const { class: restClass, ...restWithoutClass } = rest;
  let className = "bg-primary-100";

  if (restClass) {
    className += ` ${restClass}`;
  }

  return (
    <mark
      class={className}
      {...restWithoutClass}
    >
      {children}
    </mark>
  );
};
