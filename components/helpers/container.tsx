import type { ComponentChild, ComponentProps } from "preact";

export type ContainerType =
  & { size?: "sm" | "md" | "lg" | "xl"; children: ComponentChild }
  & Omit<ComponentProps<"div">, "size">;

/** *
 * @function Container
 *
 * @see {@link https://rfui.deno.dev/helpers/container}
 *
 * @example
 * <Container>
 *   ...
 * </Container>
 */
export const Container = (
  { size = "lg", children, ...rest }: ContainerType,
) => {
  const { class: classFromRest, ...restWithoutClass } = rest;
  let classValue = "mx-6 lg:mx-auto lg:px-10 lg:w-full";

  switch (size) {
    case "sm":
      classValue += " max-w-screen-sm";
      break;
    case "md":
      classValue += " max-w-screen-md";
      break;
    case "lg":
      classValue += " max-w-screen-lg";
      break;
    case "xl":
      classValue += " max-w-screen-xl";
      break;
  }

  if (classFromRest) {
    classValue += ` ${classFromRest}`;
  }

  return (
    <div class={classValue} {...restWithoutClass}>
      {children}
    </div>
  );
};
