import { ReactNode } from "react";
import { StyledButton } from "./Button.style";
import { ButtonColor, ButtonSize, ButtonVariant } from "./Button.types";

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  variant?: ButtonVariant;
  /** What background color to use */
  color?: ButtonColor;
  /** How large should the button be? */
  size?: ButtonSize;
  /** Button contents */
  children: ReactNode;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export function Button({
  variant = "filled",
  size = "medium",
  color = "primary",
  children,
  ...props
}: ButtonProps) {
  return (
    <StyledButton $variant={variant} $size={size} $color={color} {...props}>
      {children}
    </StyledButton>
  );
}
