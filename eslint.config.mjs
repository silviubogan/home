import js from "@eslint/js";
import globals from "globals";
import tseslint from 'typescript-eslint';
import react from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  js.configs.recommended,
  tseslint.configs.recommended,
  react.configs.flat.recommended,
  {
    files: [ "**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}" ],
    languageOptions: { globals: globals.browser },
    rules: {
      // your overrides here
    },
  },
]);
