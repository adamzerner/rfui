import { NewTabIcon } from "@/components/icons/new-tab-icon.tsx";
import type { JSX } from "preact";
import { ComponentChild } from "preact";

export type LinkType = {
  href: string;
  _newTab?: boolean;
  _includeNewTabIcon?: boolean;
  underline?: "always" | "hover" | "none";
  children: ComponentChild;
} & JSX.HTMLAttributes<HTMLAnchorElement>;

/** *
 * @function Link
 *
 * @param _newTab Sets `target="blank"` and `rel="noopener noreferrer"` to get the link to open in a new tab.
 *
 * Note: It is generally inadvisable to do this. See https://www.nngroup.com/articles/new-browser-windows-and-tabs/.
 * @param _includeNewTabIcon When `_newTab` is `true`, if `_includeNewTabIcon` is also `true`, there will be an icon at the end of the text indicating that the link will open in a new tab.
 *
 * @example
 * <Link href="https://example.com">Example</Link>
 */
export const Link = (
  {
    href,
    _newTab = false,
    _includeNewTabIcon = false,
    underline = "always",
    children,
    ...rest
  }: LinkType,
) => {
  let className = "cursor-pointer";

  className += " " + (() => {
    switch (underline) {
      case "always":
        return "underline";
      case "hover":
        return "hover:underline";
    }
  })();

  if (rest.class) {
    className += ` ${rest.class}`;
  }

  return (
    <a
      {...rest}
      href={href}
      class={className}
      target={_newTab ? "_blank" : undefined}
      rel={_newTab ? "noopener noreferrer" : undefined}
    >
      {children}
      {_newTab && _includeNewTabIcon && <NewTabIcon />}
    </a>
  );
};
