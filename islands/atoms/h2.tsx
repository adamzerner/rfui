import { ComponentChild, JSX } from "preact";
import { Link } from "./link.tsx";

export type H2Type = {
  inPageLink?: string;
  children: ComponentChild;
} & JSX.HTMLAttributes<HTMLHeadingElement>;

/** *
 * @function H1
 *
 * @see {@link https://rfui.deno.dev/atoms/h2}
 *
 * @example
 * <H2>Heading</H2>
 */
export const H2 = (
  {
    inPageLink,
    children,
    ...rest
  }: H2Type,
) => {
  const { class: restClass, ...restWithoutClass } = rest;
  let className = "text-2xl text-neutral-700 mt-8 mb-5 max-w-prose";

  if (restClass) {
    className += ` ${restClass}`;
  }

  if (inPageLink) {
    return (
      <h2 id={inPageLink} class={className} {...restWithoutClass}>
        <Link href={`#${inPageLink}`} underline="hover">{children}</Link>
      </h2>
    );
  }

  return (
    <h2
      class={className}
      {...restWithoutClass}
    >
      {children}
    </h2>
  );
};
