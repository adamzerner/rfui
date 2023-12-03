import type { JSX } from "preact";

/** *
 * @function Checkbox
 *
 * Inspiration: https://css-tricks.com/zero-trickery-custom-radios-and-checkboxes/
 *
 * Readonly isn't really an option: https://stackoverflow.com/q/155291/1927876
 *
 * @example
 * <Checkbox />
 */
export const Checkbox = (
  {
    size = "md",
    invalid = false,
    ...rest
  }: {
    size?: "sm" | "md" | "lg";
    invalid?: boolean;
  } & Omit<JSX.HTMLAttributes<HTMLInputElement>, "size">,
) => {
  let className = "accent-primary-500 cursor-pointer"; // Discussion of the cursor property https://ux.stackexchange.com/q/23266/39046

  className += " " + (() => {
    switch (size) {
      case "sm":
        return "w-5 h-5";
      case "md":
        return "w-6 h-6";
      case "lg":
        return "w-7 h-7";
    }
  })();

  if (rest.disabled) {
    className += " cursor-not-allowed";
  }

  if (invalid) {
    className += " outline outline-offset-2 outline-supporting-red-500";
  }

  if (rest.class) {
    className += ` ${rest.class}`;
  }

  return (
    <input
      {...rest}
      type="checkbox"
      class={className}
    />
  );
};
