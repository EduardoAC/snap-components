import { css } from "styled-components";
import { ButtonColor, ButtonVariant } from "../Button.types";
import { setFilledColorMixin } from "../../../mixins/colors/filled.mixin";
import { setOutlineColorMixin } from "../../../mixins/colors/outline.mixin";
import { setTextColorMixin } from "../../../mixins/colors/text.mixin";
import { ColorsAvailable } from "../../../theme/types";

export function getColors(
  color: ButtonColor
): Record<"$foreground" | "$background", ColorsAvailable> {
  switch (color) {
    case "primary":
      return { $foreground: "foreground", $background: "primary" };
    case "secondary":
      return { $foreground: "background", $background: "secondary" };
  }
}

// Mixin for filled button style
export function setButtonVariant($variant: ButtonVariant, $color: ButtonColor) {
  return css`
    ${({ theme }) => {
      const { $foreground, $background } = getColors($color);
      console.log($foreground, $background, theme.colors);
      const foreground = theme.colors[$foreground];
      const background = theme.colors[$background];
      switch ($variant) {
        case "filled":
          return setFilledColorMixin(foreground, background);
        case "outlined":
          return setOutlineColorMixin(foreground, background);
        case "text":
          return setTextColorMixin(foreground, background);
        default:
          return null;
      }
    }}
  `;
}
