import type { ComponentProps } from "preact";
import { ChevronRightIcon } from "../icons/chevron-right.tsx";
import { Link } from "./link.tsx";

export type BreadcrumbsType = {
  links: BreadcrumbLink[];
} & ComponentProps<"nav">;

type BreadcrumbLink = {
  title: string;
  href: string;
};

/** *
 * @function Breadcrumbs
 *
 * @see {@link https://rfui.deno.dev/atoms/breadcrumbs}
 *
 * @example
 * <Breadcrumbs />
 */
export const Breadcrumbs = (
  {
    links,
    ...rest
  }: BreadcrumbsType,
) => {
  const { class: restClass, ...restWithoutClass } = rest;
  let className = "flex gap-2 align-middle";

  if (restClass) {
    className += ` ${restClass}`;
  }

  return (
    <nav
      {...restWithoutClass}
      class={className}
    >
      {links.map((link, i) => {
        const isLastLink = i === links.length - 1;

        return (
          <>
            {!isLastLink
              ? <Link href={link.href} underline="hover">{link.title}</Link>
              : <div>{link.title}</div>}
            {!isLastLink && <ChevronRightIcon />}
          </>
        );
      })}
    </nav>
  );
};
