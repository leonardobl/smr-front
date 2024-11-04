import { ComponentProps } from "react";
import * as S from "./styles";

export interface ITableHeaderProps extends ComponentProps<"div"> {
  columns: string;
}

export const TableHeader = (props: ITableHeaderProps) => {
  return <S.CustomTableHeader {...props} />;
};
