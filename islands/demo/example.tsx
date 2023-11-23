import { ComponentChild } from "preact";
import { useState } from "preact/hooks";

export const Example = (
  { children }: {
    children: ComponentChild;
  },
) => {
  const [shouldShowCode, setShouldShowCode] = useState(true);
  const toggleShouldShowCode = () => {
    setShouldShowCode((v) => !v);
  };

  return (
    <div>
      <div>{children}</div>
      <div onClick={toggleShouldShowCode} class="mt-4 cursor-pointer">
        {shouldShowCode ? "hide code -" : "show code +"}
      </div>
      {shouldShowCode &&
        <div></div>}
    </div>
  );
};
