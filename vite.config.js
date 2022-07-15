import { sveltekit } from '@sveltejs/kit/vite';
import svg from "vite-plugin-svgstring";
import dsv from "@rollup/plugin-dsv";

import path from "path";
import { readFileSync } from "fs";
const { version, subdirectory } = JSON.parse(readFileSync("package.json", "utf8"));

/** @type {import('vite').UserConfig} */
const config = {
	define: { __VERSION__: JSON.stringify(version) },
	resolve: {
		alias: {
			$actions: path.resolve("./src/actions"),
			$components: path.resolve("./src/components"),
			$data: path.resolve("./src/data"),
			$stores: path.resolve("./src/stores"),
			$styles: path.resolve("./src/styles"),
			$svg: path.resolve("./src/svg"),
			$utils: path.resolve("./src/utils")
		}
	},
	plugins: [sveltekit(), dsv(), svg()],
	optimizeDeps: { exclude: ["@roxi/routify", "@urql/svelte"] }
};

export default config;
