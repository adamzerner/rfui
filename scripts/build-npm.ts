// See https://github.com/denoland/dnt
import { build, emptyDir } from "https://deno.land/x/dnt@0.39.0/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  shims: {
    // see JS docs for overview and more options
    deno: true,
  },
  package: {
    // package.json properties
    name: "rfui",
    version: Deno.args[0],
    description: "A clean and simple component library for React/Preact",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/adamzerner/rfui.git",
    },
    bugs: {
      url: "https://github.com/adamzerner/rfui/issues",
    },
  },
  postBuild() {
    // steps to run after building and before running the tests
    Deno.copyFileSync("LICENSE", "npm/LICENSE");
    Deno.copyFileSync("README.md", "npm/README.md");
  },
});
