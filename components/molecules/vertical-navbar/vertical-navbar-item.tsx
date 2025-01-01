import type { ComponentChild } from "preact";
import { Link } from "../../atoms/link.tsx";

export const VerticalNavbarItem = (
  { href, isActive, children }: {
    href: string;
    isActive: boolean;
    children: ComponentChild;
  },
) => {
  let containerClass = "my-2 block rounded px-3 py-2";

  containerClass += ` ${isActive ? "font-bold" : "hover:bg-neutral-100"}`;

  return (
    isActive ? <div class={containerClass}>{children}</div> : (
      <Link
        href={href}
        class={containerClass}
        underline="none"
      >
        {children}
      </Link>
    )
  );
};
