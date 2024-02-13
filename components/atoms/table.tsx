import { ComponentChild, JSX } from "preact";

export type TableType = {
  bordered?: boolean;
  hover?: boolean;
  striped?: boolean;
  condensed?: boolean;
  stickyHeader?: boolean;
  stickyFirstColumn?: boolean;
  children?: ComponentChild;
} & JSX.IntrinsicElements["table"];

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
 * Making the header or first column sticky is helpful when the user needs to cross-reference and avoid losing context.
 *
 * @see {@link https://rfui.deno.dev/atoms/table}
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
    hover = true,
    striped = false,
    condensed = false,
    stickyHeader = false,
    stickyFirstColumn = false,
    children,
    ...rest
  }: TableType,
) => {
  const { class: restClass, ...restWithoutClass } = rest;
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

  if (condensed) {
    className += " condensed";
  }

  if (stickyHeader) {
    className += " sticky-header"; // https://css-tricks.com/making-tables-with-sticky-header-and-footers-got-a-bit-easier/
  }

  if (stickyFirstColumn) {
    className += " sticky-first-column"; // https://css-tricks.com/making-tables-with-sticky-header-and-footers-got-a-bit-easier/
  }

  if (restClass) {
    className += ` ${restClass}`;
  }

  return (
    <table
      class={className}
      {...restWithoutClass}
    >
      {children}
    </table>
  );
};
