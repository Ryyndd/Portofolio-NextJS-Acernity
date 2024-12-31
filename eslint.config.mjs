import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@next/next/no-img-element": "off", // Menonaktifkan aturan <img> di Next.js
      "@typescript-eslint/no-explicit-any": "off", // Menonaktifkan aturan penggunaan 'any'
      "react-hooks/exhaustive-deps": "off", // Menonaktifkan aturan dependencies pada useEffect
    },
  },
];

export default eslintConfig;
