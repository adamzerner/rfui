import { ComponentChild, JSX } from "preact";

export type UnorderedListType = {
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
    children,
    ...rest
  }: UnorderedListType,
) => {
  const { class: restClass, ...restWithoutClass } = rest;
  let className = "";

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
