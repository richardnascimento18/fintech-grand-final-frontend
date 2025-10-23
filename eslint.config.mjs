// eslint.config.mjs
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginUnusedImports from "eslint-plugin-unused-imports";

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    plugins: {
      import: eslintPluginImport,
      "unused-imports": eslintPluginUnusedImports,
      prettier: eslintPluginPrettierRecommended,
    },

    rules: {
      // --- ✨ Code style rules ---
      "semi": ["error", "always"], // require semicolons
      "quotes": ["error", "double", { avoidEscape: true }], // enforce double quotes
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }], // no double spacing lines
      "no-trailing-spaces": "error", // disallow trailing whitespace
      "eol-last": ["error", "always"], // newline at end of file
      "indent": ["error", 2, { SwitchCase: 1 }], // enforce consistent indentation (2 spaces)
      "object-curly-spacing": ["error", "always"], // enforce spacing inside { }
      "array-bracket-spacing": ["error", "never"], // no spaces inside [ ]
      "comma-dangle": ["error", "always-multiline"], // trailing commas in multiline

      // --- 🧠 Best practices ---
      "eqeqeq": ["error", "always"], // use === instead of ==
      "no-console": ["warn", { allow: ["warn", "error"] }], // allow only console.warn/error
      "no-alert": "error", // disallow alert(), confirm(), etc.
      "curly": ["error", "all"], // require curly braces for all control blocks
      "no-var": "error", // enforce let/const instead of var
      "prefer-const": "error",
      "no-duplicate-imports": "error",

      // --- 🧹 Unused code cleanup ---
      "no-unused-vars": "off", // turn off core rule
      "unused-imports/no-unused-imports": "error", // remove unused imports
      "unused-imports/no-unused-vars": [
        "error",
        { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" },
      ],

      // --- 🧩 Import order & hygiene ---
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],

      // --- 💅 Integrate Prettier ---
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
          singleQuote: false,
          semi: true,
          tabWidth: 2,
          trailingComma: "all",
          printWidth: 100,
        },
      ],
    },
  },

  // --- 🚫 Ignore build artifacts ---
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);
