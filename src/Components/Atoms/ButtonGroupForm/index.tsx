import { ComponentProps, useEffect } from "react";
import * as S from "./styles";
import { useButtonGroupForm } from "./useButtonGroupForm";
interface IButtonGroupForm extends ComponentProps<"div"> {
  getButtonActiveNumber: (n: number) => void;
}

export const ButtonGroupForm = ({
  getButtonActiveNumber,
  ...rest
}: IButtonGroupForm) => {
  const { btnActiveNumber, setBtnActiveNumber } = useButtonGroupForm();

  useEffect(() => {
    getButtonActiveNumber(btnActiveNumber);
  }, [btnActiveNumber]);

  return (
    <S.Container {...rest}>
      <S.Wrapper data-active={btnActiveNumber === 1}>
        <button onClick={() => setBtnActiveNumber(1)}>Dados básicos</button>
      </S.Wrapper>

      <S.Wrapper data-active={btnActiveNumber === 2}>
        <button onClick={() => setBtnActiveNumber(2)}>Avançado</button>
      </S.Wrapper>
    </S.Container>
  );
};
