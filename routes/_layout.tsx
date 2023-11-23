import { LayoutProps } from "$fresh/server.ts";

export default ({ Component }: LayoutProps) => {
  return (
    <div class="w-[900px] mx-auto mt-8 mb-6">
      <div class="mb-6">
        <a href="/" class="underline">Home</a>
      </div>
      <Component />
    </div>
  );
};
