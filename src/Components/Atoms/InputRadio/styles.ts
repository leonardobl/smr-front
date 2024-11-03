import styled from "styled-components";

export const CustomInputRadio = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const CustomInputRadioLabel = styled.div`
  > span {
    font-size: 18px;
    font-weight: 600;
    text-align: left;
    display: block;
    margin-bottom: 12px;
    transition: all 0.2s ease-in-out;
  }
`;

export const WrapperInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px 0;
`;

export const WrapperInputLabel = styled.label`
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
