import type { JSX } from "preact";
import { ComponentChild } from "preact";

/** *
 * @function Button
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
  }: {
    variant?: "primary" | "secondary" | "tertiary";
    size?: "sm" | "md" | "lg" | "block";
    rounded?: "sm" | "lg" | "full" | "square";
    isLoading?: boolean;
    loadingContent?: string | JSX.Element;
    icon?: JSX.Element;
    _rightIcon?: JSX.Element; // better to align left https://ux.stackexchange.com/q/56023/39046
    children: ComponentChild;
  } & Omit<JSX.HTMLAttributes<HTMLButtonElement>, "icon" | "size">,
) => {
  let className = "";

  className += " " + (() => {
    switch (variant) {
      case "primary":
        return "bg-primary-500 text-primary-50 hover:bg-primary-300";
      case "secondary":
        return "border-1 border-neutral-500 hover:bg-neutral-100";
      case "tertiary":
        return "underline";
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
      case "sm":
        return "rounded";
      case "lg":
        return "rounded-lg";
      case "full":
        return "rounded-full";
      case "square":
        return "rounded-none";
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
          return "cursor-not-allowed underline text-neutral-500";
      }
    }
  })();

  if (rest.class) {
    className += ` ${rest.class}`;
  }

  return (
    <button {...rest} class={className}>
      {icon && <span class="mr-1">{icon}</span>}
      {isLoading && loadingContent ? loadingContent : children}
      {_rightIcon && <span class="ml-1">{_rightIcon}</span>}
    </button>
  );
};
