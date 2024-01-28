import type { ComponentChild, JSX } from "preact";
import { Container, type ContainerType } from "../../helpers/container.tsx";
import { Flex } from "../../helpers/flex.tsx";
import { Stack } from "../../helpers/stack.tsx";
import { getComponents } from "./get-components.tsx";

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
        : <div class="sm:hidden">Hamburger</div>}

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
