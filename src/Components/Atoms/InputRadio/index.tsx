import { ComponentProps } from "react";
import * as S from "./styles";

interface IInputRadioProps extends ComponentProps<"input"> {
  label: string;
}
export const InputRadio = ({ label, ...props }: IInputRadioProps) => {
  return (
    <S.CustomInputLabel>
      <S.CustomInputRadio {...props} type="radio" />
      {label && <span>{label}</span>}
    </S.CustomInputLabel>
  );
};
