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
    font-size: 16px;
    font-weight: 600;

    text-align: left;
    color: #ffffff;

    > span {
      font-size: 12px;
      font-weight: 400;

      text-align: left;
      color: #fff;
      display: block;
    }

    @media (min-width: 1024px) {
      font-size: 18px;

      > span {
        font-size: 14px;
      }
    }
  }
`;
