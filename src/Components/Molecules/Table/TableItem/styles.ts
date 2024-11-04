import styled from "styled-components";
import { ITableItemProps } from ".";

export const CustomTableItem = styled.div<ITableItemProps>`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  align-items: center;
  padding: 0 24px;
  height: 60px;

  &:hover {
    background-color: #f5f5f5;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
  }

  @media (min-width: 1024px) {
    p {
      font-size: 16px;
    }
  }
`;
