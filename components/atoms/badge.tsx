import { ComponentChild, JSX } from "preact";

// TODO: with icon

/** *
 * @function Badge
 *
 * @example
 * <Badge>Example</Badge>
 */
export const Badge = (
  {
    type = "neutral",
    size = "md",
    rounded = "sm",
    children,
    ...rest
  }: {
    type?: "neutral" | "info" | "success" | "warning" | "danger";
    size?: "sm" | "md" | "lg";
    rounded?: "square" | "sm" | "lg" | "full";
    children: ComponentChild;
  } & Omit<JSX.HTMLAttributes<HTMLDivElement>, "size">,
) => {
  let className = "";

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
        return "px-2 py-1 text-sm";
      case "lg":
        return "px-3 py-2 text-md";
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
    }
  })();

  if (rest.class) {
    className += ` ${rest.class}`;
  }

  return (
    <div
      {...rest}
      class={className}
    >
      {children}
    </div>
  );
};
