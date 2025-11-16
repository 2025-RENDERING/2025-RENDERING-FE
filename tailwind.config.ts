import type { Config } from "tailwindcss";
import palette from "./src/lib/colorPalette";
import typography from "./src/lib/typography";
import tailwindScrollbarHide from "tailwind-scrollbar-hide";

const toKebab = (value: string) =>
  value
    .replace(/^text/, "")
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/_/g, "-")
    .toLowerCase();

const mapColors = () =>
  Object.fromEntries(Object.entries(palette).map(([group, shades]) => [group, Object.fromEntries(Object.entries(shades).map(([name, hex]) => [name, hex]))]));

const mapFontSizes = () =>
  Object.fromEntries(
    Object.entries(typography).flatMap(([scale, variants]) =>
      Object.entries(variants).map(([variant, value]) => [
        `${toKebab(scale)}-${toKebab(variant)}`,
        [
          value.fontSize,
          {
            lineHeight: value.lineHeight,
            fontWeight: value.fontWeight.toString(),
          },
        ],
      ])
    )
  );

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: mapColors(),
      fontSize: mapFontSizes(),
      fontFamily: {
        pretendard: ["Pretendard", "Inter", "Noto Sans KR", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [
  tailwindScrollbarHide
]
};

export default config;
