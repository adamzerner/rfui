import type { ComponentChild, ComponentProps } from "preact";

export type FlexType =
  & { children: ComponentChild }
  & ComponentProps<"div">;

/** *
 * @function Flex
 *
 * @see {@link https://rfui.deno.dev/helpers/flex}
 *
 * @example
 * <Flex>
 *   <div>left</div>
 *   <div>middle</div>
 *   <div>right</div>
 * </Flex>
 */
export const Flex = (
  { children, ...rest }: FlexType,
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
