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

export const VerticalNavbar = (
  { background = "neutral", children, ...rest }: VerticalNavbarType,
) => {
  const { class: restClass, ...restWithoutClass } = rest;
  let containerClass =
    "flex flex-col justify-between px-3 py-2 text-neutral-900 max-sm:w-full max-sm:shrink-0 sm:sticky sm:top-0 sm:h-screen sm:min-w-[250px] sm:overflow-y-auto";

  containerClass += ` ${background === "neutral" ? "bg-neutral-50/75" : ""}`;

  if (restClass) {
    containerClass += ` ${restClass}`;
  }

  return (
    <nav class={containerClass} {...restWithoutClass}>
      {children}
    </nav>
  );
};
