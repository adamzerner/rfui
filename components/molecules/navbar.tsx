import type { ComponentChild, JSX } from "preact";
import { Link } from "../atoms/link.tsx";
import { Container, type ContainerType } from "../helpers/container.tsx";
import { Flex } from "../helpers/flex.tsx";
import { Stack } from "../helpers/stack.tsx";
import { ChevronRightIcon } from "../icons/chevron-right.tsx";

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
 * <Navbar size="xl">
 *  <NavbarLeft>
 *    <NavbarItem href="https://one.com">One</NavbarItem>
 *    <NavbarItem href="https://two.com">Two</NavbarItem>
 *   </NavbarLeft>
 * </Navbar>
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
  const { navbarLeft, navbarRight, numItems } = getComponents(children);
  const { class: restClass, ...restWithoutClass } = rest;
  let containerClass = "w-full px-auto";

  if (sticky) {
    containerClass += " sm:sticky sm:top-0 sm:left-0 sm:z-10";
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
      {/* Mobile */}
      {numItems < 5
        ? (
          <Stack class="sm:hidden">
            {navbarLeft && navbarLeft}
            {navbarRight && navbarRight}
          </Stack>
        )
        : <div>Hamburger</div>}

      {/* Desktop */}
      <Container size={size} class="hidden sm:block">
        <Flex class="justify-between">
          {navbarLeft && navbarLeft}
          {navbarRight && navbarRight}
        </Flex>
      </Container>
    </nav>
  );
};

// deno-lint-ignore no-explicit-any
const getComponents = (children: any) => {
  if (!Array.isArray(children)) {
    const numItems = Array.isArray(children.props.children)
      ? children.props.children.length
      : 1;

    return { navbarLeft: children, numItems };
  }

  const navbarLeft = children.find(
    (child) => child && child.type && child.type.name === NavbarLeft.name,
  );

  const navbarRight = children.find(
    (child) => child && child.type && child.type.name === NavbarRight.name,
  );

  if (!navbarLeft && !navbarRight) {
    throw new Error(
      "`NavbarLeft` or `NavbarRight` is needed if you pass an array of elements to `Navbar` as `children`.",
    );
  }

  const numLeftItems = navbarLeft
    ? Array.isArray(navbarLeft.props.children)
      ? navbarLeft.props.children.length
      : 1
    : 0;
  const numRightItems = navbarRight
    ? Array.isArray(navbarRight.props.children)
      ? navbarRight.props.children.length
      : 1
    : 0;
  const numItems = numLeftItems + numRightItems;

  return { navbarLeft, navbarRight, numItems };
};

export const NavbarLeft = (
  { children }: { children: ComponentChild },
) => {
  return (
    <ul class="flex flex-col sm:flex-row items-stretch sm:gap-6">{children}</ul>
  );
};

export const NavbarRight = (
  { children }: { children: ComponentChild },
) => {
  return (
    <ul class="flex flex-col sm:flex-row items-stretch sm:gap-6">
      {children}
    </ul>
  );
};

export const NavbarItem = (
  { href, isActive = false, children, ...rest }:
    & { href: string; isActive?: boolean; children: ComponentChild }
    & JSX.HTMLAttributes<HTMLLIElement>,
) => {
  const { class: restClass, ...restWithoutClass } = rest;
  let containerClass =
    "inline-block border-b border-b-neutral-200 sm:border-b-neutral-50 max-sm:hover:bg-neutral-100/50";

  if (isActive) {
    containerClass +=
      " font-bold pointer-events-none sm:font-normal sm:border-b-primary-500 max-sm:bg-neutral-100";
  } else {
    containerClass += " sm:hover:border-b-neutral-500 text-neutral-700";
  }

  if (restClass) {
    containerClass += ` ${restClass}`;
  }

  // For `size="xl"` below it doesn't matter that `"xl"` might not be accurate
  return (
    <li class={containerClass} {...restWithoutClass}>
      {/* Mobile */}
      <Container size="xl" class="block sm:hidden">
        <Link
          href={href}
          underline="none"
          aria-current={isActive ? "page" : undefined}
          class="py-6 flex items-center justify-between"
        >
          <div>{children}</div>
          <ChevronRightIcon class="relative top-px" />
        </Link>
      </Container>

      {/* Desktop */}
      <Link
        href={href}
        underline="none"
        class="py-6 hidden sm:inline-block"
        aria-current={isActive ? "page" : undefined}
      >
        {children}
      </Link>
    </li>
  );
};
