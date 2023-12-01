import { ComponentChild, JSX } from "preact";

/** *
 * @function Flex
 *
 * @param gap `gap="2"` leads to the class having `gap-2`
 *
 * @example
 * <Flex gap="2">
 *   <div>left</div>
 *   <div>middle</div>
 *   <div>right</div>
 * </Flex>
 */
export const Flex = (
  { gap, children, ...rest }:
    & { gap?: string; children: ComponentChild }
    & JSX.HTMLAttributes<HTMLDivElement>,
) => {
  const { class: classFromRest, ...restWithoutClass } = rest;
  let classValue = "flex";

  if (classFromRest) {
    classValue += ` ${classFromRest}`;
  }

  if (typeof gap === "string") {
    classValue += ` gap-${gap}`;
  }

  return (
    <div class={classValue} {...restWithoutClass}>
      {children}
    </div>
  );
};
