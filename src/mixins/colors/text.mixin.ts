import { css } from "styled-components";

// Mixin for text button style
export function setTextColorMixin(foreground: string, background?: string) {
  return css`
    background-color: transparent;
    color: ${foreground};
    border: none;

    ${background &&
    css`
      &:hover,
      &:focus {
        background-color: ${({ theme }) => theme.colors.hover(background)};
      }

      &:active {
        outline: 2px solid ${({ theme }) => theme.colors.active(background)};
      }
    `}

    &:disabled {
      background-color: ${({ theme }) => theme.colors.disabled(foreground)};
      color: ${({ theme }) => theme.colors.disabled(foreground)};
      cursor: not-allowed;
    }
  `;
}
