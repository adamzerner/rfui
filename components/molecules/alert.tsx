import { Flex } from "@/components/helpers/flex.tsx";
import type { ComponentChild, JSX } from "preact";

export type AlertType = {
  variant?: "success" | "info" | "warning" | "danger" | "neutral";
  children: ComponentChild;
} & Omit<JSX.HTMLAttributes<HTMLDivElement>, "size">;

/*

TODO:
- Icon
- Dismissable

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
  const colorMap = {
    success: "supporting-green",
    info: "primary",
    warning: "supporting-yellow",
    danger: "supporting-red",
    neutral: "neutral",
  };
  const color = colorMap[variant];
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
        <Icon variant={variant} />
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

const Icon = ({ variant }: { variant: AlertType["variant"] }) => {
  switch (variant) {
    case "success":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-supporting-green-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );

    case "info":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-primary-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
          />
        </svg>
      );

    case "warning":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-supporting-yellow-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
          />
        </svg>
      );

    case "danger":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-supporting-red-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );

    default:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-neutral-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
          />
        </svg>
      );
  }
};
