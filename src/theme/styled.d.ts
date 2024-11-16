import "styled-components";
import { ColorSchema, SpacingSchema, TypographySchema } from "./types";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorSchema;
    spacing: SpacingSchema;
    typography: TypographySchema;
  }
}
