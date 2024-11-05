import { ComponentProps } from "react";
import * as S from "./styles";
interface IPageTempalateProps extends ComponentProps<"div"> {
  children: React.ReactNode;
}

export const PageTemplate = ({ children, ...rest }: IPageTempalateProps) => {
  return (
    <S.Container {...rest}>
      <S.Header>
        <S.WrapperHeader>
          {/* <img src="/assets/img/logo.png" alt="logo" /> */}
          <h1>
            SMR <span>- Simulador De Migração De Regime</span>
          </h1>
        </S.WrapperHeader>
      </S.Header>
      <S.WrapperPage>{children}</S.WrapperPage>
    </S.Container>
  );
};
