import type { JSX } from "preact";

export type SwitchType = {
  size?: "sm" | "md" | "lg";
  invalid?: boolean;
} & Omit<JSX.HTMLAttributes<HTMLInputElement>, "size">;

/** *
 * @function Switch
 *
 * @see {@link https://rfui.deno.dev/atoms/switch}
 *
 * @example
 * <Switch />
 */
export const Switch = (
  {
    size = "md",
    invalid = false,
    ...rest
  }: SwitchType,
) => {
  let className = "accent-primary-500 cursor-pointer";

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
      type="checkbox"
      class={className}
      {...rest}
    />
  );
};
