import { Link, LinkType } from "@/components/atoms/link.tsx";
import { Flex } from "@/components/helpers/flex.tsx";
import type { ComponentChild, JSX } from "preact";

export type NavbarType = {
  children: ComponentChild;
} & Omit<JSX.HTMLAttributes<HTMLDivElement>, "size">;

/*

TODO:
- Background
- Hover
- Active (de-emphasize non-active)

*/

/** *
 * @function Navbar
 *
 * @example
 * <Navbar></Navbar>
 */
export const Navbar = (
  {
    children,
    ...rest
  }: NavbarType,
) => {
  const [navbarLeft, navbarRight] = getComponents(children);
  const { class: restClass, ...restWithoutClass } = rest;
  let containerClass = "w-full bg-neutral-50";

  if (restClass) {
    containerClass += ` ${restClass}`;
  }

  return (
    <div class={containerClass} {...restWithoutClass}>
      <Flex class="justify-between w-full px-7">
        {navbarLeft && navbarLeft}
        {navbarRight && navbarRight}
      </Flex>
    </div>
  );
};

const getComponents = (children: ComponentChild) => {
  if (!Array.isArray(children)) {
    return [children];
  }

  const navbarLeft = children.find(
    (child) => child && child.type && child.type.name === "NavbarLeft",
  );

  const navbarRight = children.find(
    (child) => child && child.type && child.type.name === "NavbarRight",
  );

  if (!navbarLeft && !navbarRight) {
    return [<Flex class="gap-2">{children}</Flex>];
  }

  return [navbarLeft, navbarRight];
};

export const NavbarLeft = (
  { children }: { children: ComponentChild },
) => {
  return <Flex class="gap-2">{children}</Flex>;
};

export const NavbarRight = (
  { children }: { children: ComponentChild },
) => {
  return <Flex class="gap-2">{children}</Flex>;
};

export const NavbarItem = (
  { children, ...rest }:
    & { children: ComponentChild }
    & LinkType,
) => {
  const { class: restClass, ...restWithoutClass } = rest;
  let containerClass = "py-6 px-3 hover:border-b border-b-neutral-500";

  if (restClass) {
    containerClass += ` ${restClass}`;
  }

  return (
    <Link class={containerClass} underline="none" {...restWithoutClass}>
      {children}
    </Link>
  );
};
