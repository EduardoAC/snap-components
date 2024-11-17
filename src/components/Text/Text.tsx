import { setTypographyMixin } from "@mixins";
import { ParamHTMLAttributes } from "react";
import { TypographyVariants } from "src/theme/types";
import styled from "styled-components";
import { Typography } from "./../../theme/types/typography.types";

type ExtendedTextProps = ParamHTMLAttributes<HTMLParagraphElement> & Typography;
interface TextProps extends ExtendedTextProps {
  variant: TypographyVariants;
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "label" | "a";
}

const StyledText = styled.p<TextProps>`
  ${({
    variant,
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    fontFamily,
  }) =>
    setTypographyMixin(variant, {
      fontSize,
      fontWeight,
      lineHeight,
      letterSpacing,
      fontFamily,
    })}
`;

export function Text({ as, children, ...rest }: TextProps) {
  return (
    <StyledText as={as} {...rest}>
      {children}
    </StyledText>
  );
}
