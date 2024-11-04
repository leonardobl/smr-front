import styled from "styled-components";
import { ITableFooterProps } from ".";

export const TableFooter = styled.div<ITableFooterProps>`
  background-color: #ccebff;
  border-bottom-right-radius: 24px;
  border-bottom-left-radius: 24px;
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  align-items: center;
  padding: 0 24px;
  height: 68px;

  > p {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    text-align: left;
    color: #002d93;
  }

  @media (min-width: 1024px) {
    > p {
      font-size: 18px;
    }
  }
`;
