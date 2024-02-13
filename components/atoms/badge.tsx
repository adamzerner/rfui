import type { ComponentChild, ComponentProps } from "preact";

export type BadgeType = {
  type?: "neutral" | "info" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  rounded?: "square" | "sm" | "lg" | "full";
  children: ComponentChild;
} & Omit<ComponentProps<"div">, "size">;

/**
 * @function Badge
 *
 * @see {@link https://rfui.deno.dev/atoms/badge}
 *
 * @example
 * <Badge>Example</Badge>
 */
export const Badge = (
  {
    type = "neutral",
    size = "md",
    rounded,
    children,
    ...rest
  }: BadgeType,
) => {
  const { class: restClass, ...restWithoutClass } = rest;
  let className = "inline";

  className += " " + (() => {
    switch (type) {
      case "neutral":
        return "bg-neutral-50 text-neutral-900";
      case "info":
        return "bg-primary-50 text-primary-900";
      case "success":
        return "bg-supporting-green-50 text-supporting-green-900";
      case "warning":
        return "bg-supporting-yellow-50 text-supporting-yellow-900";
      case "danger":
        return "bg-supporting-red-50 text-supporting-red-900";
    }
  })();

  className += " " + (() => {
    switch (size) {
      case "sm":
        return "px-1 text-xs";
      case "md":
        return "px-2 text-sm";
      case "lg":
        return "px-3 py-1 text-md";
    }
  })();

  className += " " + (() => {
    switch (rounded) {
      case "square":
        return "rounded-none";
      case "sm":
        return "rounded";
      case "lg":
        return "rounded-lg";
      case "full":
        return "rounded-full";
      default:
        return "rfui-rounded-default";
    }
  })();

  if (restClass) {
    className += ` ${restClass}`;
  }

  return (
    <div
      {...restWithoutClass}
      class={className}
    >
      {children}
    </div>
  );
};
