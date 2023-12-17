import { ComponentChild, JSX } from "preact";

export type H2Type = {
  children: ComponentChild;
} & JSX.HTMLAttributes<HTMLHeadingElement>;

/** *
 * @function H1
 *
 * @example
 * <H2>Heading</H2>
 */
export const H2 = (
  {
    children,
    ...rest
  }: H2Type,
) => {
  const { class: restClass, ...restWithoutClass } = rest;
  let className = "text-2xl text-neutral-700 mt-8 mb-5 max-w-prose";

  if (restClass) {
    className += ` ${restClass}`;
  }

  return (
    <h2
      {...restWithoutClass}
      class={className}
    >
      {children}
    </h2>
  );
};
