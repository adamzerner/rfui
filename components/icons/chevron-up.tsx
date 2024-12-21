export const ChevronUpIcon = (
  { className, strokeWidth = 1.5, ...rest }: {
    className?: string;
    strokeWidth?: number;
  },
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width={strokeWidth}
      stroke="currentColor"
      className={`w-4 h-4 inline ${className}`}
      {...rest}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m4.5 15.75 7.5-7.5 7.5 7.5"
      />
    </svg>
  );
};
