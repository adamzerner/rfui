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
  let className = "flex flex-col gap-2";

  const bulletTypeMap = {
    bullet: "list-disc",
    check: "",
  };
  className += ` ${bulletTypeMap[bulletType]}`;

  className += ` ${
    bulletLocation === "inside" ? "list-inside" : "list-outside"
  }`;

  if (restClass) {
    className += ` ${restClass}`;
  }

  return (
    <ul
      {...restWithoutClass}
      class={className}
    >
      {children}
    </ul>
  );
};
