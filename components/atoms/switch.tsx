import type { JSX } from "preact";

export type SwitchType = JSX.HTMLAttributes<HTMLInputElement>;

/** *
 * @function Switch
 *
 * @see {@link https://rfui.deno.dev/atoms/switch}
 *
 * @example
 * <Switch />
 */
export const Switch = (
  { ...rest }: SwitchType,
) => {
  let className = "rfui-switch cursor-pointer";

  if (rest.disabled) {
    className += " cursor-not-allowed";
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
