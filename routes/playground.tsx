import { H1 } from "@/components/atoms/h1.tsx";
import { Sandpack } from "@codesandbox/sandpack-react";

export default () => {
  const files = {
    "/app.js": `export default () => {
  return <h1>Hello Sandpack</h1>
}`,
  };

  return (
    <div class="max-w-prose text-lg">
      <H1>Playground</H1>
      <Sandpack
        files={files}
        theme="auto"
        template="vite-preact"
      />
    </div>
  );
};
