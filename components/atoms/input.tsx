import type { JSX } from "preact";

// TODO: type
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
    invalid = false,
    ...rest
  }: {
    size?: "sm" | "md" | "lg";
    rounded?: "square" | "sm" | "lg" | "full";
    invalid?: boolean;
  } & Omit<JSX.HTMLAttributes<HTMLInputElement>, "size">,
) => {
  let className =
    "border-1 border-neutral-300 px-2 py-1 focus:outline-none focus:border-neutral-700 focus:shadow-sm";

  className += " " + (() => {
    switch (size) {
      case "sm":
        return "px-2 text-sm";
      case "md":
        return "px-2 py-1";
      case "lg":
        return "px-3 py-2 text-lg";
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
        return "rounded-full px-3";
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
    <input
      {...rest}
      class={className}
    />
  );
};
