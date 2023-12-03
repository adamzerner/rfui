import { ComponentChild, JSX } from "preact";

/** *
 * @function Select
 *
 * @example
 * <Select></Select>
 */
export const Select = (
  {
    size = "md",
    rounded = "sm",
    invalid = false,
    children,
    ...rest
  }: {
    size?: "sm" | "md" | "lg";
    rounded?: "square" | "sm" | "lg" | "full";
    invalid?: boolean;
    children?: ComponentChild;
  } & Omit<JSX.HTMLAttributes<HTMLSelectElement>, "size">,
) => {
  let className =
    "border border-neutral-300 px-2 py-1 focus:outline-none focus:border-neutral-700 focus:shadow-sm";

  className += " " + (() => {
    switch (rounded) {
      case "square":
        return "rounded-none";
      case "sm":
        return "rounded";
      case "lg":
        return "rounded-lg";
    }
  })();

  if (rest.disabled) {
    className += " cursor-not-allowed bg-neutral-50";
  }

  if (rest.readOnly || rest.readonly) {
    className += " cursor-not-allowed";
  }

  if (invalid) {
    className +=
      " border-supporting-red-300 bg-supporting-red-50 text-supporting-red-900 focus:border-supporting-red-700";
  }

  if (rest.class) {
    className += ` ${rest.class}`;
  }

  return (
    <select
      {...rest}
      class={className}
    >
      {children}
    </select>
  );
};
