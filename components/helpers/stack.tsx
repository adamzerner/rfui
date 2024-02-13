import type { ComponentChild, ComponentProps } from "preact";

export type StackType =
  & { children: ComponentChild }
  & ComponentProps<"div">;

/** *
 * @function Stack
 *
 * @see {@link https://rfui.deno.dev/helpers/stack}
 *
 * @example
 * <Stack>
 *   <div>top</div>
 *   <div>middle</div>
 *   <div>bottom</div>
 * </Stack>
 */
export const Stack = (
  { children, ...rest }: StackType,
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
