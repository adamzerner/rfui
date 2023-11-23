import type { JSX } from "preact";
import { ComponentChild } from "preact";

/** *
 * @function Link
 *
 * @param newTab Sets `target="blank"` and `rel="noopener noreferrer"` to get the link to open in a new tab. Also adds an icon to the end to indicate this.
 * @param vetoNewTabIcon When `newTab` is `true`, if `vetoNewTabIcon` is also `true`, there won't be an icon.
 *
 * @example
 * <Link href="https://example.com">Example</Link>
 */
export const Link = (
  {
    href,
    newTab = false,
    vetoNewTabIcon = false,
    underline = "always",
    children,
    ...rest
  }: {
    href: string;
    newTab?: boolean;
    vetoNewTabIcon?: boolean;
    underline?: "always" | "hover" | "none";
    children: ComponentChild;
  } & JSX.HTMLAttributes<HTMLAnchorElement>,
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
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
};
