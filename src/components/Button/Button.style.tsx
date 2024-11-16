import { styled } from "styled-components";
import { setButtonVariant } from "./mixin/variant.mixin";
import { ButtonColor, ButtonVariant } from "./Button.types";

interface StyledButtonProps {
  $variant: ButtonVariant;
  $size: string;
  $color: ButtonColor;
}

export const StyledButton = styled.button<StyledButtonProps>`
  border-radius: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  ${({ $variant, $color }) => setButtonVariant($variant, $color)};
`;
