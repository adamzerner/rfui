import { ComponentChild, JSX } from "preact";

export type UnorderedListType = {
  bulletType?: "bullet" | "check" | "arrow" | "triangle";
  customBulletType?: string;
  bulletLocation?: "inside" | "outside";
  children: ComponentChild;
} & JSX.HTMLAttributes<HTMLUListElement>;

/** *
 * @function UnorderedList
 *
 * Useful blog post: https://css-tricks.com/list-style-recipes/
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
    arrow: "list-arrow",
    triangle: "list-triangle",
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
          ul.rfui-unordered-list.list-check li::before {
            content: '✔ ';
            margin-right: 0.5em;
          }

          ul.rfui-unordered-list.list-arrow li::before {
            content: '→ ';
            margin-right: 0.5em;
          }

          ul.rfui-unordered-list.list-triangle li::before {
            content: '▸ ';
            margin-right: 0.5em;
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
