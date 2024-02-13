import { ComponentChild, JSX } from "preact";

export type H1Type = {
  children: ComponentChild;
} & JSX.IntrinsicElements["h1"];

/** *
 * @function H1
 *
 * @see {@link https://rfui.deno.dev/atoms/h1}
 *
 * @example
 * <H1>Heading</H1>
 */
export const H1 = (
  {
    children,
    ...rest
  }: H1Type,
) => {
  const { class: restClass, ...restWithoutClass } = rest;
  let className = "text-4xl text-neutral-700 mt-9 mb-7 max-w-prose";

  if (restClass) {
    className += ` ${restClass}`;
  }

  return (
    <h1
      class={className}
      {...restWithoutClass}
    >
      {children}
    </h1>
  );
};
