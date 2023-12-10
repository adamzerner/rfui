import { Link, LinkType } from "@/components/atoms/link.tsx";
import { Flex } from "@/components/helpers/flex.tsx";
import type { ComponentChild, JSX } from "preact";

export type NavbarType = {
  children: ComponentChild;
} & Omit<JSX.HTMLAttributes<HTMLElement>, "size">;

/*

TODO:
- Background
- Spacing (mess with `Container` component; check Bootstrap)
- Responsive
- Fix demo

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
  let containerClass = "w-full px-auto bg-neutral-50";

  if (restClass) {
    containerClass += ` ${restClass}`;
  }

  return (
    <nav class={containerClass} {...restWithoutClass}>
      <Flex class="justify-between w-full max-w-[1200px] mx-4 lg:mx-auto">
        {navbarLeft && navbarLeft}
        {navbarRight && navbarRight}
      </Flex>
    </nav>
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
    return [<Flex class="gap-6">{children}</Flex>];
  }

  return [navbarLeft, navbarRight];
};

export const NavbarLeft = (
  { children }: { children: ComponentChild },
) => {
  return <Flex class="gap-6">{children}</Flex>;
};

export const NavbarRight = (
  { children }: { children: ComponentChild },
) => {
  return <Flex class="gap-6">{children}</Flex>;
};

export const NavbarItem = (
  { isActive = false, children, ...rest }:
    & { isActive?: boolean; children: ComponentChild }
    & LinkType,
) => {
  const { class: restClass, ...restWithoutClass } = rest;
  let containerClass = "py-6 border-b";

  if (isActive) {
    containerClass += " border-b-primary-500 pointer-events-none";
  } else {
    containerClass +=
      " border-b-neutral-50 hover:border-b-neutral-500 text-neutral-700";
  }

  if (restClass) {
    containerClass += ` ${restClass}`;
  }

  return (
    <Link class={containerClass} underline="none" {...restWithoutClass}>
      {children}
    </Link>
  );
};
