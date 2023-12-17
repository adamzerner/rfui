import { Stack } from "@/components/helpers/stack.tsx";
import { ComponentChild, JSX } from "preact";

export type TextType = {
  size?: "sm" | "md" | "lg";
  children: ComponentChild;
} & Omit<JSX.HTMLAttributes<HTMLDivElement>, "size">;

/** *
 * @function Text
 *
 * @example
 * <Text>
 *   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat odio facilisis mauris sit.</p>
 *   <p>Amet consectetur adipiscing elit duis tristique. Ac turpis egestas maecenas pharetra. Dui nunc mattis enim ut tellus. Egestas congue quisque egestas diam in.</p>
 * </Text>
 */
export const Text = (
  {
    size = "md",
    children,
    ...rest
  }: TextType,
) => {
  const sizeMap = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-2xl",
  };
  const { class: restClass, ...restWithoutClass } = rest;
  let className = "gap-4 leading-relaxed max-w-prose";

  className += ` ${sizeMap[size]}`;

  if (restClass) {
    className += ` ${restClass}`;
  }

  return (
    <Stack
      {...restWithoutClass}
      class={className}
    >
      {children}
    </Stack>
  );
};
