import styled from "styled-components";

export const CustomInputRadio = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const CustomInputLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0 12px;
  width: fit-content;
  cursor: pointer;

  > span {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }
`;
