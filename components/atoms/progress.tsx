import type { ComponentProps } from "preact";

export type ProgressType = {
  value: number;
  size?: "sm" | "md" | "lg";
} & Omit<ComponentProps<"div">, "size">;

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
    size = "md",
    ...rest
  }: ProgressType,
) => {
  const { class: restClass, ...restWithoutClass } = rest;
  let outerClassName =
    "box-content rounded-sm border border-neutral-200 bg-neutral-50";
  const innerClassName = `h-full bg-neutral-200`;

  outerClassName += ` ${size === "lg" ? "h-5" : size === "md" ? "h-4" : "h-3"}`;

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
