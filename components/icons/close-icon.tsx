import type { ComponentProps } from "preact";

export const CloseIcon = (
  { ...rest }: ComponentProps<"svg">,
) => {
  const { className: restClass, ...restWithoutClass } = rest;
  let className =
    "h-6 w-6 cursor-pointer rounded outline-1 outline-offset-2 hover:outline";

  if (restClass) {
    className += ` ${restClass}`;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
      {...restWithoutClass}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};
