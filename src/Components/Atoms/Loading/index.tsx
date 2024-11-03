import * as S from "./styles";

export function Loading() {
  return (
    <S.Wrapper>
      <S.WrapperImg>
        <S.ImgLoad src={"/assets/svg/load.svg"} alt="Loagin" />
        <span>Carregando...</span>
      </S.WrapperImg>
    </S.Wrapper>
  );
}
