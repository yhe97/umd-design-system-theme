/** @type {import('tailwindcss').Config} */

import * as Styles from "@universityofmaryland/web-styles-library";
import plugin from "tailwindcss/plugin";

const { token, root: utilities, outputStyles: components } = Styles;
const { color, font, media } = token;
const base = {
  ...token,
  fontFamily: font.family,
  fontSize: font.size,
  fontWeight: font.weight,
  breakpoints: media.breakpoints,
};

const tailwindBase = Object.fromEntries(
  Object.entries(base).map(([key, value]) => [
    key.charAt(0).toLocaleLowerCase() + key.slice(1),
    value,
  ])
);

const content = ["./components/**/*.{html,twig,js}"];

const theme = {
  screens: media.breakpoints,
  queries: media.breakpoints,
  colors: color,
  ...tailwindBase,
};

const plugins = [
  plugin(function ({ addUtilities, addComponents }) {
    addUtilities(utilities);
    addComponents(components);
  }),
];

export { content, theme, plugins };
