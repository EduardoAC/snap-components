import { ReactNode } from "react";
import { Spacing } from "src/theme";
import styled, { css } from "styled-components";

interface BaseLayoutProps {
  className?: string;
  children: ReactNode;
  $size?: Spacing;
}

export const StyledLayout = styled.div<{
  hasSider?: boolean;
  direction?: "ltr" | "rtl";
}>`
  display: flex;
  flex-direction: column;
  ${({ hasSider }) =>
    hasSider &&
    css`
      flex-direction: row;
    `}
  ${({ direction }) =>
    direction === "rtl" &&
    css`
      direction: rtl;
    `}
`;

export const Header = styled.header<BaseLayoutProps>`
  ${({ theme, $size = "md" }) => $size && `padding: ${theme.spacing[$size]}`};
`;
export const Footer = styled.footer<BaseLayoutProps>`
  ${({ theme, $size = "md" }) => $size && `padding: ${theme.spacing[$size]}`};
`;

export const Content = styled.main<BaseLayoutProps>`
  width: 100%;
  ${({ theme, $size = "md" }) => $size && `padding: ${theme.spacing[$size]}`};
`;
