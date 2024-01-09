import type { ComponentChild, JSX } from "preact";

export type CardType = {
  rounded?: "square" | "sm" | "lg";
  width?: "sm" | "md" | "lg" | "full";
  shadow?: "sm" | "md" | "lg";
  padding?: "sm" | "md" | "lg";
  topAccent?: boolean;
  leftAccent?: boolean;
  children: ComponentChild;
} & Omit<JSX.HTMLAttributes<HTMLDivElement>, "size">;

/** *
 * @function Card
 *
 * @see {@link https://rfui.deno.dev/molecules/card}
 *
 * @example
 * <Card>Example</Card>
 */
export const Card = (
  {
    rounded = "sm",
    width = "md",
    shadow = "sm",
    topAccent = false,
    leftAccent = false,
    padding = "md",
    children,
    ...rest
  }: CardType,
) => {
  const { cardHeader, cardBody, cardFooter } = getComponents(children);
  let sharedClass = "border-neutral-100";

  sharedClass += " " + (() => {
    switch (padding) {
      case "sm":
        return "p-3";
      case "md":
        return "p-5";
      case "lg":
        return "p-7";
    }
  })();

  const cardHeaderClass = sharedClass + " border-b";
  const cardBodyClass = sharedClass;
  const cardFooterClass = sharedClass + " border-t";
  const { class: restClass, ...restWithoutClass } = rest;
  let containerClass = "max-w-full border border-neutral-100";

  if (topAccent) {
    containerClass += " border-t-primary-500 border-t-2";
  }

  if (leftAccent) {
    containerClass += " border-l-primary-500 border-l-2";
  }

  containerClass += " " + (() => {
    switch (width) {
      case "sm":
        return "w-[300px]";
      case "md":
        return "w-[600px]";
      case "lg":
        return "w-[900px]";
      case "full":
        return "w-full";
    }
  })();

  containerClass += " " + (() => {
    switch (shadow) {
      case "sm":
        return "shadow";
      case "md":
        return "shadow-md";
      case "lg":
        return "shadow-lg";
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

  if (restClass) {
    containerClass += ` ${restClass}`;
  }

  return (
    <div class={containerClass} {...restWithoutClass}>
      {cardHeader &&
        <div class={cardHeaderClass}>{cardHeader}</div>}
      <div class={cardBodyClass}>{cardBody}</div>
      {cardFooter &&
        <div class={cardFooterClass}>{cardFooter}</div>}
    </div>
  );
};

// deno-lint-ignore no-explicit-any
const getComponents = (props: any) => {
  console.log("props: ");
  console.log(props);
  const children = props?.type?.name === "ServerComponent"
    ? props.props.children
    : props;

  console.log("children: ");
  console.log(children);

  if (!Array.isArray(children)) {
    return { cardBody: children };
  }

  const cardHeader = children.find(
    (child) => child && child.type && child.type.name === CardHeader.name,
  );

  const cardBody = children.find(
    (child) => child && child.type && child.type.name === CardBody.name,
  );

  const cardFooter = children.find(
    (child) => child && child.type && child.type.name === CardFooter.name,
  );

  if (!cardBody) {
    throw new Error(
      "A `CardBody` is needed if you pass an array of elements to `Card` as `children`.",
    );
  }

  return { cardHeader, cardBody, cardFooter };
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
