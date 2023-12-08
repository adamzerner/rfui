import type { ComponentChild, JSX } from "preact";

export type CardType = {
  rounded?: "square" | "sm" | "lg" | "full";
  children: ComponentChild;
} & Omit<JSX.HTMLAttributes<HTMLDivElement>, "size">;

/*

TODO:
- Rounded
- Shadow
- Size
- topAccent; leftAccent

*/

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
  const [cardHeader, cardBody, cardFooter] = getComponents(children);
  let containerClass = "w-full max-w-md " + rest.class;
  let sharedClass = "border-neutral-100 p-5 ";
  let cardHeaderClass = sharedClass + "border-x border-t";
  let cardBodyClass = sharedClass + "border";
  let cardFooterClass = sharedClass + "border-x border-b";

  return (
    <div class={containerClass} {...rest}>
      {cardHeader &&
        <div class={cardHeaderClass}>{cardHeader}</div>}
      <div class={cardBodyClass}>{cardBody}</div>
      {cardFooter &&
        <div class={cardFooterClass}>{cardFooter}</div>}
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

  const cardFooter = children.find(
    (child) => child && child.type && child.type.name === "CardFooter",
  );

  return [cardHeader, cardBody, cardFooter];
};

export const CardHeader = (
  { children, ...rest }:
    & { children: ComponentChild }
    & JSX.HTMLAttributes<HTMLDivElement>,
) => {
  return <div {...rest}>{children}</div>;
};

export const CardBody = (
  { children, ...rest }:
    & { children: ComponentChild }
    & JSX.HTMLAttributes<HTMLDivElement>,
) => {
  return <div {...rest}>{children}</div>;
};

export const CardFooter = (
  { children, ...rest }:
    & { children: ComponentChild }
    & JSX.HTMLAttributes<HTMLDivElement>,
) => {
  return <div {...rest}>{children}</div>;
};
