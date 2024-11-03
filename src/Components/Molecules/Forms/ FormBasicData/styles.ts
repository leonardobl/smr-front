import styled from "styled-components";

export const FormBasic = styled.form`
  display: grid;
  gap: 32px 0;
`;

export const WrapperButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  grid-template-areas: "btn1 btn1" "btn2 btn3";

  > :nth-child(1) {
    grid-area: btn1;
  }

  > :nth-child(2) {
    grid-area: btn2;
  }

  > :nth-child(3) {
    grid-area: btn3;
  }
`;
