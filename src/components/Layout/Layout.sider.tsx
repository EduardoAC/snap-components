import { HTMLAttributes } from "react";
import styled from "styled-components";

export type SiderProps = HTMLAttributes<HTMLDivElement>;

export const Sider = styled.aside<SiderProps>`
  width: 200px;
  background: #001529;
  color: white;
  flex-shrink: 0;
  padding: 16px;
`;
