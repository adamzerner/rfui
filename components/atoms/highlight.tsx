import type { JSX } from "preact";
import { ComponentChild } from "preact";

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
  }: {
    children: ComponentChild;
  } & JSX.HTMLAttributes<HTMLUnknownElement>,
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
