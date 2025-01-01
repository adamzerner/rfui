export const ChevronUpIcon = (
  { strokeWidth = 1.5, ...rest }: {
    class?: string;
    strokeWidth?: number;
  },
) => {
  const { class: restClass, ...restWithoutClass } = rest;
  let className = "inline h-4 w-4";

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
      className={className}
      {...restWithoutClass}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m4.5 15.75 7.5-7.5 7.5 7.5"
      />
    </svg>
  );
};
