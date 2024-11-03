import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Wrapper = styled.div`
  width: 100%;
  border-bottom: 2px solid #dddfeb;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  > button {
    all: unset;
    transition: all 0.2s ease-in-out;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    cursor: pointer;
    padding: 18px;
    color: #8a8c99;
  }

  &[data-active="true"] {
    border-bottom: 2px solid #0271ff;

    > button {
      color: #0157db;
    }
  }
`;
