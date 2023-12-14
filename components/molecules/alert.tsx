import type { ComponentChild, JSX } from "preact";

export type AlertType = {
  rounded?: "square" | "sm" | "lg";
  children: ComponentChild;
} & Omit<JSX.HTMLAttributes<HTMLDivElement>, "size">;

/*

TODO:
- Variant

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
    children,
    ...rest
  }: AlertType,
) => {
  const [alertHeader, alertBody] = getComponents(children);
  const alertHeaderClass = "text-lg font-bold mb-2";
  const alertBodyClass = "text-neutral-700";
  const { class: restClass, ...restWithoutClass } = rest;
  let containerClass =
    "w-full p-5 border-l-primary-500 border-l-4 bg-neutral-50 text-primary-900";

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
