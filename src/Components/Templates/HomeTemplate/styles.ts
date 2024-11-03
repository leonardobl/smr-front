import styled from "styled-components";

export const Container = styled.div``;

export const Form = styled.form``;

export const WrapperButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  grid-template-areas: "btn1 btn1" "btn2 btn3";
  border-top: 2px solid #dddfeb;
  padding-top: 24px;
  margin-top: 24px;

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
