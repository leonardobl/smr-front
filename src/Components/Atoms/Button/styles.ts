import styled, { css } from "styled-components";
import { IButtonProps } from ".";

const ThemeButton = {
  default: css`
    background-color: #0271ff;
    color: #fff;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #0157db;
    }

    &:active {
      background-color: #0054ae;
    }
  `,
  "blue-light": css`
    background-color: #ccebff;
    color: #0271ff;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #c2e2ff;
    }

    &:active {
      background-color: #add8ff;
    }
  `,
  "blue-dark": css``,
};

export const CustomButton = styled.button<IButtonProps>`
  all: unset;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  height: 48px;
  padding: 0 24px;
  border-radius: 16px;
  color: #0271ff;

  > img {
    width: 20px;
    display: block;
  }

  ${(props) =>
    props.iconleft &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0 12px;
    `}

  ${(props) => props.variant && ThemeButton[props.variant]}
`;
