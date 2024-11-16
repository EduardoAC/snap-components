export interface ColorScale {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export type ColorManipulationFunctionWithAmount = (
  color: string,
  amount: number
) => string;

export type ColorManipulationFunction = (color: string) => string;

export interface ColorRoles {
  background: string;
  foreground: string;
  primary: string;
  secondary: string;
  accent: string;
}

export type ColorsAvailable = keyof ColorRoles;

export interface ColorFunctions {
  lighten: ColorManipulationFunctionWithAmount;
  darken: ColorManipulationFunctionWithAmount;
  desaturate: ColorManipulationFunctionWithAmount;
  hover: ColorManipulationFunction;
  active: ColorManipulationFunction;
  disabled: ColorManipulationFunction;
}

export type ColorSchema = ColorRoles & ColorFunctions;
