import { Flex } from "@/components/helpers/flex.tsx";
import type { ComponentChild, JSX } from "preact";

export type AlertType = {
  variant?: "success" | "info" | "warning" | "danger" | "neutral";
  children: ComponentChild;
} & Omit<JSX.HTMLAttributes<HTMLDivElement>, "size">;

/*

TODO:
- Icon

*/

/** *
 * @function Alert
 *
 * Don't overdo it. If you "cry wolf", users become numb to alerts. https://ux.stackexchange.com/q/44609/39046
 *
 * @example
 * <Alert></Alert>
 */
export const Alert = (
  {
    variant = "neutral",
    children,
    ...rest
  }: AlertType,
) => {
  const [alertHeader, alertBody] = getComponents(children);
  let alertHeaderClass = "text-lg font-bold mb-2";
  let alertBodyClass = "text-neutral-900";
  const { class: restClass, ...restWithoutClass } = rest;
  let containerClass = "w-full p-5 border-l-4";

  containerClass += " " + (() => {
    switch (variant) {
      case "success":
        return "border-supporting-green-500";
      case "info":
        return "border-primary-500";
      case "warning":
        return "border-supporting-yellow-700";
      case "danger":
        return "border-supporting-red-500";
      case "neutral":
        return "border-neutral-500";
    }
  })();

  containerClass += " " + (() => {
    switch (variant) {
      case "success":
        return "bg-supporting-green-50";
      case "info":
        return "bg-primary-50";
      case "warning":
        return "bg-supporting-yellow-50";
      case "danger":
        return "bg-supporting-red-50";
      case "neutral":
        return "bg-neutral-50";
    }
  })();

  alertHeaderClass += " " + (() => {
    switch (variant) {
      case "success":
        return "text-supporting-green-500";
      case "info":
        return "text-primary-500";
      case "warning":
        return "text-supporting-yellow-700";
      case "danger":
        return "text-supporting-red-500";
      case "neutral":
        return "text-neutral-500";
    }
  })();

  alertBodyClass += " " + (() => {
    switch (variant) {
      case "success":
        return "text-supporting-green-900";
      case "info":
        return "text-primary-900";
      case "warning":
        return "text-supporting-yellow-900";
      case "danger":
        return "text-supporting-red-900";
      case "neutral":
        return "text-neutral-900";
    }
  })();

  if (restClass) {
    containerClass += ` ${restClass}`;
  }

  return (
    <div class={containerClass} {...restWithoutClass}>
      <Flex class="gap-3">
        <div>ℹ️</div>
        <div>
          {alertHeader &&
            <div class={alertHeaderClass}>{alertHeader}</div>}
          <div class={alertBodyClass}>{alertBody}</div>
        </div>
      </Flex>
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
