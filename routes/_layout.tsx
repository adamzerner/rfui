import { LayoutProps } from "$fresh/server.ts";

export default ({ Component }: LayoutProps) => {
  return (
    <div class="w-[900px] mx-auto mt-16 mb-6">
      <Component />
    </div>
  );
};
