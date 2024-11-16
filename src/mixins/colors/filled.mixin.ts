import { css } from "styled-components";

// Mixin for filled button style
export function setFilledColorMixin(foreground: string, background: string) {
  return css`
    background-color: ${background};
    color: ${foreground};
    border: 2px solid ${background};

    &:hover {
      background-color: ${({ theme }) => theme.colors.hover(background)};
      border-color: ${({ theme }) => theme.colors.hover(background)};
    }

    &:active {
      outline: 2px solid ${({ theme }) => theme.colors.active(background)};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.disabled(background)};
      border-color: ${({ theme }) => theme.colors.disabled(background)};
      color: ${({ theme }) => theme.colors.disabled(foreground)};
      cursor: not-allowed;
    }
  `;
}
