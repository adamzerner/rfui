import type { JSX } from "preact";
import { ComponentChild } from "preact";

export type ButtonType = {
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "danger-primary"
    | "danger-secondary"
    | "danger-tertiary";
  size?: "sm" | "md" | "lg" | "block";
  rounded?: "square" | "sm" | "lg" | "full";
  isLoading?: boolean;
  loadingContent?: string;
  children: ComponentChild;
} & Omit<JSX.HTMLAttributes<HTMLButtonElement>, "icon" | "size">;

/** *
 * @function Button
 *
 * @see {@link https://rfui.deno.dev/atoms/button}
 *
 * @param icon An icon that will be placed to the left of the button's text. Placing it to the left as opposed to the right is a best practice. See https://ux.stackexchange.com/q/56023/39046.
 * @param _rightIcon An icon that will be placed to the right of the button's text. Typically not a good idea, but useful for something like "Next →".
 *
 * @example
 * <Button type="primary">Submit</Button>
 * <Button isLoading loadingContent="Submitting...">Submit</Button>
 */
export const Button = (
  {
    variant = "secondary",
    size = "md",
    rounded = "sm",
    isLoading = false,
    loadingContent,
    children,
    ...rest
  }: ButtonType,
) => {
  const { class: restClass, ...restWithoutClass } = rest;
  let className = "font-semibold";

  className += " " + (() => {
    switch (size) {
      case "sm":
        return "px-2 py-1";
      case "md":
        return "px-3 py-2";
      case "lg":
        return "px-4 py-3";
      case "block":
        return "w-full px-4 py-2";
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

  className += " " + (() => {
    if (rest.disabled || isLoading) {
      return "cursor-not-allowed bg-neutral-50 text-neutral-300 border-none";
    } else {
      switch (variant) {
        case "primary":
          return "bg-primary-700 text-[#fff] hover:bg-primary-800 active:bg-primary-900";
        case "secondary":
          return "border border-primary-900/50 text-primary-900 hover:bg-primary-50/50 active:bg-primary-50";
        case "tertiary":
          return "text-neutral-900 hover:bg-neutral-50/75 active:bg-neutral-50";
        case "danger-primary":
          return "text-[#fff] bg-supporting-red-700 hover:bg-supporting-red-800 active:bg-supporting-red-900";
        case "danger-secondary":
          return "border border-supporting-red-900/50 text-supporting-red-900 hover:bg-supporting-red-50/50 active:bg-supporting-red-50";
        case "danger-tertiary":
          return "text-supporting-red-900 hover:bg-supporting-red-50/75 active:bg-supporting-red-50";
      }
    }
  })();

  if (restClass) {
    className += ` ${restClass}`;
  }

  return (
    <button
      class={className}
      {...restWithoutClass}
    >
      {isLoading && loadingContent ? loadingContent : children}
    </button>
  );
};
