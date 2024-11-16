import chroma from "chroma-js";
import { ColorSchema } from "../types";
import { darkGray, deepBlue, lightPurple, navy, offWhite } from "./colors";

export const defaultColors: ColorSchema = {
  background: darkGray[700], // Dark background
  foreground: offWhite[200], // Light text for dark mode
  primary: navy[500], // Primary color
  secondary: lightPurple[200], // Secondary color
  accent: deepBlue[500], // Accent color
  // Function to lighten color
  lighten: (color: string, amount: number) => {
    return chroma(color).brighten(amount).hex();
  },
  // Function to darken color
  darken: (color: string, amount: number) => {
    return chroma(color).darken(amount).hex();
  },
  // Function to desaturate color (for disabled state)
  desaturate: (color: string, amount: number) => {
    return chroma(color).desaturate(amount).hex();
  },
  // Function for hover state
  hover: (color: string) => {
    return chroma(color).brighten(0.35).hex(); // Lighten for hover
  },
  // Function for active state
  active: (color: string) => {
    return chroma(color).darken(0.2).hex(); // Darken for active
  },
  // Function for disabled state
  disabled: (color: string) => {
    return chroma(color).desaturate(0.5).alpha(0.5).hex(); // Desaturate and make transparent
  },
};
