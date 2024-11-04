import { ComponentProps } from "react";
import * as S from "./styles";
export interface ITableFooterProps extends ComponentProps<"div"> {
  columns: string;
}
export const TableFooter = (props: ITableFooterProps) => {
  return <S.TableFooter {...props} />;
};
