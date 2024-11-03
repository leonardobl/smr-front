import { ComponentProps } from "react";
import * as S from "./styles";
export interface IButtonProps extends ComponentProps<"button"> {
  variant: "default" | "blue-light" | "blue-dark";
  iconleft?: string;
  iconright?: string;
}
export const Button = (props: IButtonProps) => {
  return (
    <S.CustomButton {...props}>
      {props.iconleft && <img src={props.iconleft} alt="iconleft" />}
      {props.children}
      {props.iconright && <img src={props.iconright} alt="iconright" />}
    </S.CustomButton>
  );
};
