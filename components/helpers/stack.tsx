import { ComponentChild, JSX } from "preact";

/** *
 * @function Stack
 *
 * @param gap `gap="2"` leads to the class having `gap-2`
 *
 * @example
 * <Stack gap="2">
 *   <div>top</div>
 *   <div>middle</div>
 *   <div>bottom</div>
 * </Stack>
 */
export const Stack = (
  { gap, children, ...rest }:
    & { gap?: string; children: ComponentChild }
    & JSX.HTMLAttributes<HTMLDivElement>,
) => {
  const { class: classFromRest, ...restWithoutClass } = rest;
  let classValue = "flex flex-col";

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
