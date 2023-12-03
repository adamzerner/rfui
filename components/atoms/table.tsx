import { ComponentChild, JSX } from "preact";

/** *
 * @function Table
 *
 * @example
 * <Table>Example</Table>
 */
export const Table = (
  {
    children,
    ...rest
  }: {
    children?: ComponentChild;
  } & JSX.HTMLAttributes<HTMLTableElement>,
) => {
  let className = "";

  if (rest.class) {
    className += ` ${rest.class}`;
  }

  return (
    <table
      {...rest}
      class={className}
    >
      {children}
    </table>
  );
};
