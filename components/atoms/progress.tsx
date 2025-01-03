import type { ComponentProps } from "preact";

export type ProgressType = {
  value: number;
  size?: "sm" | "md" | "lg";
  variant?: "success" | "info" | "warning" | "danger" | "neutral";
} & Omit<ComponentProps<"div">, "size">;

/**
 * @function Progress
 *
 * @see {@link https://rfui.deno.dev/atoms/progress}
 *
 * @example
 * <Progress value={40} />
 */
export const Progress = (
  {
    value,
    size = "md",
    variant = "neutral",
    ...rest
  }: ProgressType,
) => {
  const { class: restClass, ...restWithoutClass } = rest;
  let outerClassName = `box-content rounded-sm border`;
  let innerClassName = `h-full`;

  outerClassName += ` ${size === "lg" ? "h-5" : size === "md" ? "h-4" : "h-3"}`;
  outerClassName += " " + (() => {
    switch (variant) {
      case "neutral":
        return "bg-neutral-50 border-neutral-900";
      case "info":
        return "bg-primary-50 border-primary-900";
      case "success":
        return "bg-supporting-green-50 border-supporting-green-900";
      case "warning":
        return "bg-supporting-yellow-50 border-supporting-yellow-900";
      case "danger":
        return "bg-supporting-red-50 border-supporting-red-900";
    }
  })();
  innerClassName += " " + (() => {
    switch (variant) {
      case "neutral":
        return "bg-neutral-200";
      case "info":
        return "bg-primary-200";
      case "success":
        return "bg-supporting-green-200";
      case "warning":
        return "bg-supporting-yellow-200";
      case "danger":
        return "bg-supporting-red-200";
    }
  })();

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
