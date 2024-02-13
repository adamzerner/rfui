import type { ComponentProps } from "preact";

export const CloseIcon = (
  { ...rest }: ComponentProps<"svg">,
) => {
  const { className: restClass, ...restWithoutClass } = rest;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-6 h-6 cursor-pointer hover:outline rounded outline-offset-2 outline-1 ${restClass}`}
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
