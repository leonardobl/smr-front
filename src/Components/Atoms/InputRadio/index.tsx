import { ComponentProps } from "react";
import * as S from "./styles";

interface IInputRadioProps extends ComponentProps<"input"> {
  label: string;
  values: string[];
}
export const InputRadio = ({ label, values, ...rest }: IInputRadioProps) => {
  return (
    <S.CustomInputRadioLabel>
      {label && <span>{label}</span>}
      <S.WrapperInputs>
        {values.map((v) => (
          <S.WrapperInputLabel key={Math.random()}>
            <S.CustomInputRadio {...rest} type="radio" value={v} />
            <span>{v}</span>
          </S.WrapperInputLabel>
        ))}
      </S.WrapperInputs>
    </S.CustomInputRadioLabel>
  );
};
