import type { ComponentChild, ComponentProps } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import { Container } from "../../components/helpers/container.tsx";
import { Flex } from "../../components/helpers/flex.tsx";
import { ChevronDownIcon } from "../../components/icons/chevron-down.tsx";
import { ChevronUpIcon } from "../../components/icons/chevron-up.tsx";

export const NavbarDropdown = (
  { title, children, ...rest }:
    & { title: string; children: ComponentChild }
    & ComponentProps<"li">,
) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLLIElement>(null);
  const subMenuRef = useRef<HTMLLIElement>(null);
  const toggleMenu = () => {
    setIsMenuOpen((v) => !v);
  };
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Node;

    if (
      menuRef.current && !menuRef.current.contains(target) &&
      !(subMenuRef.current && subMenuRef.current.contains(target))
    ) {
      setIsMenuOpen(false);
    }
  };
  const { class: restClass, ...restWithoutClass } = rest;
  let containerClass =
    "relative inline-block border-b border-b-neutral-200 py-6 text-neutral-700 max-sm:hover:bg-neutral-100/50 sm:cursor-pointer sm:border-b-neutral-50";

  if (restClass) {
    containerClass += ` ${restClass}`;
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <li
        class={containerClass}
        ref={menuRef}
        onClick={toggleMenu}
        {...restWithoutClass}
      >
        {/* Desktop */}
        <div class="hidden sm:block">
          <span class="mr-1">{title}</span> {isMenuOpen
            ? (
              <ChevronUpIcon
                className="relative bottom-[2px]"
                strokeWidth={2}
              />
            )
            : <ChevronDownIcon strokeWidth={2} />}
        </div>
        {isMenuOpen && (
          <ul class="absolute left-0 top-[89px] z-10 hidden w-72 rounded border border-neutral-100 bg-[#fff] py-2 sm:block">
            {children}
          </ul>
        )}

        {/* Mobile */}
        <Container size="xl" class="block sm:hidden">
          <Flex class="block items-center justify-between sm:hidden">
            <span>{title}</span>
            {isMenuOpen
              ? <ChevronUpIcon className="mr-[2px] h-6 w-6" strokeWidth={1} />
              : (
                <ChevronDownIcon
                  className="mr-[2px] h-6 w-6"
                  strokeWidth={1}
                />
              )}
          </Flex>
        </Container>
      </li>
      {isMenuOpen && (
        <li ref={subMenuRef} class="block sm:hidden">
          <ul class="ml-8">{children}</ul>
        </li>
      )}
    </>
  );
};
