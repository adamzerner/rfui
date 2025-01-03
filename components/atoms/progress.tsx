import type { ComponentProps } from "preact";

export type ProgressType = {
  value: number;
} & ComponentProps<"div">;

/**
 * @function Progress
 *
 * @see {@link https://rfui.deno.dev/atoms/progress}
 *
 * @example
 * TODO
 */
export const Progress = (
  {
    value,
    ...rest
  }: ProgressType,
) => {
  const { class: restClass, ...restWithoutClass } = rest;
  let outerClassName =
    "box-content h-4 rounded-sm border border-neutral-200 bg-neutral-50";
  const innerClassName = `h-4 bg-neutral-200`;

  if (restClass) {
    outerClassName += ` ${restClass}`;
  }

  return (
    <div
      {...restWithoutClass}
      class={outerClassName}
    >
      <div class={innerClassName} style={{ width: `${value}%` }}></div>
    </div>
  );
};
