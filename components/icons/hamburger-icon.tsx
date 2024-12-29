import type { ComponentProps } from "preact";

export const HamburgerIcon = ({ strokeWidth = 1.5, ...rest }: {
  strokeWidth?: number;
} & ComponentProps<"svg">) => {
  const { class: restClass, ...restWithoutClass } = rest;
  let className = "size-6";

  if (restClass) {
    className += ` ${restClass}`;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width={strokeWidth}
      stroke="currentColor"
      class={className}
      {...restWithoutClass}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
};
