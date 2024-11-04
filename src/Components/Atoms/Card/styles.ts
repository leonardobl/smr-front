import styled from "styled-components";

export const Card = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  padding: 16px;
  border-radius: 24px;
  box-shadow: 0px 0px 12px 0px #0271ff1a;

  @media (max-width: 768px) {
    overflow-x: scroll;
  }
`;
