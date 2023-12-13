import type { ComponentChild, JSX } from "preact";

export type AlertType = {
  rounded?: "square" | "sm" | "lg";
  width?: "sm" | "md" | "lg" | "full";
  shadow?: "sm" | "md" | "lg";
  padding?: "sm" | "md" | "lg";
  topAccent?: boolean;
  leftAccent?: boolean;
  children: ComponentChild;
} & Omit<JSX.HTMLAttributes<HTMLDivElement>, "size">;

/*

TODO:

*/

/** *
 * @function Alert
 *
 * @example
 * <Alert></Alert>
 */
export const Alert = (
  {
    rounded = "sm",
    width = "md",
    shadow = "sm",
    topAccent = false,
    leftAccent = false,
    padding = "md",
    children,
    ...rest
  }: AlertType,
) => {
  const [alertHeader, alertBody] = getComponents(children);
  let sharedClass = "border-neutral-100";

  sharedClass += " " + (() => {
    switch (padding) {
      case "sm":
        return "p-3";
      case "md":
        return "p-5";
      case "lg":
        return "p-7";
    }
  })();

  const alertHeaderClass = sharedClass + " border-b";
  const alertBodyClass = sharedClass;
  const { class: restClass, ...restWithoutClass } = rest;
  let containerClass = "max-w-full border border-neutral-100";

  if (topAccent) {
    containerClass += " border-t-primary-500 border-t-2";
  }

  if (leftAccent) {
    containerClass += " border-l-primary-500 border-l-2";
  }

  containerClass += " " + (() => {
    switch (width) {
      case "sm":
        return "w-[300px]";
      case "md":
        return "w-[600px]";
      case "lg":
        return "w-[900px]";
      case "full":
        return "w-full";
    }
  })();

  containerClass += " " + (() => {
    switch (shadow) {
      case "sm":
        return "shadow";
      case "md":
        return "shadow-md";
      case "lg":
        return "shadow-lg";
    }
  })();

  containerClass += " " + (() => {
    switch (rounded) {
      case "square":
        return "rounded-none";
      case "sm":
        return "rounded";
      case "lg":
        return "rounded-lg";
    }
  })();

  if (restClass) {
    containerClass += ` ${restClass}`;
  }

  return (
    <div class={containerClass} {...restWithoutClass}>
      {alertHeader &&
        <div class={alertHeaderClass}>{alertHeader}</div>}
      <div class={alertBodyClass}>{alertBody}</div>
    </div>
  );
};

const getComponents = (children: ComponentChild) => {
  if (!Array.isArray(children)) {
    return [undefined, children];
  }

  const alertHeader = children.find(
    (child) => child && child.type && child.type.name === "AlertHeader",
  );

  const alertBody = children.find(
    (child) => child && child.type && child.type.name === "AlertBody",
  );

  return [alertHeader, alertBody];
};

export const AlertHeader = (
  { children, ...rest }:
    & { children: ComponentChild }
    & JSX.HTMLAttributes<HTMLDivElement>,
) => {
  return <div {...rest}>{children}</div>;
};

export const AlertBody = (
  { children, ...rest }:
    & { children: ComponentChild }
    & JSX.HTMLAttributes<HTMLDivElement>,
) => {
  return <div {...rest}>{children}</div>;
};
