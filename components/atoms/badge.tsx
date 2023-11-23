import { ComponentChild, JSX } from "preact";

/** *
 * @function Badge
 *
 * @example
 * <Badge>Example</Badge>
 */
export const Badge = (
  {
    children,
    ...rest
  }: {
    underline?: "always" | "hover" | "none";
    children: ComponentChild;
  } & JSX.HTMLAttributes<HTMLDivElement>,
) => {
  let className = "cursor-pointer";

  // className += " " + (() => {
  //   switch (underline) {
  //     case "always":
  //       return "underline";
  //     case "hover":
  //       return "hover:underline";
  //   }
  // })();

  if (rest.class) {
    className += ` ${rest.class}`;
  }

  return (
    <div
      {...rest}
      class={className}
    >
      {children}
    </div>
  );
};
