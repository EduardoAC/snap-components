import { styled } from "styled-components";
import { setButtonVariant } from "./mixin/variant.mixin";
import { ButtonColor, ButtonSize, ButtonVariant } from "./Button.types";
import { setTypographyMixin } from "@mixins";
import { setButtonSizeMixin } from "./mixin/size.mixin";

interface StyledButtonProps {
  $variant: ButtonVariant;
  $size: ButtonSize;
  $color: ButtonColor;
}

export const StyledButton = styled.button<StyledButtonProps>`
  border-radius: ${({ theme }) => theme.spacing.xs};
  ${({ $size }) => setButtonSizeMixin($size)}
  ${({ $variant, $color }) => setButtonVariant($variant, $color)};
  ${setTypographyMixin("body1")}
`;
