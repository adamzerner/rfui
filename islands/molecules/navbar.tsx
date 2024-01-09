import type { ComponentChild, JSX } from "preact";
import { Link, LinkType } from "../atoms/link.tsx";
import type { ContainerType } from "../helpers/container.tsx";
import { Container } from "../helpers/container.tsx";
import { Flex } from "../helpers/flex.tsx";

export type NavbarType = {
  size?: ContainerType["size"];
  background?: "neutral" | "none";
  sticky?: boolean;
  children: ComponentChild;
} & Omit<JSX.HTMLAttributes<HTMLElement>, "size">;

/** *
 * @function Navbar
 *
 * @see {@link https://rfui.deno.dev/molecules/navbar}
 *
 * @example
 * <Navbar></Navbar>
 */
export const Navbar = (
  {
    size,
    background = "neutral",
    sticky = false,
    children,
    ...rest
  }: NavbarType,
) => {
  const { navbarLeft, navbarRight } = getComponents(children);
  const { class: restClass, ...restWithoutClass } = rest;
  let containerClass = "w-full px-auto";

  if (sticky) {
    containerClass += " sticky top-0 left-0";
  }

  containerClass += " " + (() => {
    switch (background) {
      case "neutral":
        return "bg-neutral-50";
      case "none":
        return "border-b border-b-neutral-100";
    }
  })();

  if (restClass) {
    containerClass += ` ${restClass}`;
  }

  return (
    <nav class={containerClass} {...restWithoutClass}>
      <Container size={size}>
        <Flex class="justify-between w-full">
          {navbarLeft && navbarLeft}
          {navbarRight && navbarRight}
        </Flex>
      </Container>
    </nav>
  );
};

// deno-lint-ignore no-explicit-any
const getComponents = (props: any) => {
  const children = props?.type?.name === "ServerComponent"
    ? props.props.children
    : props;

  if (!Array.isArray(children)) {
    return { navbarLeft: children };
  }

  const navbarLeft = children.find(
    (child) => child && child.type && child.type.name === NavbarLeft.name,
  );

  const navbarRight = children.find(
    (child) => child && child.type && child.type.name === NavbarRight.name,
  );

  if (!navbarLeft && !navbarRight) {
    return { navbarLeft: <Flex class="gap-6">{children}</Flex> };
  }

  if (!navbarLeft && !navbarRight) {
    throw new Error(
      "`NavbarLeft` or `NavbarRight` is needed if you pass an array of elements to `Navbar` as `children`.",
    );
  }

  return { navbarLeft, navbarRight };
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
