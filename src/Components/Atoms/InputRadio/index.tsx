import React, { ComponentProps } from "react";
import * as S from "./styles";

interface IInputRadioProps extends ComponentProps<"input"> {
  label: string;
}
export const InputRadio = React.forwardRef<HTMLInputElement, IInputRadioProps>(
  ({ label, ...props }: IInputRadioProps, ref) => {
    return (
      <S.CustomInputLabel>
        <S.CustomInputRadio {...props} type="radio" ref={ref} />
        {label && <span>{label}</span>}
      </S.CustomInputLabel>
    );
  }
);
