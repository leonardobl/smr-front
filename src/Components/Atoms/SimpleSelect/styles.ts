import styled, { css } from "styled-components";

export const Container = styled.div<{ error?: boolean }>`
  position: relative;

  .react-select__placeholder {
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    color: #b0b2bf;
  }

  .react-select__control {
    border-radius: 16px;
    height: 48px;
    padding: 0 8px;
    transition: all 0.2s ease-in-out;
    background-color: #f0f2fa;
    box-shadow: none;
    border: 1px solid #e9eaf2;
    font-size: 18px;

    &:has(input:focus) {
      border: 1px solid #0271ff;
    }

    &:has(input:disabled) {
      border-color: #c3c6d4;
      color: #c3c6d4;
    }

    ${(props) =>
      props.error &&
      css`
        &:has(input:focus) {
          border: 1px solid #e7254f;
        }

        &:has(input:hover) {
          border: 1px solid #e7254f;
        }

        border: 1px solid #e7254f;
      `}
  }
`;

export const Label = styled.label<{ error?: boolean }>`
  display: block;
  margin-bottom: 12px;

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

    img#arrow-down {
      filter: brightness(0) saturate(100%) invert(40%) sepia(92%)
        saturate(5607%) hue-rotate(206deg) brightness(104%) contrast(105%);
    }
  }

  ${(props) =>
    props.error &&
    css`
      > span {
        color: #e7254f;
      }

      img#arrow-down {
        filter: brightness(0) saturate(100%) invert(35%) sepia(71%)
          saturate(7368%) hue-rotate(335deg) brightness(94%) contrast(92%);
      }

      &:has(input:focus) {
        > span {
          color: #e7254f;
        }

        img#arrow-down {
          filter: brightness(0) saturate(100%) invert(35%) sepia(71%)
            saturate(7368%) hue-rotate(335deg) brightness(94%) contrast(92%);
        }
      }
    `}

  &:has(input:disabled) {
    img#arrow-down {
      filter: brightness(0) saturate(100%) invert(93%) sepia(4%) saturate(939%)
        hue-rotate(194deg) brightness(86%) contrast(93%);
    }

    span {
      color: #c3c6d4;
    }
  }
`;
