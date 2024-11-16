import { css } from "styled-components";
import { ButtonSize } from "../Button.types";

// Mixin to set the button size based on the selected variant
export const setButtonSizeMixin = ($size: ButtonSize) => {
  return css`
    ${({ theme }) => {
      const spacing = theme.spacing;
      const sizeValues = {
        small: {
          padding: `0 ${spacing.sm}`, // Adjust padding for small button
        },
        medium: {
          padding: `${spacing.xxs} ${spacing.md}`, // Adjust padding for medium button
        },
        large: {
          padding: `${spacing.xs} ${spacing.lg}`, // Adjust padding for large button
        },
      };
      return `padding: ${sizeValues[$size].padding};`;
    }}
  `;
};
