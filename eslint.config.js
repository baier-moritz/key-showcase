import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import tseslint from "typescript-eslint"
import eslintPluginPrettier from "eslint-plugin-prettier/recommended"

export default tseslint
  .config(
    { ignores: ["dist"] },
    {
      extends: [
        js.configs.recommended,
        ...tseslint.configs.recommended,
        // ...tseslint.configs.recommendedTypeChecked,
        // ...tseslint.configs.stylisticTypeChecked,
        {
          languageOptions: {
            parserOptions: {
              projectService: true,
              tsconfigRootDir: import.meta.dirname
            }
          }
        }
      ],
      files: ["**/*.{ts,tsx}"],
      languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser
      },
      plugins: {
        "react-hooks": reactHooks,
        "react-refresh": reactRefresh
      },
      rules: {
        ...reactHooks.configs.recommended.rules,
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
        "@typescript-eslint/no-unused-vars": "warn",
        "no-unused-vars": "warn"
      }
    }
  )
  .concat(eslintPluginPrettier)
