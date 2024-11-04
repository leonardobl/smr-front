import styled from "styled-components";
import { ITableHeaderProps } from ".";

export const CustomTableHeader = styled.div<ITableHeaderProps>`
  background-color: #0157db;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  align-items: center;
  padding: 0 24px;
  height: 68px;

  h2 {
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
    text-align: left;
    color: #ffffff;

    > span {
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      text-align: left;
      color: #fff;
      display: block;
    }
  }
`;
