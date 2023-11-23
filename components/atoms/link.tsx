import type { JSX } from "preact";
import { ComponentChild } from "preact";

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
  }: {
    href: string;
    _newTab?: boolean;
    _includeNewTabIcon?: boolean;
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
      target={_newTab ? "_blank" : undefined}
      rel={_newTab ? "noopener noreferrer" : undefined}
    >
      {children} {_newTab && _includeNewTabIcon && <NewTabIcon />}
    </a>
  );
};

// https://ux.stackexchange.com/a/55424/39046
const NewTabIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="w-4 inline relative bottom-[1px] underline"
    >
      <path
        style={{ fill: "#0d2b3e" }}
        d="M12 8a1 1 0 0 1-1 1H5v10h10v-6a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h6a1 1 0 0 1 1 1z"
      >
      </path>
      <path
        style={{ fill: "#0d2b3e" }}
        d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41z"
      >
      </path>
    </svg>
  );
};
