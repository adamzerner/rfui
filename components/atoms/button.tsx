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
  { kind = "secondary", sz = "md", rounded = "sm", children, ...rest }: {
    kind?: "primary" | "secondary" | "tertiary";
    sz?: "sm" | "md" | "lg" | "block";
    rounded?: "sm" | "lg" | "full" | "square";
    children: ComponentChild;
  } & JSX.HTMLAttributes<HTMLButtonElement>,
) => {
  let className = "";

  className += " " + (() => {
    switch (sz) {
      case "sm":
        return "px-2 py-1";
      case "md":
        return "px-3 py-2";
      case "lg":
        return "px-4 py-3";
      case "block":
        return "w-full px-4 py-3";
    }
  })();

  className += " " + (() => {
    switch (kind) {
      case "primary":
        return "bg-primary-500 text-primary-50 hover:bg-primary-400";
      case "secondary":
        return "border-1 border-neutral-500 hover:bg-neutral-100";
      case "tertiary":
        return "underline";
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

  if (rest.class) {
    className += ` ${rest.class}`;
  }

  return (
    <button {...rest} class={className}>
      {children}
    </button>
  );
};
