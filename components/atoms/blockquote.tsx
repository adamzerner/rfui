import type { JSX } from "preact";
import { ComponentChild } from "preact";

export type BlockquoteType = {
  children: ComponentChild;
} & JSX.IntrinsicElements["blockquote"];

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
    "border-l border-neutral-300 pl-5 text-neutral-700 flex flex-col gap-3";

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
