import { css } from "styled-components";

export function setOutlineColorMixin(foreground: string, background: string) {
  return css`
    background-color: transparent;
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
      border-color: ${({ theme }) => theme.colors.disabled(background)};
      color: ${({ theme }) => theme.colors.disabled(foreground)};
      cursor: not-allowed;
    }
  `;
}
