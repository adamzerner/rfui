import twindPlugin from "$fresh/plugins/twind.ts";
import { defineConfig } from "$fresh/server.ts";
import twindConfig from "@/twind.config.ts";

export default defineConfig({
  plugins: [twindPlugin(twindConfig)],
});
