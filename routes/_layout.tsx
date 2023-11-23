import { LayoutProps } from "$fresh/server.ts";

export default ({ Component }: LayoutProps) => {
  return (
    <div>
      <nav>navbar</nav>
      <Component />
      <footer>footer</footer>
    </div>
  );
};
