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
    children,
    ...rest
  }: CardType,
) => {
  const [cardHeader, cardBody] = getComponents(children);

  return (
    <div {...rest}>
      <div>{cardHeader}</div>
      <div>{cardBody}</div>
    </div>
  );
};

const getComponents = (children: ComponentChild) => {
  if (!Array.isArray(children)) {
    return [undefined, children];
  }

  const cardHeader = children.find(
    (child) => child && child.type && child.type.name === "CardHeader",
  );

  const cardBody = children.find(
    (child) => child && child.type && child.type.name === "CardBody",
  );

  return [cardHeader, cardBody];
};

export const CardHeader = ({ children, ...rest }: { children: ComponentChild } & JSX.HTMLAttributes<HTMLDivElement>) => {
  return <div {...rest}>{children}</div>;
};

export const CardBody = ({ children, ...rest }: { children: ComponentChild } & JSX.HTMLAttributes<HTMLDivElement>) => {
  return <div {...rest}>{children}</div>;
};
