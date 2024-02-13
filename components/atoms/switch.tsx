import type { ComponentProps } from "preact";

export type SwitchType = ComponentProps<"input">;

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
  // See `app.css`. Source: https://www.htmhell.dev/adventcalendar/2023/2/
  const { class: restClass, ...restWithoutClass } = rest;
  let className = "rfui-switch cursor-pointer";

  if (rest.disabled) {
    className += " cursor-not-allowed";
  }

  if (restClass) {
    className += ` ${restClass}`;
  }

  return (
    <input
      type="checkbox"
      class={className}
      {...restWithoutClass}
    />
  );
};
