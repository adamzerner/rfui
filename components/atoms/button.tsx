import type { JSX } from "preact";
import { ComponentChild } from "preact";

/**
 * This is a description of the `sayHello` function.
 *
 * @function Button
 * @example
 * <Button type="primary">Submit</Button>
 */

export const Button = (
  { kind, block = false, children, ...rest }: {
    kind: "primary" | "secondary" | "tertiary";
    block?: boolean;
    children: ComponentChild;
  } & JSX.HTMLAttributes<HTMLButtonElement>,
) => {
  let className = "h-14 sm:h-auto";

  className += kind === "primary"
    ? " bg-primary-500 text-primary-50 rounded-md hover:bg-primary-400"
    : kind === "secondary"
    ? " border-1 border-neutral-500 rounded-md hover:bg-neutral-100"
    : " underline";

  if (block) {
    className += " block py-2 px-5";
  }

  if (rest.class) {
    className += ` ${rest.class}`;
  }

  return (
    <button {...rest} class={className}>
      {children}
    </button>
  );
};
