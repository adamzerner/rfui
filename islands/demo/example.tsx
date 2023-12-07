import { ComponentChild } from "preact";
import { useState } from "preact/hooks";

type ExampleType = {
  children: ComponentChild;
};

export const Example = (
  { children }: ExampleType,
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
