import type { ComponentChild, ComponentProps } from "preact";
import { useState } from "preact/hooks";
import { Flex } from "../../../components/helpers/flex.tsx";
import { CloseIcon } from "../../../components/icons/close-icon.tsx";
import { HamburgerIcon } from "../../../components/icons/hamburger-icon.tsx";

export { VerticalNavbarBottom } from "../../../components/molecules/vertical-navbar/vertical-navbar-bottom.tsx";
export { VerticalNavbarItem } from "../../../components/molecules/vertical-navbar/vertical-navbar-item.tsx";
export { VerticalNavbarTop } from "../../../components/molecules/vertical-navbar/vertical-navbar-top.tsx";
export { VerticalNavbarSection } from "./vertical-navbar-section.tsx";

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
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen((v) => !v);
  };
  const { class: restClass, ...restWithoutClass } = rest;
  let containerClass =
    "px-3 py-2 text-neutral-900 max-sm:w-full max-sm:shrink-0 sm:sticky sm:top-0 sm:h-screen sm:min-w-[250px] sm:overflow-y-auto";

  containerClass += ` ${background === "neutral" ? "bg-neutral-50/75" : ""}`;

  if (restClass) {
    containerClass += ` ${restClass}`;
  }

  return (
    <nav class={containerClass} {...restWithoutClass}>
      {/* Desktop */}
      <div class="flex h-full flex-col justify-between max-sm:hidden">
        {children}
      </div>

      {/* Mobile */}
      <div class="sm:hidden">
        <HamburgerMenuToggle
          isOpen={isOpen}
          toggleHamburgerMenu={toggleIsOpen}
        />
        {isOpen && children}
      </div>
    </nav>
  );
};

const HamburgerMenuToggle = (
  { isOpen, toggleHamburgerMenu }: {
    isOpen: boolean;
    toggleHamburgerMenu: () => void;
  },
) => {
  return (
    <Flex
      class="cursor-pointer items-center gap-2 px-2 py-3 text-neutral-700"
      onClick={toggleHamburgerMenu}
    >
      {isOpen ? <CloseIcon className="outline-none" /> : (
        <>
          <HamburgerIcon class="!inline-block w-6" /> Menu
        </>
      )}
    </Flex>
  );
};
