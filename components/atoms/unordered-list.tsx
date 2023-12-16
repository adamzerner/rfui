import { ComponentChild, JSX } from "preact";

export type UnorderedListType = {
  bulletType?: "bullet" | "check";
  bulletLocation?: "inside" | "outside";
  children: ComponentChild;
} & JSX.HTMLAttributes<HTMLUListElement>;

/** *
 * @function UnorderedList
 *
 * @example
 * <UnorderedList>
 *   <li>One</li>
 *   <li>Two</li>
 *   <li>Three</li>
 * </UnorderedList>
 */
export const UnorderedList = (
  {
    bulletType = "bullet",
    bulletLocation = "inside",
    children,
    ...rest
  }: UnorderedListType,
) => {
  const { class: restClass, ...restWithoutClass } = rest;
  let className = "rfui-unordered-list flex flex-col gap-2";

  const bulletTypeMap = {
    bullet: "list-disc",
    check: "list-check",
  };
  className += ` ${bulletTypeMap[bulletType]}`;

  className += ` ${
    bulletLocation === "inside" ? "list-inside" : "list-outside"
  }`;

  if (restClass) {
    className += ` ${restClass}`;
  }

  return (
    <>
      <style>
        {`
          ul.rfui-unordered-list.list-check li {
            display: flex;
            gap: 0.25em;
            align-items: center;
          }

          ul.rfui-unordered-list.list-check li::before {
            content: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBjbGFzcz0idy02IGgtNiBpbmxpbmUiPg0KICA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik05IDEyLjc1TDExLjI1IDE1IDE1IDkuNzVNMjEgMTJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6IiAvPg0KPC9zdmc+DQo=');
            width: 1em;
            position: relative;
            top: 0.15em;
          }
        `}
      </style>
      <ul
        {...restWithoutClass}
        class={className}
      >
        {children}
      </ul>
    </>
  );
};
