import { ComponentProps } from "react";
import * as S from "./styles";

type ICardProps = ComponentProps<"div">;

export const Card = (props: ICardProps) => {
  return <S.Card {...props} />;
};
