import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors["gray-light-100"]};
  min-height: 100dvh;
`;

export const WrapperPage = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.screens["2xl"]};
  margin: 0 auto;
  padding: 132px 16px 32px;
`;

export const Header = styled.header`
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 0px 12px 0px #0271ff1a;
  position: fixed;
  width: 100%;
  z-index: 100;
`;

export const WrapperHeader = styled.header`
  width: 100%;
  height: 96px;
  max-width: ${(props) => props.theme.screens["2xl"]};
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;

  > img {
    display: block;
    width: 90px;
  }

  @media (min-width: ${(props) => props.theme.screens.md}) {
    justify-content: start;

    > img {
      width: 126px;
    }
  }
`;
