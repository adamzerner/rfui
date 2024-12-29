import type { ComponentChild, ComponentProps } from "preact";
import { useState } from "preact/hooks";
import {
  Container,
  type ContainerType,
} from "../../../components/helpers/container.tsx";
import { Flex } from "../../../components/helpers/flex.tsx";
import { Stack } from "../../../components/helpers/stack.tsx";
import { CloseIcon } from "../../../components/icons/close-icon.tsx";
import { HamburgerIcon } from "../../../components/icons/hamburger-icon.tsx";
import { getComponents } from "../../../components/molecules/navbar/get-components.tsx";

export { NavbarDropdownItem } from "../../../components/molecules/navbar/navbar-dropdown-item.tsx";
export { NavbarItem } from "../../../components/molecules/navbar/navbar-item.tsx";
export { NavbarLeft } from "../../../components/molecules/navbar/navbar-left.tsx";
export { NavbarRight } from "../../../components/molecules/navbar/navbar-right.tsx";
export { NavbarDropdown } from "./navbar-dropdown.tsx";
export { NavbarMegamenu } from "./navbar-megamenu.tsx";

export type NavbarType = {
  size?: ContainerType["size"];
  background?: "neutral" | "none";
  sticky?: boolean;
  children: ComponentChild;
} & Omit<ComponentProps<"nav">, "size">;

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
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const toggleHamburgerMenu = () => {
    setIsHamburgerMenuOpen((v) => !v);
  };
  const { navbarLeft, navbarRight, numItems } = getComponents(children);
  const hasHamburgerMenu = true;
  const { class: restClass, ...restWithoutClass } = rest;
  let containerClass = "px-auto w-full";

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
      {/* Desktop */}
      <Container size={size} class="hidden sm:block">
        <Flex class="justify-between">
          {navbarLeft && navbarLeft}
          {navbarRight && navbarRight}
        </Flex>
      </Container>

      {/* Mobile */}
      <Stack class="sm:hidden">
        <Flex
          class="cursor-pointer items-center gap-2 border-b border-b-neutral-200 px-6 py-6 text-neutral-700 hover:bg-neutral-100/50"
          onClick={toggleHamburgerMenu}
        >
          {isHamburgerMenuOpen ? <CloseIcon className="outline-none" /> : (
            <>
              <HamburgerIcon class="!inline-block w-6" /> Menu
            </>
          )}
        </Flex>
        {(!hasHamburgerMenu || (hasHamburgerMenu && isHamburgerMenuOpen)) &&
          navbarLeft && navbarLeft}
        {(!hasHamburgerMenu || (hasHamburgerMenu && isHamburgerMenuOpen)) &&
          navbarRight && navbarRight}
      </Stack>
    </nav>
  );
};
