import * as S from "./styles";
import { Input } from "../../../Atoms/Input";
import { InputMoney } from "../../../Atoms/InputMoney";

export const FormAdvancedData = () => {
  return (
    <S.FormAdvancedDataContainer>
      <div>
        <Input label="Taxa de juros anual" />
      </div>
      <div>
        <Input label="Taxa de contribuição RPPS" />
      </div>
      <div>
        <Input label="Taxa de contribuição RPC" />
      </div>
      <div>
        <InputMoney label="Valor do teto do RGPS" />
      </div>{" "}
      <div>
        <InputMoney label="Salário de contribuição RPC" />
      </div>{" "}
      <div>
        <InputMoney label="Índice de inflação" />
      </div>
      <div>
        <Input type="number" label="Índice de reajuste do benefício RPC" />
      </div>
      <div>
        <Input type="number" label="Índice de reajuste do benefício RPPS" />
      </div>{" "}
      <div>
        <Input type="number" label="Índice de reajuste paridade" />
      </div>
    </S.FormAdvancedDataContainer>
  );
};
