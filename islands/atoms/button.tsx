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
  loadingContent?: string | JSX.Element;
  icon?: JSX.Element;
  _rightIcon?: JSX.Element; // better to align left https://ux.stackexchange.com/q/56023/39046
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
 * <Button isLoading loadingContent={<em>Submitting...</em>}>Submit</Button>
 */
export const Button = (
  {
    variant = "secondary",
    size = "md",
    rounded = "sm",
    isLoading = false,
    loadingContent,
    icon,
    _rightIcon,
    children,
    ...rest
  }: ButtonType,
) => {
  const { class: restClass, ...restWithoutClass } = rest;
  let className = "";

  className += " " + (() => {
    switch (variant) {
      case "primary":
        return "text-[#fff]";
      case "secondary":
        return "border";
      case "tertiary":
        return "underline"; // https://ux.stackexchange.com/a/5494/39046
      case "danger-primary":
        return "bg-supporting-red-700 text-[#fff] hover:bg-supporting-red-500";
      case "danger-secondary":
        return "border border-supporting-red-500 text-supporting-red-900 hover:bg-supporting-red-50";
      case "danger-tertiary":
        return "underline text-supporting-red-900";
    }
  })();

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
      switch (variant) {
        case "primary":
          return "cursor-not-allowed bg-primary-300";
        case "secondary":
          return "cursor-not-allowed text-neutral-500 border-neutral-300 hover:bg-[#fff]";
        case "tertiary":
          return "cursor-not-allowed text-neutral-600";
      }
    } else {
      switch (variant) {
        case "primary":
          return "bg-primary-700 hover:bg-primary-500";
        case "secondary":
          return "border-primary-500 text-primary-900 hover:bg-primary-50";
        case "tertiary":
          return "";
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
      {icon && <span class="mr-1">{icon}</span>}
      {isLoading && loadingContent ? loadingContent : children}
      {_rightIcon && <span class="ml-1">{_rightIcon}</span>}
    </button>
  );
};
