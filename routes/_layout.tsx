import { LayoutProps } from "$fresh/server.ts";

export default ({ Component }: LayoutProps) => {
  return (
    <div class="w-[900px] mx-auto mt-8 mb-4">
      <Component />
    </div>
  );
};
