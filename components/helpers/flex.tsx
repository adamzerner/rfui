import { ComponentChild, JSX } from "preact";

/** *
 * @function Flex
 *
 * @example
 * <Flex>
 *   <div>left</div>
 *   <div>middle</div>
 *   <div>right</div>
 * </Flex>
 */
export const Flex = (
  { children, ...rest }:
    & { children: ComponentChild }
    & JSX.HTMLAttributes<HTMLDivElement>,
) => {
  const { class: classFromRest, ...restWithoutClass } = rest;
  let classValue = "flex";

  if (classFromRest) {
    classValue += ` ${classFromRest}`;
  }

  return (
    <div class={classValue} {...restWithoutClass}>
      {children}
    </div>
  );
};
