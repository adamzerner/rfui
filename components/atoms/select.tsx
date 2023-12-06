import { ComponentChild, JSX } from "preact";

/** *
 * @function Select
 *
 * Doesn't really have readonly: https://stackoverflow.com/q/368813/1927876
 *
 * @example
 * <Select>
 *   <option value="foo">foo</option>
 *   <option value="bar">bar</option>
 *   <option value="baz">baz</option>
 * </Select>
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
    "border border-neutral-500 bg-[#fff] px-2 py-1 cursor-pointer focus:outline-none focus:border-neutral-900 focus:shadow-sm";

  className += " " + (() => {
    switch (size) {
      case "sm":
        return "px-2 text-sm";
      case "md":
        return "px-2 py-2";
      case "lg":
        return "px-3 py-3 text-lg";
    }
  })();

  className += " " + (() => {
    switch (rounded) {
      case "square":
        return "rounded-none";
      case "sm":
        return "rounded";
      case "lg":
        return "rounded-lg";
      case "full":
        return "rounded-full";
    }
  })();

  if (rest.disabled) {
    className += " cursor-not-allowed bg-neutral-50";
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
