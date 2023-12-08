import type { ComponentChild, JSX } from "preact";

export type CardType = {
  rounded?: "square" | "sm" | "lg";
  width?: "sm" | "md" | "lg" | "full";
  shadow?: "sm" | "md" | "lg";
  children: ComponentChild;
} & Omit<JSX.HTMLAttributes<HTMLDivElement>, "size">;

/*

TODO:
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
    shadow = "md",
    children,
    ...rest
  }: CardType,
) => {
  const [cardHeader, cardBody, cardFooter] = getComponents(children);
  const sharedClass = "p-5 border-neutral-100";
  const cardHeaderClass = sharedClass + " border-b";
  const cardBodyClass = sharedClass;
  const cardFooterClass = sharedClass + " border-t";
  let containerClass = "max-w-full border border-neutral-100";

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

  containerClass += " " + (() => {
    switch (shadow) {
      case "sm":
        return "shadow-sm";
      case "md":
        return "shadow";
      case "lg":
        return "shadow-md";
    }
  })();

  containerClass += " " + (() => {
    switch (rounded) {
      case "square":
        return "rounded-none";
      case "sm":
        return "rounded";
      case "lg":
        return "rounded-lg";
    }
  })();

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
