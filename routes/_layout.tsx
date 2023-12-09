import { PageProps } from "$fresh/server.ts";
import { Link } from "../components/atoms/link.tsx";

export default ({ Component }: PageProps) => {
  return (
    <div class="max-w-[1200px] mx-4 lg:mx-auto mt-8 mb-6 font-sans">
      <div class="mb-6">
        <Link href="/">Home</Link>
      </div>
      <Component />
    </div>
  );
};
