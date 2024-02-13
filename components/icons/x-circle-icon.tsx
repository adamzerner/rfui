import type { ComponentProps } from "preact";

export const XCircleIcon = ({ ...rest }: ComponentProps<"svg">) => {
  let { class: classNameFromRest, ...restWithoutClass } = rest;

  if (!classNameFromRest) {
    classNameFromRest = "w-5 h-5";
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      class={`inline ${classNameFromRest}`}
      {...restWithoutClass}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};
