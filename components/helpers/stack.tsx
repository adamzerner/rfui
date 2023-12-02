import { ComponentChild, JSX } from "preact";

/** *
 * @function Stack
 *
 * @example
 * <Stack>
 *   <div>top</div>
 *   <div>middle</div>
 *   <div>bottom</div>
 * </Stack>
 */
export const Stack = (
  { children, ...rest }:
    & { children: ComponentChild }
    & JSX.HTMLAttributes<HTMLDivElement>,
) => {
  const { class: classFromRest, ...restWithoutClass } = rest;
  let classValue = "flex flex-col";

  if (classFromRest) {
    classValue += ` ${classFromRest}`;
  }

  return (
    <div class={classValue} {...restWithoutClass}>
      {children}
    </div>
  );
};
