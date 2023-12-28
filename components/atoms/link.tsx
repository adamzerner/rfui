import type { JSX } from "preact";
import { ComponentChild } from "preact";
import { NewTabIcon } from "../icons/new-tab-icon.tsx";

export type LinkType = {
  href: string;
  underline?: "always" | "hover" | "none";
  _newTab?: boolean;
  _includeNewTabIcon?: boolean;
  children: ComponentChild;
} & JSX.HTMLAttributes<HTMLAnchorElement>;

/** *
 * @function Link
 *
 * @see {@link https://rfui.deno.dev/atoms/link}
 *
 * @example
 * <Link href="https://example.com">Example</Link>
 */
export const Link = (
  {
    href,
    underline = "always",
    _newTab = false,
    _includeNewTabIcon = false,
    children,
    ...rest
  }: LinkType,
) => {
  const { class: restClass, ...restWithoutClass } = rest;
  let className = "cursor-pointer";

  className += " " + (() => {
    switch (underline) {
      case "always":
        return "underline";
      case "hover":
        return "hover:underline";
    }
  })();

  if (restClass) {
    className += ` ${restClass}`;
  }

  return (
    <a
      href={href}
      class={className}
      target={_newTab ? "_blank" : undefined}
      rel={_newTab ? "noopener noreferrer" : undefined}
      {...restWithoutClass}
    >
      {children}
      {_newTab && _includeNewTabIcon && <NewTabIcon />}
    </a>
  );
};
