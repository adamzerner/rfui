import type { ComponentChild, JSX } from "preact";

export type CardType = {
  rounded?: "square" | "sm" | "lg" | "full";
  children: ComponentChild;
} & Omit<JSX.HTMLAttributes<HTMLDivElement>, "size">;

/** *
 * @function Card
 *
 * @example
 * <Card></Card>
 */
export const Card = (
  {
    rounded = "sm",
    ...rest
  }: CardType,
) => {
  return (
    <div {...rest}>
    </div>
  );
};
