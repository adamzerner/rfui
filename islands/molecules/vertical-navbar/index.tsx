import type { ComponentChild, ComponentProps } from "preact";

export type VerticalNavbarType = {
  background?: "neutral" | "none";
  children: ComponentChild;
} & Omit<ComponentProps<"nav">, "size">;

/** *
 * @function VerticalNavbar
 *
 * @see {@link https://rfui.deno.dev/molecules/vertical-navbar}
 *
 * @example
 */

export const VerticalNavbar = ({ background = "neutral", ...rest }) => {
  const { class: restClass, ...restWithoutClass } = rest;
  let containerClass = "flex h-screen flex-col justify-between";

  if (restClass) {
    containerClass += ` ${restClass}`;
  }

  return <nav class={containerClass} {...restWithoutClass}></nav>;
};
