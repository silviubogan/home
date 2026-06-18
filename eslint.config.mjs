import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import nextPlugin from "@next/eslint-plugin-next";

export default defineConfig([
  {
    ignores: [".next"],
  },
  js.configs.recommended,
  tseslint.configs.recommended,
  react.configs.flat.recommended,
  nextPlugin.configs["core-web-vitals"],
  // nextPlugin.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      // your overrides here
    },
  },
  {
    settings: {
      react: {
        version: "detect", // in future eslint-plugin-react this will be the default
      },
    },
  },
]);
