import { LayoutProps } from "$fresh/server.ts";
import { Link } from "../components/atoms/link.tsx";

export default ({ Component }: LayoutProps) => {
  return (
    <div class="w-[900px] mx-auto mt-8 mb-6">
      <div class="mb-6">
        <Link href="/">Home</Link>
      </div>
      <Component />
    </div>
  );
};
