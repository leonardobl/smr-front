import styled from "styled-components";
import { IInputMoneyProps } from ".";

export const CustomInputLabel = styled.label<IInputMoneyProps>`
  > span {
    font-size: 18px;
    font-weight: 600;
    text-align: left;
    display: block;
    margin-bottom: 12px;
    transition: all 0.2s ease-in-out;
  }

  &:has(input:focus) {
    > span {
      color: #0271ff;
    }
  }

  &:has(input:disabled) {
    > span {
      color: #c3c6d4;
    }
  }

  ${(props) =>
    props.error &&
    `>span {
      color: #E7254F;
    }


    &:has(input:focus) {
    > span {
      color: #E7254F;
    }
  }
  `}
`;

export const WrapperInput = styled.div<IInputMoneyProps>`
  position: relative;

  > img:nth-child(1) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 16px;
    transition: all 0.2s ease-in-out;
  }

  > img:nth-child(3) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 16px;
    transition: all 0.2s ease-in-out;
  }

  &:has(input:focus) {
    > img {
      filter: brightness(0) saturate(100%) invert(31%) sepia(81%)
        saturate(3872%) hue-rotate(205deg) brightness(101%) contrast(108%);
    }
  }

  &:has(input:disabled) {
    > img {
      filter: brightness(0) saturate(100%) invert(93%) sepia(4%) saturate(939%)
        hue-rotate(194deg) brightness(86%) contrast(93%);
    }
  }

  ${(props) =>
    props.error &&
    `> img {
        filter: brightness(0) saturate(100%) invert(35%) sepia(71%) saturate(7368%) hue-rotate(335deg) brightness(94%) contrast(92%);
      }


    &:has(input:focus) {
      > img {
        filter: brightness(0) saturate(100%) invert(35%) sepia(71%) saturate(7368%) hue-rotate(335deg) brightness(94%) contrast(92%);
      }
    }
  `}

  > input {
    width: 100%;
    height: 48px;
    padding: 8px 16px;
    border-radius: 16px;
    border: 1px solid #e9eaf2;
    outline: none;
    transition: all 0.2s ease-in-out;
    background-color: #f0f2fa;

    font-size: 18px;
    font-weight: 400;

    &::placeholder {
      color: #b0b2bf;
    }

    ${(props) => props.iconleft && `padding-left: 48px;`}
    ${(props) => props.iconright && `padding-right: 48px;`}

    &:hover:not(:focus) {
      border-color: ${(props) => props.theme.colors["gray-50"]};
    }

    &:focus {
      border-color: #0271ff;
    }

    &:disabled {
      border-color: #c3c6d4;
      color: #c3c6d4;
    }

    ${(props) =>
      props.error &&
      `
    
    border-color: #E7254F;
    
    
    &:focus {
    border-color: #E7254F;
  }
  `}
  }
`;
