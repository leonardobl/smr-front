import { ComponentProps } from "react";
import * as S from "./styles";

export interface ITableItemProps extends ComponentProps<"div"> {
  columns: string;
}

export const TableItem = (props: ITableItemProps) => {
  return <S.CustomTableItem {...props} />;
};
