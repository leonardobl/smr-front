import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  min-height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;

  transition: all 0.5s linear;
`;

export const ImgLoad = styled.img`
  width: 50px;
  display: block;
  margin-bottom: 16px;

  filter: brightness(0) saturate(100%) invert(66%) sepia(49%) saturate(550%)
    hue-rotate(75deg) brightness(96%) contrast(90%);
`;

export const WrapperImg = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;

  top: 40%;
  left: 50%;
  transform: translate(-50%);

  span {
    text-align: center;
    color: #fff;
  }
`;
