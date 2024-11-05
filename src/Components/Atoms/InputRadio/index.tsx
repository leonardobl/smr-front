import { ComponentProps, useEffect, useState } from "react";
import * as S from "./styles";

interface IInputRadioProps extends ComponentProps<"div"> {
  label: string;
  options: string[];
  onChangeValue: (e: string) => void;
  value?: string;
  name: string;
}
export const InputRadio = ({
  label,
  options,
  onChangeValue,
  value,
  name,
}: IInputRadioProps) => {
  const [internValue, setInternValue] = useState("");

  useEffect(() => {
    setInternValue(value || "");
  }, [value]);

  useEffect(() => {
    onChangeValue(internValue);
  }, [internValue]);

  return (
    <S.CustomInputRadioLabel>
      {label && <span>{label}</span>}
      <S.WrapperInputs>
        {options.map((v) => (
          <S.WrapperInputLabel key={Math.random()}>
            <S.CustomInputRadio
              checked={v === internValue}
              type="radio"
              name={name}
              onChange={(e) => {
                setInternValue(e?.target?.value);
              }}
            />
            <span>{v}</span>
          </S.WrapperInputLabel>
        ))}
      </S.WrapperInputs>
    </S.CustomInputRadioLabel>
  );
};
