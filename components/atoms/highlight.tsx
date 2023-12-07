import type { JSX } from "preact";
import { ComponentChild } from "preact";

export type HighlightType = {
  children: ComponentChild;
} & JSX.HTMLAttributes<HTMLUnknownElement>;

/** *
 * @function Highlight
 *
 * @example
 * <div>Lorem ipsum <Highlight>dolor</Highlight> sit amet, consectetur.</div>
 */
export const Highlight = (
  {
    children,
    ...rest
  }: HighlightType,
) => {
  let className = "bg-primary-100";

  if (rest.class) {
    className += ` ${rest.class}`;
  }

  return (
    <mark
      {...rest}
      class={className}
    >
      {children}
    </mark>
  );
};
