import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

// Flat config (ESLint 9). Replaces a `lint` script that pointed at `--ext js,jsx`
// with no config file at all — in a codebase with zero .js/.jsx files, so it
// silently passed while linting nothing.
export default tseslint.config(
  { ignores: ["dist", "node_modules", ".vite-react-ssg-temp", "scripts/**"] },
  {
    files: ["**/*.{ts,tsx}"],
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      // Unused vars are already a hard error via tsconfig's noUnusedLocals;
      // allow a leading underscore as the documented opt-out.
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
  {
    // Data modules, not component modules. They export case-study copy and
    // config objects by design, so the fast-refresh "components only" rule
    // doesn't apply to them.
    files: ["src/content/**/*.tsx", "src/config/**/*.ts", "src/constants/**/*.ts"],
    rules: { "react-refresh/only-export-components": "off" },
  },
);
