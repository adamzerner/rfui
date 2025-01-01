import type { ComponentProps } from "preact";

export type BreadcrumbsType = {} & ComponentProps<"nav">;

/** *
 * @function Breadcrumbs
 *
 * @see {@link https://rfui.deno.dev/atoms/breadcrumbs}
 *
 * @example
 * <Breadcrumbs />
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
