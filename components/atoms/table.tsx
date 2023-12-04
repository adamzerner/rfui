import TailwindConfig from "@/tailwind.config.ts";
import { ComponentChild, JSX } from "preact";

/*

TODO:
- Sticky header
- Sticky left column
- Condensed
- Think about overflow
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
 * Discussions of utilizing zebra stripes: https://ux.stackexchange.com/q/3562/39046, https://ux.stackexchange.com/q/60715/39046.
 *
 * By default, headings are in uppercase. If you don't want this, apply a class of `"!normal-case"` to the `th` elements in order to provide `text-transform: none;`.
 *
 * For responsive design, consider removing columns, combining data across multiple cells into one cell, and providing a way to click a cell to navigate to some sort of other view with more detail, such as a modal or a new page. See https://ux.stackexchange.com/a/9766/39046.
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
    bordered = true,
    hover = false,
    striped = false,
    children,
    ...rest
  }: {
    bordered?: boolean;
    hover?: boolean;
    striped?: boolean;
    children?: ComponentChild;
  } & JSX.HTMLAttributes<HTMLTableElement>,
) => {
  let className = "rfui-table";

  if (bordered) {
    className += " bordered";
  }

  if (hover) {
    className += " hover";
  }

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
          table.rfui-table {
            overflow-x: scroll;
          }

          table.rfui-table th {
              font-weight: normal;
              text-transform: uppercase;
              font-size: 0.75em;
              padding-bottom: ${TailwindConfig.theme.extend?.spacing[2]};
              border-bottom: 1px solid ${
          TailwindConfig.theme?.colors.neutral[100]
        };
          }
          
          table.rfui-table td {
            padding-top: ${TailwindConfig.theme.extend?.spacing[5]};
            padding-bottom: ${TailwindConfig.theme.extend?.spacing[5]};
          }

          table.rfui-table.bordered td {
            border-bottom: 1px solid ${
          TailwindConfig.theme?.colors.neutral[100]
        };
          }

          table.rfui-table.hover tr:hover td {
            background: ${TailwindConfig.theme?.colors.neutral[50]}; 
          }

          table.rfui-table.hover.striped tr:hover td {
            background: ${TailwindConfig.theme?.colors.neutral[100]}; 
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
