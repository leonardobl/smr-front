import { ComponentProps } from "react";
import * as S from "./styles";

export interface IInputProps extends ComponentProps<"input"> {
  error?: boolean;
  label?: string;
  iconleft?: string;
  iconright?: string;
}
export const Input = ({ label, ...rest }: IInputProps) => {
  return (
    <S.CustomInputLabel {...rest}>
      {label && <span>{label}</span>}
      <S.WrapperInput {...rest}>
        {rest.iconleft && <img src={rest.iconleft} alt="iconleft" />}
        <S.CustomInput {...rest} />
        {rest.iconright && <img src={rest.iconright} alt="iconright" />}
      </S.WrapperInput>
    </S.CustomInputLabel>
  );
};
