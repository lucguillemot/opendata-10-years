import adapterStatic from "@sveltejs/adapter-static";
import sveltePreprocess from "svelte-preprocess";
import autoprefixer from "autoprefixer";

import path from "path";
import { readFileSync } from "fs";
const { version, subdirectory } = JSON.parse(readFileSync("package.json", "utf8"));

const dev = process.env.NODE_ENV === "development";
const dir = subdirectory || "";
const prefix = dir.startsWith("/") ? "" : "/";
const base = dev || !dir ? "" : `${prefix}${dir}`;

const preprocess = sveltePreprocess({
  postcss: {
    plugins: [autoprefixer]
  }
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess,
  kit: {
    adapter: adapterStatic(),
    prerender: { default: true },
    files: { lib: "./src" },
    trailingSlash: "always",
    paths: {
      base
    }
  }
};

export default config;
