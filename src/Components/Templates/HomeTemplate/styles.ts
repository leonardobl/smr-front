import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: 1fr;
  grid-template-areas: "form" "chart1" "chart2" "table1" "table2" "table3";

  > :nth-child(1) {
    grid-area: form;
  }

  > :nth-child(2) {
    grid-area: chart1;
  }

  > :nth-child(3) {
    grid-area: chart2;
  }

  > :nth-child(4) {
    grid-area: table1;
  }

  > :nth-child(5) {
    grid-area: table2;
  }

  > :nth-child(6) {
    grid-area: table3;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 434px 1fr;
    grid-template-areas: "form chart1" "form chart2" "table1 table1" "table2 table2" "table3 table3";
  }
`;

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

export const TitleCard = styled.h2`
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
  text-align: left;
  margin-bottom: 36px;
`;

export const FormAdvancedDataContainer = styled.form`
  display: grid;
  gap: 32px 0;
  padding-top: 36px;
`;

export const FormBasic = styled.form`
  display: grid;
  gap: 32px 0;
  padding-top: 36px;
`;

export const WrapperInputsRadio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px 0;
`;

export const LabelInputRadio = styled.label`
  display: block;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  margin-bottom: 20px;
`;
