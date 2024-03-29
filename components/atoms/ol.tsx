import type { ComponentChild, ComponentProps } from "preact";

export type OLType = {
  bulletLocation?: "inside" | "outside";
  children: ComponentChild;
} & ComponentProps<"ol">;

/** *
 * @function OL
 *
 * @see {@link https://rfui.deno.dev/atoms/ol}
 *
 * @example
 * <OL>
 *   <li>First</li>
 *   <li>Second</li>
 *   <li>Third</li>
 * </OL>
 */
export const OL = (
  {
    bulletLocation = "inside",
    children,
    ...rest
  }: OLType,
) => {
  const { class: restClass, ...restWithoutClass } = rest;
  let className = "flex list-decimal flex-col gap-2";

  className += ` ${
    bulletLocation === "inside" ? "list-inside" : "list-outside"
  }`;

  if (restClass) {
    className += ` ${restClass}`;
  }

  return (
    <ol
      class={className}
      {...restWithoutClass}
    >
      {children}
    </ol>
  );
};
