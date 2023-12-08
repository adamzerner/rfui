import type { ComponentChild, JSX } from "preact";

export type CardType = {
  rounded?: "square" | "sm" | "lg";
  width?: "sm" | "md" | "lg" | "full";
  children: ComponentChild;
} & Omit<JSX.HTMLAttributes<HTMLDivElement>, "size">;

/*

TODO:
- Shadow
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
    width = "md",
    children,
    ...rest
  }: CardType,
) => {
  const [cardHeader, cardBody, cardFooter] = getComponents(children);
  let containerClass = "max-w-full";
  let sharedClass = "border-neutral-100 p-5";
  let cardHeaderClass = sharedClass + " border-x border-t";
  let cardBodyClass = sharedClass + " border";
  let cardFooterClass = sharedClass + " border-x border-b";

  containerClass += " " + (() => {
    switch (width) {
      case "sm":
        return "w-[450px]";
      case "md":
        return "w-[600px]";
      case "lg":
        return "w-[750px]";
      case "full":
        return "w-full";
    }
  })();

  switch (rounded) {
    case "square":
      cardHeaderClass += " rounded-t-none";
      cardFooterClass += " rounded-b-none";

      if (!cardHeader) {
        cardBodyClass += " rounded-t-none";
      }

      if (!cardFooter) {
        cardBodyClass += " rounded-b-none";
      }

      break;
    case "sm":
      cardHeaderClass += " rounded-t-sm";
      cardFooterClass += " rounded-b-sm";

      if (!cardHeader) {
        cardBodyClass += " rounded-t-sm";
      }

      if (!cardFooter) {
        cardBodyClass += " rounded-b-sm";
      }

      break;
    case "lg":
      cardHeaderClass += " rounded-t-lg";
      cardFooterClass += " rounded-b-lg";

      if (!cardHeader) {
        cardBodyClass += " rounded-t-lg";
      }

      if (!cardFooter) {
        cardBodyClass += " rounded-b-lg";
      }

      break;
  }

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
