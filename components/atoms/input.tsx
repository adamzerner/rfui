import type { JSX } from "preact";

// TODO: disabled, readonly, helper text, error text, invalid, required, focus state
/** *
 * @function Input
 * *
 * @example
 * <Input type="text" />
 */
export const Input = (
  {
    size = "md",
    rounded = "sm",
    ...rest
  }: {
    size?: "sm" | "md" | "lg";
    rounded?: "square" | "sm" | "lg" | "full";
  } & Omit<JSX.HTMLAttributes<HTMLInputElement>, "size">,
) => {
  let className = "border-1 border-neutral-300 px-2 py-1";

  className += " " + (() => {
    switch (rounded) {
      case "square":
        return "rounded-none";
      case "sm":
        return "rounded";
      case "lg":
        return "rounded-lg";
      case "full":
        return "rounded-full px-3";
    }
  })();

  if (rest.class) {
    className += ` ${rest.class}`;
  }

  return (
    <input
      {...rest}
      class={className}
    />
  );
};
