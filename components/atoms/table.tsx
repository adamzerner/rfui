import TailwindConfig from "@/tailwind.config.ts";
import { ComponentChild, JSX } from "preact";

/*

TODO:
- De-emphasize headings (smaller, lighter, all caps)
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
 * Tailwind classes applied to what you pass into `Table` as `children` probably won't have a high enough precedence to be applied. To force them to be applied, utilize `!important` (https://tailwindcss.com/docs/configuration#important) by doing eg. `!text-right` instead of just `text-right`.
 *
 * Content is left-aligned by default. However, you'll probably want to right-align numerical content. See https://ux.stackexchange.com/q/24066/39046.
 *
 * Discussions of utilizing zebra stripes: https://ux.stackexchange.com/q/24066/39046, https://ux.stackexchange.com/q/60715/39046.
 *
 * @example
 * <Table>
 *   <thead>
 *     <tr>
 *       <th>name</th>
 *       <th>age</th>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <td>Alice</td>
 *       <td>19</td>
 *     </tr>
 *     <tr>
 *       <td>Bob</td>
 *       <td>25</td>
 *     </tr>
 *   </tbody>
 * </Table>
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
            padding-top: ${TailwindConfig.theme.extend?.spacing[5]};
            padding-bottom: ${TailwindConfig.theme.extend?.spacing[5]};
          }

          table.rfui-table th,
          table.rfui-table td {
            padding-left: ${TailwindConfig.theme.extend?.spacing[4]};
            padding-right: ${TailwindConfig.theme.extend?.spacing[4]};
            text-align: left;
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
