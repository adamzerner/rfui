import type { ComponentChild, ComponentProps } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import { ChevronDownIcon } from "../../components/icons/chevron-down.tsx";
import { ChevronUpIcon } from "../../components/icons/chevron-up.tsx";

export const NavbarDropdown = (
  { title, children, ...rest }:
    & { title: string; children: ComponentChild }
    & ComponentProps<"li">,
) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLLIElement>(null);
  const toggleMenu = () => {
    setIsMenuOpen((v) => !v);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };
  const { class: restClass, ...restWithoutClass } = rest;
  let containerClass =
    "relative hidden cursor-pointer border-b border-b-neutral-200 text-neutral-700 max-sm:hover:bg-neutral-100/50 sm:inline-block sm:border-b-neutral-50";

  if (restClass) {
    containerClass += ` ${restClass}`;
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // For `size="xl"` below it doesn't matter that `"xl"` might not be accurate
  return (
    <>
      {/* Mobile */}
      {children}
      {/* Desktop */}
      <li class={containerClass} {...restWithoutClass} ref={menuRef}>
        <div
          class="hidden py-6 sm:inline-block"
          onClick={toggleMenu}
        >
          <div>
            <span class="mr-1">{title}</span> {isMenuOpen
              ? <ChevronUpIcon class="relative bottom-[2px]" />
              : <ChevronDownIcon />}
          </div>
          {isMenuOpen && (
            <ul class="absolute left-0 top-[89px] w-72 rounded border border-neutral-100 py-2">
              {children}
            </ul>
          )}
        </div>
      </li>
    </>
  );
};
