import type { ComponentProps } from "preact";

export type ProgressType = {} & Omit<ComponentProps<"div">, "size">;

/**
 * @function Progress
 *
 * @see {@link https://rfui.deno.dev/atoms/progress}
 *
 * @example
 * TODO
 */
export const Progress = (
  {
    ...rest
  }: ProgressType,
) => {
  const { class: restClass, ...restWithoutClass } = rest;
  let className = "h-4 w-[300px] bg-neutral-50";

  if (restClass) {
    className += ` ${restClass}`;
  }

  return (
    <div
      {...restWithoutClass}
      class={className}
    >
      <div class="h-4 w-2/5 bg-neutral-200"></div>
    </div>
  );
};
