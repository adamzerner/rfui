import type { ComponentProps } from "preact";

export type RadioButtonType = {
  size?: "sm" | "md" | "lg";
  invalid?: boolean;
} & Omit<ComponentProps<"input">, "size">;

/** *
 * @function RadioButton
 *
 * Inspiration: https://css-tricks.com/zero-trickery-custom-radios-and-checkboxes/
 *
 * Readonly isn't really an option: https://stackoverflow.com/q/1953017/1927876
 *
 * Discussion of the cursor property: https://ux.stackexchange.com/q/23266/39046
 *
 * @see {@link https://rfui.deno.dev/atoms/radio-button}
 *
 * @example
 * <RadioButton />
 */
export const RadioButton = (
  {
    size = "md",
    invalid = false,
    ...rest
  }: RadioButtonType,
) => {
  const { class: restClass, ...restWithoutClass } = rest;
  let className = "rfui-radio-button cursor-pointer accent-primary-500";

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

  if (restClass) {
    className += ` ${restClass}`;
  }

  return (
    <input
      type="radio"
      class={className}
      {...restWithoutClass}
    />
  );
};
