import type { ComponentChild, ComponentProps } from "preact";

export type BlockquoteType = {
  children: ComponentChild;
} & ComponentProps<"blockquote">;

/** *
 * @function Blockquote
 *
 * @see {@link https://rfui.deno.dev/atoms/blockquote}
 *
 * @example
 * <Blockquote>All models are wrong. Some models are useful.</Blockquote>
 */
export const Blockquote = (
  {
    children,
    ...rest
  }: BlockquoteType,
) => {
  const { class: restClass, ...restWithoutClass } = rest;
  let className =
    "flex flex-col gap-3 border-l border-neutral-300 pl-5 text-neutral-700";

  if (restClass) {
    className += ` ${restClass}`;
  }

  return (
    <blockquote
      {...restWithoutClass}
      class={className}
    >
      {children}
    </blockquote>
  );
};
