import CurrencyInput, { CurrencyInputProps } from "react-currency-input-field";
import * as S from "./styles";

export interface IInputMoneyProps extends CurrencyInputProps {
  error?: boolean;
  label?: string;
  iconleft?: string;
  iconright?: string;
}
export const InputMoney = ({ label, ...rest }: IInputMoneyProps) => {
  return (
    <S.CustomInputLabel {...rest}>
      {label && <span>{label}</span>}
      <S.WrapperInput {...rest}>
        {rest.iconleft && <img src={rest.iconleft} alt="iconleft" />}
        <CurrencyInput
          {...rest}
          // decimalsLimit={2}
          intlConfig={{ locale: "pt-BR", currency: "BRL" }}
          // fixedDecimalLength={2}
          // decimalScale={2}
        />
        {rest.iconright && <img src={rest.iconright} alt="iconright" />}
      </S.WrapperInput>
    </S.CustomInputLabel>
  );
};
