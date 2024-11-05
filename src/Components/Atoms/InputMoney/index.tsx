import CurrencyInput, { CurrencyInputProps } from "react-currency-input-field";
import * as S from "./styles";
import React from "react";

export interface IInputMoneyProps extends CurrencyInputProps {
  error?: boolean;
  label?: string;
  iconleft?: string;
  iconright?: string;
}
export const InputMoney = React.forwardRef<HTMLInputElement, IInputMoneyProps>(
  ({ label, ...rest }: IInputMoneyProps, ref) => {
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
            ref={ref}
          />
          {rest.iconright && <img src={rest.iconright} alt="iconright" />}
        </S.WrapperInput>
      </S.CustomInputLabel>
    );
  }
);
