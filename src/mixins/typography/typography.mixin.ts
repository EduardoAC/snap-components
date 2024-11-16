import { css } from "styled-components";
import { Typography, TypographyVariants } from "../../theme/types";
import { typographyDefinitions } from "./typography.definitions";
import { getTypographyStyles } from "./typography.styles";

// typography is required, second parameter is optional and can override the defaults
export function setTypographyMixin(
  typography: TypographyVariants,
  overrides?: Partial<Typography> // Second parameter is optional and partial, allowing for overrides
) {
  return css`
    ${({ theme }) => {
      // Get the default typography values based on thetypography` variant
      const typographySchema = theme.typography;
      const typographyDefinition = typographyDefinitions[typography];
      const fontStyles = getTypographyStyles(
        typographyDefinition,
        typographySchema
      );
      const overrideStyles = overrides
        ? getTypographyStyles(overrides, typographySchema)
        : null;

      // Apply font-size, allowing for overrides if provided
      const fontSize = overrideStyles?.fontSize || fontStyles.fontSize;
      const fontWeight = overrideStyles?.fontWeight || fontStyles.fontWeight;
      const lineHeight = overrideStyles?.lineHeight || fontStyles.lineHeight;
      const letterSpacing =
        overrideStyles?.letterSpacing || fontStyles.letterSpacing;
      const fontFamily = overrideStyles?.fontFamily || fontStyles.fontFamily;

      return css`
        font-size: ${fontSize};
        font-weight: ${fontWeight};
        line-height: ${lineHeight};
        letter-spacing: ${letterSpacing};
        font-family: ${fontFamily};
      `;
    }}
  `;
}
