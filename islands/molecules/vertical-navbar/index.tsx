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
  let containerClass =
    "sticky top-0 flex h-screen min-w-[250px] flex-col justify-between px-3 py-2 text-neutral-900";

  containerClass += ` ${background === "neutral" ? "bg-neutral-50/75" : ""}`;

  if (restClass) {
    containerClass += ` ${restClass}`;
  }

  return <nav class={containerClass} {...restWithoutClass}></nav>;
};
