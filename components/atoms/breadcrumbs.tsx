import type { ComponentChild, ComponentProps } from "preact";

export type BreadcrumbsType = {
  children: ComponentChild;
} & ComponentProps<"nav">;

/** *
 * @function Breadcrumbs
 *
 * @see {@link https://rfui.deno.dev/atoms/breadcrumbs}
 *
 * @example
 * <Blockquote>All models are wrong. Some models are useful.</Blockquote>
 */
export const Breadcrumbs = (
  {
    children,
    ...rest
  }: BreadcrumbsType,
) => {
  const { class: restClass, ...restWithoutClass } = rest;
  let className = "";

  if (restClass) {
    className += ` ${restClass}`;
  }

  return (
    <nav
      {...restWithoutClass}
      class={className}
    >
      {children}
    </nav>
  );
};
