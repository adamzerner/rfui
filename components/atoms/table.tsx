import TailwindConfig from "@/tailwind.config.ts";
import { ComponentChild, JSX } from "preact";

/*

TODO:
- De-emphasize headings (smaller, lighter, all caps)
- Left align (https://ux.stackexchange.com/q/24066/39046)
- Padding
- Striped (https://ux.stackexchange.com/q/3562/39046, https://ux.stackexchange.com/q/60715/39046)
- Border
- Hover
- Condensed
- Scroll for responsiveness (https://ux.stackexchange.com/a/9766/39046)
- Think about overflow
- Sticky header
- Expand row
- Pagination
- Sorting
- Filters

*/
/** *
 * @function Table
 *
 * @example
 * <Table>Example</Table>
 */
export const Table = (
  {
    striped = false,
    children,
    ...rest
  }: {
    striped?: boolean;
    children?: ComponentChild;
  } & JSX.HTMLAttributes<HTMLTableElement>,
) => {
  let className = "rfui-table";

  if (striped) {
    className += " striped";
  }

  if (rest.class) {
    className += ` ${rest.class}`;
  }

  return (
    <>
      <style>
        {`
          table.rfui-table td {
            padding: 20px 10px;
          }

          table.rfui-table.striped tr:nth-child(even) {
            background: ${TailwindConfig.theme?.colors.neutral[50]}; 
          }
        `}
      </style>
      <table
        {...rest}
        class={className}
      >
        {children}
      </table>
    </>
  );
};
